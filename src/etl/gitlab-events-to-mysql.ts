import "dotenv/config";
import axios from "axios";
import { createHash } from "crypto";
import {
  Prisma,
  PrismaClient as EventsClient,
} from "../../node_modules/.prisma/events-client/index.js";

type GitlabEvent = {
  id?: number | string;
  action_name?: string;
  target_type?: string;
  target_id?: number;
  target_iid?: number;
  project_id?: number;
  author_id?: number;
  author_username?: string;
  created_at?: string;
  push_data?: {
    ref?: string;
    commit_from?: string;
    commit_to?: string;
  };
};

type DiffItem = {
  diff?: string;
};

const {
  GITLAB_API_URL = "https://gitlab.lanexus.com/api/v4",
  GITLAB_TOKEN,
  GITLAB_PRIVATE_TOKEN,
  GITLAB_PROJECTS,
  GITLAB_EVENTS_PAGES = "1",
  GITLAB_EVENTS_PER_PAGE = "100",
  EVENTS_API_DB_URL,
} = process.env;

const SOURCE = "gitlab";

const token = GITLAB_PRIVATE_TOKEN || GITLAB_TOKEN;

if (!token) {
  throw new Error("Missing GITLAB_PRIVATE_TOKEN or GITLAB_TOKEN.");
}

if (!GITLAB_PROJECTS) {
  throw new Error(
    "Missing GITLAB_PROJECTS. Provide project IDs or paths (comma/space-separated).",
  );
}

if (!EVENTS_API_DB_URL) {
  throw new Error("Missing EVENTS_API_DB_URL for database connection.");
}

const projectInputs = GITLAB_PROJECTS.split(",")
  .map((v) => v.trim())
  .filter(Boolean);

const prisma = new EventsClient();
const gitlab = axios.create({
  baseURL: GITLAB_API_URL.replace(/\/$/, ""),
  headers: {
    "PRIVATE-TOKEN": token,
  },
});

const INITIAL_COMMIT_HASH = "0000000000000000000000000000000000000000";
const PUSH_ACTIONS = new Set(["pushed", "pushed to", "pushed new"]);

function normalizeProjectId(value: string): string {
  if (/^\d+$/.test(value)) {
    return value;
  }
  return encodeURIComponent(value);
}

function safeJsonStringify(value: unknown): string {
  const serialized = JSON.stringify(value, (_key, val) =>
    typeof val === "bigint" ? val.toString() : val,
  );
  return serialized ?? "{}";
}

