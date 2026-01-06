import { google } from "googleapis";
import {
  PrismaClient,
  EventType,
  SourceType,
} from "../../node_modules/.prisma/main-client/index.js";

type SheetRow = {
  ticket?: string;
  project?: string;
  event?: string;
  timestamp?: string;
  reviewer?: string;
  branch?: string;
  manager?: string;
};

const {
  GOOGLE_SHEETS_ID,
  GOOGLE_SHEETS_RANGE = "Sheet1!A:G",
  GOOGLE_SERVICE_ACCOUNT_EMAIL,
  GOOGLE_PRIVATE_KEY,
  DATABASE_URL,
} = process.env;

if (!GOOGLE_SHEETS_ID || !GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY) {
  throw new Error(
    "Missing Google Sheets env vars. Required: GOOGLE_SHEETS_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY."
  );
}

if (!DATABASE_URL) {
  throw new Error("Missing DATABASE_URL for MySQL connection.");
}

const prisma = new PrismaClient();

const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
const auth = new google.auth.JWT({
  email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
  // Private keys from env often contain escaped newlines.
  key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  scopes,
});

const sheets = google.sheets({ version: "v4", auth });

function normalizeHeader(header: string): keyof SheetRow {
  const key = header
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/\s*\/\s*/g, "/");
  const map: Record<string, keyof SheetRow> = {
    project: "project",
    "ticket id/number": "ticket",
    event: "event",
    timestamp: "timestamp",
    reviewer: "reviewer",
    branch: "branch",
    "manager/poc": "manager",
  };
  return map[key] ?? (key as keyof SheetRow);
}

function normalizeEvent(value?: string): EventType {
  const name = (value || "").trim().toLowerCase();
  switch (name) {
    case "open":
      return EventType.opened;
    case "merged":
      return EventType.merged;
    case "push":
      return EventType.pushed;
    default:
      throw new Error(`Unsupported event type value: "${value}"`);
  }
}

function parseTimestamp(value?: string): Date | null {
  if (!value) return null;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

async function upsertUser(username?: string | null) {
  if (!username) return null;
  const trimmed = username.trim();
  if (!trimmed) return null;
  return prisma.user.upsert({
    where: { username: trimmed },
    update: {},
    create: { username: trimmed },
  });
}
async function getDocumentAuthor(): Promise<string | null> {
  const meta = await sheets.spreadsheets.get({
    spreadsheetId: GOOGLE_SHEETS_ID!,
    fields: "properties/title",
  });

  const title = meta.data.properties?.title || "";
  const [author] = title
    .split("|")
    .map((part) => part.trim())
    .filter(Boolean);

  return author || null;
}

async function processRow(row: SheetRow, docAuthor: string | null) {
  const projectName = row.project?.trim();
  if (!projectName) {
    throw new Error("Project value is required for each row.");
  }

  const eventType = normalizeEvent(row.event);
  const timestamp = parseTimestamp(row.timestamp) ?? new Date();

  let project = await prisma.project.findFirst({
    where: { name: projectName },
  });

  if (!project) {
    project = await prisma.project.create({
      data: {
        name: projectName,
        repository: "External",
      },
    });
  }

  const ticketCode = row.ticket?.trim();
  const ticket = ticketCode
    ? await prisma.ticket.upsert({
        where: { code: ticketCode },
        update: {},
        create: {
          code: ticketCode,
          project_id: project.id,
        },
      })
    : null;

  const reviewer = await upsertUser("external");
  const author = await upsertUser(docAuthor);

  const existing = ticket
    ? await prisma.event.findFirst({
        where: {
          ticket_id: ticket.id,
          event_type: eventType,
          date_created: timestamp,
        },
      })
    : null;

  if (existing) {
    return { status: "skipped", reason: "duplicate-event", ticket: ticketCode };
  }

  const event = await prisma.event.create({
    data: {
      project_id: project.id,
      ticket_id: ticket?.id ?? null,
      author_id: author?.id ?? null,
      reviewer_id: reviewer?.id ?? null,
      branch: row.branch?.trim() || null,
      source: SourceType.external,
      event_type: eventType,
      date_created: timestamp,
      payload: {
        create: {
          raw_payload: row,
        },
      },
    },
  });

  return { status: "created", eventId: event.id };
}

async function run() {
  const [docAuthor, response] = await Promise.all([
    getDocumentAuthor(),
    sheets.spreadsheets.values.get({
      spreadsheetId: GOOGLE_SHEETS_ID,
      range: GOOGLE_SHEETS_RANGE,
    }),
  ]);

  const rows = response.data.values;
  if (!rows || rows.length === 0) {
    console.log("No rows found in the sheet.");
    return;
  }

  const [headerRow, ...dataRows] = rows;
  const headers = headerRow.map(normalizeHeader);

  const results: Array<{ status: string; ticket?: string }> = [];
  for (const row of dataRows) {
    const mapped: SheetRow = {};
    headers.forEach((header, index) => {
      mapped[header] = row[index];
    });

    try {
      const result = await processRow(mapped, docAuthor);
      results.push(result);
    } catch (error: any) {
      console.error("Failed to process row:", mapped, error?.message || error);
      results.push({ status: "failed", ticket: mapped.ticket });
    }
  }

  const created = results.filter((r) => r.status === "created").length;
  const skipped = results.filter((r) => r.status === "skipped").length;
  const failed = results.filter((r) => r.status === "failed").length;

  console.log(
    `ETL finished. Created: ${created}, Skipped: ${skipped}, Failed: ${failed}`
  );
}

run()
  .catch((err) => {
    console.error("ETL failed:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
