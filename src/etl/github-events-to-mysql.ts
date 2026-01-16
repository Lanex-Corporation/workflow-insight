import "dotenv/config";
import { createHash } from "crypto";
import { Octokit } from "octokit";
import { Prisma, PrismaClient as EventsClient } from ".prisma/events-client";

type GitHubEvent = {
  id?: string | number;
  type?: string;
  actor?: {
    id?: number;
    login?: string;
    display_login?: string;
  };
  repo?: {
    id?: number;
    name?: string;
  };
  created_at?: string;
  payload?: unknown;
};

const {
  WEBHOOK_GITHUB_TOKEN,
  GITHUB_EVENTS_TOKEN,
  GITHUB_REPO,
  GITHUB_EVENTS_PAGES = "1",
  GITHUB_EVENTS_PER_PAGE = "100",
  EVENTS_API_DB_URL,
} = process.env;

const SOURCE = "github";

const token = GITHUB_EVENTS_TOKEN || WEBHOOK_GITHUB_TOKEN;

if (!token) {
  throw new Error("Missing GITHUB_EVENTS_TOKEN or WEBHOOK_GITHUB_TOKEN.");
}

if (!GITHUB_REPO) {
  throw new Error("Missing GITHUB_REPO (format: owner/repo).");
}

if (!EVENTS_API_DB_URL) {
  throw new Error("Missing EVENTS_API_DB_URL for database connection.");
}

const [owner, repo] = GITHUB_REPO.split("/");
if (!owner || !repo) {
  throw new Error("Invalid GITHUB_REPO. Expected format: owner/repo.");
}

const octokit = new Octokit({ auth: token });
const prisma = new EventsClient();

function safeJsonStringify(value: unknown): string {
  const serialized = JSON.stringify(value, (_key, val) =>
    typeof val === "bigint" ? val.toString() : val
  );
  return serialized ?? "{}";
}

function normalizeEventId(event: GitHubEvent): string | null {
  if (event.id !== undefined && event.id !== null) {
    const id = String(event.id).trim();
    if (id) return id;
  }
  const fallback = safeJsonStringify(event);
  if (!fallback) return null;
  return createHash("sha256").update(fallback).digest("hex");
}

function parseCreatedAt(value?: string): Date | null {
  if (!value) return null;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function toNullableNumber(value: unknown): number | null {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }
  return null;
}

function toJsonPayload(event: GitHubEvent): Prisma.InputJsonValue {
  return JSON.parse(JSON.stringify(event)) as Prisma.InputJsonValue;
}

function parseRepoFullName(event: GitHubEvent): string {
  return event.repo?.name || `${owner}/${repo}`;
}

function parseBranchFromRef(ref?: string): string | null {
  if (!ref) return null;
  if (ref.startsWith("refs/heads/")) {
    return ref.replace("refs/heads/", "");
  }
  return ref;
}

function normalizePayload(payload: unknown): any | null {
  if (!payload) return null;
  if (typeof payload === "string") {
    try {
      return JSON.parse(payload);
    } catch {
      return null;
    }
  }
  return payload;
}

async function getPushStats(
  repoFullName: string,
  payload: any
): Promise<{
  additions: number | null;
  deletions: number | null;
  changedFiles: number | null;
  branch: string | null;
}> {
  const ref = typeof payload?.ref === "string" ? payload.ref : null;
  const branch = parseBranchFromRef(ref);
  const base = typeof payload?.before === "string" ? payload.before : null;
  const head = typeof payload?.head === "string" ? payload.head : null;

  if (!base || !head) {
    return { additions: null, deletions: null, changedFiles: null, branch };
  }

  const [repoOwner, repoName] = repoFullName.split("/");
  if (!repoOwner || !repoName) {
    return { additions: null, deletions: null, changedFiles: null, branch };
  }

  try {
    const response = await octokit.request(
      "GET /repos/{owner}/{repo}/compare/{base}...{head}",
      {
        owner: repoOwner,
        repo: repoName,
        base,
        head,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );

    const files = Array.isArray(response.data.files) ? response.data.files : [];
    const additions = files.reduce(
      (sum: number, file: any) => sum + (file?.additions || 0),
      0
    );
    const deletions = files.reduce(
      (sum: number, file: any) => sum + (file?.deletions || 0),
      0
    );
    const changedFiles = files.length;

    return { additions, deletions, changedFiles, branch };
  } catch (error: any) {
    console.error("Failed to fetch push stats:", error?.message || error);
    return { additions: null, deletions: null, changedFiles: null, branch };
  }
}

async function getPullRequestStats(
  repoFullName: string,
  payload: any
): Promise<{
  additions: number | null;
  deletions: number | null;
  changedFiles: number | null;
  branch: string | null;
}> {
  const prNumber = payload?.pull_request?.number;
  if (typeof prNumber !== "number") {
    return {
      additions: null,
      deletions: null,
      changedFiles: null,
      branch: null,
    };
  }

  const branch = payload?.pull_request?.head?.ref || null;
  const [repoOwner, repoName] = repoFullName.split("/");
  if (!repoOwner || !repoName) {
    return { additions: null, deletions: null, changedFiles: null, branch };
  }

  let page = 1;
  let additions = 0;
  let deletions = 0;
  let changedFiles = 0;

  try {
    while (true) {
      const response = await octokit.request(
        "GET /repos/{owner}/{repo}/pulls/{pull_number}/files",
        {
          owner: repoOwner,
          repo: repoName,
          pull_number: prNumber,
          per_page: 100,
          page,
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
          },
        }
      );

      const files = Array.isArray(response.data) ? response.data : [];
      for (const file of files) {
        additions += file?.additions || 0;
        deletions += file?.deletions || 0;
        changedFiles += 1;
      }

      if (files.length < 100) {
        break;
      }
      page += 1;
    }
  } catch (error: any) {
    console.error("Failed to fetch PR stats:", error?.message || error);
    return { additions: null, deletions: null, changedFiles: null, branch };
  }

  return { additions, deletions, changedFiles, branch };
}