function normalizeEventId(event: GitlabEvent): string | null {
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

function parseBranchFromRef(ref?: string): string | null {
  if (!ref) return null;
  if (ref.startsWith("refs/heads/")) {
    return ref.replace("refs/heads/", "");
  }
  return ref;
}

function toJsonPayload(event: GitlabEvent): Prisma.InputJsonValue {
  return JSON.parse(JSON.stringify(event)) as Prisma.InputJsonValue;
}

function computeDiffStats(diffs: DiffItem[]): {
  additions: number;
  deletions: number;
  changedFiles: number;
} {
  let additions = 0;
  let deletions = 0;
  let changedFiles = 0;

  for (const item of diffs) {
    const diff = item.diff;
    if (!diff) {
      continue;
    }

    changedFiles += 1;
    for (const line of diff.split("\n")) {
      if (line.startsWith("+") && !line.startsWith("+++")) {
        additions += 1;
      } else if (line.startsWith("-") && !line.startsWith("---")) {
        deletions += 1;
      }
    }
  }

  return { additions, deletions, changedFiles };
}

async function fetchProjectEvents(
  projectId: string,
  maxPages: number,
  perPage: number,
): Promise<GitlabEvent[]> {
  const events: GitlabEvent[] = [];

  for (let page = 1; page <= maxPages; page += 1) {
    const response = await gitlab.get(`/projects/${projectId}/events`, {
      params: {
        per_page: perPage,
        page,
      },
    });

    const batch = response.data as GitlabEvent[];
    events.push(...batch);

    if (batch.length < perPage) {
      break;
    }
  }

  return events;
}

async function fetchCompareDiffs(
  projectId: string,
  from: string,
  to: string,
): Promise<DiffItem[]> {
  const response = await gitlab.get(
    `/projects/${projectId}/repository/compare`,
    {
      params: {
        from,
        to,
      },
    },
  );

  return Array.isArray(response.data?.diffs) ? response.data.diffs : [];
}

async function fetchCommitDiffs(
  projectId: string,
  sha: string,
): Promise<DiffItem[]> {
  const response = await gitlab.get(
    `/projects/${projectId}/repository/commits/${encodeURIComponent(sha)}/diff`,
  );

  return Array.isArray(response.data) ? response.data : [];
}

async function fetchMergeRequestChanges(
  projectId: string,
  iid: number,
): Promise<{ diffs: DiffItem[]; branch: string | null }> {
  const response = await gitlab.get(
    `/projects/${projectId}/merge_requests/${iid}/changes`,
  );

  const diffs = Array.isArray(response.data?.changes)
    ? response.data.changes
    : [];
  const branch = response.data?.source_branch || null;

  return { diffs, branch };
}

async function getPushStats(
  projectId: string,
  payload: any,
): Promise<{
  additions: number | null;
  deletions: number | null;
  changedFiles: number | null;
  branch: string | null;
}> {
  const ref =
    typeof payload?.push_data?.ref === "string" ? payload.push_data.ref : null;
  const branch = parseBranchFromRef(ref);
  const from =
    typeof payload?.push_data?.commit_from === "string"
      ? payload.push_data.commit_from
      : null;
  const to =
    typeof payload?.push_data?.commit_to === "string"
      ? payload.push_data.commit_to
      : null;

  if (!to) {
    return { additions: null, deletions: null, changedFiles: null, branch };
  }

  try {
    const diffs =
      !from || from === INITIAL_COMMIT_HASH
        ? await fetchCommitDiffs(projectId, to)
        : await fetchCompareDiffs(projectId, from, to);
    const stats = computeDiffStats(diffs);
    return {
      additions: stats.additions,
      deletions: stats.deletions,
      changedFiles: stats.changedFiles,
      branch,
    };
  } catch (error: any) {
    console.error("Failed to fetch push stats:", error?.message || error);
    return { additions: null, deletions: null, changedFiles: null, branch };
  }
}

async function getMergeRequestStats(
  projectId: string,
  iid: number,
): Promise<{
  additions: number | null;
  deletions: number | null;
  changedFiles: number | null;
  branch: string | null;
}> {
  try {
    const { diffs, branch } = await fetchMergeRequestChanges(projectId, iid);
    const stats = computeDiffStats(diffs);
    return {
      additions: stats.additions,
      deletions: stats.deletions,
      changedFiles: stats.changedFiles,
      branch,
    };
  } catch (error: any) {
    console.error(
      "Failed to fetch merge request stats:",
      error?.message || error,
    );
    return {
      additions: null,
      deletions: null,
      changedFiles: null,
      branch: null,
    };
  }
}

async function storeEvents(events: GitlabEvent[]): Promise<{
  processed: number;
  skipped: number;
  ignored: number;
}> {
  let processed = 0;
  let skipped = 0;
  let ignored = 0;

  for (const event of events) {
    const actionName =
      typeof event.action_name === "string" ? event.action_name.trim() : "";
    const isPush = actionName ? PUSH_ACTIONS.has(actionName) : false;
    const isMergeRequest = event.target_type === "MergeRequest";
    if (!isPush && !isMergeRequest) {
      ignored += 1;
      continue;
    }

    const eventId = normalizeEventId(event);
    if (!eventId) {
      skipped += 1;
      continue;
    }

    const projectId = event.project_id ? String(event.project_id) : null;
    if (!projectId) {
      skipped += 1;
      continue;
    }

    let branch: string | null = null;
    let additions: number | null = null;
    let deletions: number | null = null;
    let changedFiles: number | null = null;
    const prAction = isMergeRequest && actionName ? actionName : null;

    if (isPush) {
      const stats = await getPushStats(projectId, event);
      branch = stats.branch;
      additions = stats.additions;
      deletions = stats.deletions;
      changedFiles = stats.changedFiles;
    } else if (isMergeRequest) {
      const iid =
        typeof event.target_iid === "number"
          ? event.target_iid
          : typeof event.target_id === "number"
            ? event.target_id
            : null;
      if (iid !== null) {
        const stats = await getMergeRequestStats(projectId, iid);
        branch = stats.branch;
        additions = stats.additions;
        deletions = stats.deletions;
        changedFiles = stats.changedFiles;
      }
    }

    const createdAt = parseCreatedAt(event.created_at);
    const payload = toJsonPayload(event);
    const updateData = {
      event_type: isPush ? "PushEvent" : "MergeRequestEvent",
      repo_id: event.project_id ?? null,
      branch,
      actor_id: event.author_id ?? null,
      actor_login: event.author_username ?? null,
      pr_action: prAction,
      additions,
      deletions,
      changed_files: changedFiles,
      created_at: createdAt,
      payload,
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
  const maxPages = Math.max(1, Number.parseInt(GITLAB_EVENTS_PAGES, 10) || 1);
  const perPage = Math.min(
    100,
    Math.max(1, Number.parseInt(GITLAB_EVENTS_PER_PAGE, 10) || 100),
  );

  let processed = 0;
  let skipped = 0;
  let ignored = 0;

  for (const project of projectInputs) {
    const projectId = normalizeProjectId(project);
    const events = await fetchProjectEvents(projectId, maxPages, perPage);
    const result = await storeEvents(events);
    processed += result.processed;
    skipped += result.skipped;
    ignored += result.ignored;
  }

  console.log(
    `Stored ${processed} events (skipped ${skipped}, ignored ${ignored}) into git_events (${SOURCE}).`,
  );
}

run()
  .catch((error) => {
    console.error("GitLab events script failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
