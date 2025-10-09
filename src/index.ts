import express, { Request, RequestHandler, Response } from "express";
import { GitlabWebhook } from "./lib/gitlab-webhook";
import { GithubWebhook } from "./lib/github-webhook";
import { JiraWebhook } from "./lib/jira-webhook";
// import { Octokit } from "octokit";

// import { fetchPushCommitStatsFromAPI } from "./lib/helper";
// import { EventTypeAnnex, PrismaClient } from "../prisma/annex/generated";


const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req: Request, res: Response) => {
  res.send("Workflow Insight API is running!");
});

app.post("/webhook/gitlab", GitlabWebhook as RequestHandler);
app.post("/webhook", GithubWebhook as RequestHandler);
app.post("/jira", JiraWebhook as RequestHandler);

//Expedite Jira feature 

// const prisma = new PrismaClient();
// const SOURCE = "github";
// app.get("/github/events", async (req: Request, res: Response) => {
//   try {

//     const { owner, repo, page = "1", per_page = "30" } = req.query;

//     if (!repo) {
//       return res.status(400).json({ error: "Missing required query param: repo" });
//     }

//     const octokit = new Octokit({
//       auth: process.env.WEBHOOK_GITHUB_TOKEN, // optional but recommended
//     });

//     const response = await octokit.request("GET /repos/{owner}/{repo}/events", {
//       owner: owner as string,
//       repo: repo as string,
//       page: parseInt(page as string, 10),
//       per_page: parseInt(per_page as string, 10),
//       headers: {
//         "X-GitHub-Api-Version": "2022-11-28",
//       },
//     });

//     const events = response.data



//     for (const event of events) {
//       const { id: github_event_id, type, actor, repo, payload } = event;

//       if (type === "PushEvent" || false) {
//         const username = actor?.login

//         const fullRepoName = repo?.name;
//         const projectName = repo?.name.split("/")[1] || "";
//         const branch = payload?.ref?.replace("refs/heads/", "")

//         const ignoredPrefixes = ["dev", "develop", "staging", "main", "prod", "production"];

//         if (branch && ignoredPrefixes.some(prefix => branch.startsWith(prefix))) {
//           // Skipping this branch
//           continue;
//         }


//         let ticketCode: string | null = null;
//         const parts = branch.split("/");



//         if (parts.length > 1) {
//           const subParts = parts[1].split("-");
//           if (subParts.length >= 2) {
//             ticketCode = `${subParts[0]}-${subParts[1]}`;
//           } else if (subParts.length === 1) {
//             ticketCode = subParts[0];
//           }
//         }

//         let project = await prisma.projectAnnex.findFirst({
//           where: { repository: fullRepoName },
//         });

//         if (!project) {
//           project = await prisma.projectAnnex.create({
//             data: {
//               name: projectName,
//               repository: fullRepoName,
//             },
//           });
//         }
//         const user = await prisma.userAnnex.upsert({
//           where: { username },
//           update: {},
//           create: {
//             username,
//             projects: {
//               connect: { id: project.id },
//             },
//           },
//         });

//         let ticket = null;
//         if (ticketCode) {
//           ticket = await prisma.ticketAnnex.upsert({
//             where: { code: ticketCode },
//             update: {},
//             create: { code: ticketCode, project_id: project.id },
//           });
//         }

//         const stats = await fetchPushCommitStatsFromAPI(fullRepoName, payload.commits);

//         const { totalAdditions, totalDeletions, filesChanged } = stats;


//         await prisma.eventAnnex.upsert({
//           where: { github_event_id },
//           update: {
//             additions: totalAdditions,
//             deletions: totalDeletions,
//             changed_files: filesChanged,
//             payload: {
//               upsert: {
//                 create: { raw_payload: payload },
//                 update: { raw_payload: payload },
//               },
//             },
//           },
//           create: {
//             github_event_id,
//             branch,
//             source: SOURCE,
//             project_id: project.id,
//             author_id: user.id,
//             additions: totalAdditions,
//             deletions: totalDeletions,
//             changed_files: filesChanged,
//             ticket_id: ticket?.id || null,
//             event_type: EventTypeAnnex.pushed,
//             date_created: new Date(),
//             payload: {
//               create: {
//                 raw_payload: payload,
//               },
//             },
//           },
//         });


//       } else if (type === "PullRequestEvent") {
//         // Handle PullRequestEvent
//         console.log("🔵 Pull Request Event");

//         console.log(event)

//         //   user: actor?.login,
//         //   repo: repo?.name,
//         //   action: payload?.action, // e.g., opened, closed, merged
//         //   pr_number: payload?.pull_request?.number,
//         //   title: payload?.pull_request?.title,
//         //   merged: payload?.pull_request?.merged,
//         //   created_at,
//         // });

//         // Example: save to DB or trigger workflow
//         // await savePullRequestEventToDB({ actor, repo, payload, created_at });
//       } else {
//         // Other event types (optional)
//         console.log(`⚪ Skipped event type: ${type}`);
//       }
//     }

//     res.status(200).send("Push events processed successfully.");


//   } catch (error: any) {
//     console.error("Error fetching and saving to db GitHub events:", error);
//     res.status(500).json({ error: error.message || "Internal server error" });
//   }
// });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});