async function fetchRepoEvents(
  maxPages: number,
  perPage: number
): Promise<GitHubEvent[]> {
  const events: GitHubEvent[] = [];
  for (let page = 1; page <= maxPages; page += 1) {
    const response = await octokit.request("GET /repos/{owner}/{repo}/events", {
      owner,
      repo,
      per_page: perPage,
      page,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    const batch = response.data as GitHubEvent[];
    events.push(...batch);

    if (batch.length < perPage) {
      break;
    }
  }

  return events;
}

async function storeEvents(events: GitHubEvent[]): Promise<{
  processed: number;
  skipped: number;
  ignored: number;
}> {
  if (events.length === 0) {
    return { processed: 0, skipped: 0, ignored: 0 };
  }

  let processed = 0;
  let skipped = 0;
  let ignored = 0;
  const allowedTypes = new Set(["PushEvent", "PullRequestEvent"]);

  for (const event of events) {
    if (!event.type || !allowedTypes.has(event.type)) {
      ignored += 1;
      continue;
    }

    const eventId = normalizeEventId(event);
    if (!eventId) {
      skipped += 1;
      continue;
    }

    const repoFullName = parseRepoFullName(event);
    const payload = normalizePayload(event.payload);
    let branch: string | null = null;
    let additions: number | null = null;
    let deletions: number | null = null;
    let changedFiles: number | null = null;

    if (event.type === "PushEvent") {
      const stats = await getPushStats(repoFullName, payload);
      branch = stats.branch;
      additions = stats.additions;
      deletions = stats.deletions;
      changedFiles = stats.changedFiles;
    } else if (event.type === "PullRequestEvent") {
      const stats = await getPullRequestStats(repoFullName, payload);
      branch = stats.branch;
      additions = stats.additions;
      deletions = stats.deletions;
      changedFiles = stats.changedFiles;
    }

    const createdAt = parseCreatedAt(event.created_at);
    const jsonPayload = toJsonPayload(event);
    const prAction =
      event.type === "PullRequestEvent" && typeof payload?.action === "string"
        ? payload.action
        : null;
    const updateData = {
      event_type: event.type || "unknown",
      repo_id: toNullableNumber(event.repo?.id),
      branch,
      actor_id: toNullableNumber(event.actor?.id),
      actor_login: event.actor?.login || null,
      pr_action: prAction,
      additions,
      deletions,
      changed_files: changedFiles,
      created_at: createdAt,
      payload: jsonPayload,
    };

    await prisma.gitEvent.upsert({
      where: {
        source_external_event_id: {
          source: SOURCE,
          external_event_id: eventId,
        },
      },
      update: updateData,
      create: {
        source: SOURCE,
        external_event_id: eventId,
        ...updateData,
      },
    });

    processed += 1;
  }

  return { processed, skipped, ignored };
}

async function run(): Promise<void> {
  const maxPages = Math.max(1, Number.parseInt(GITHUB_EVENTS_PAGES, 10) || 1);
  const perPage = Math.min(
    100,
    Math.max(1, Number.parseInt(GITHUB_EVENTS_PER_PAGE, 10) || 100)
  );

  const events = await fetchRepoEvents(maxPages, perPage);
  const result = await storeEvents(events);

  console.log(
    `Stored ${result.processed} events (skipped ${result.skipped}, ignored ${result.ignored}) for ${owner}/${repo} into git_events (${SOURCE}).`
  );
}

run()
  .catch((error) => {
    console.error("GitHub events script failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
