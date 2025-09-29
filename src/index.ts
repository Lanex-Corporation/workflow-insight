import express, { Request, RequestHandler, Response } from "express";
import { GitlabWebhook } from "./lib/gitlab-webhook";
import { GithubWebhook } from "./lib/github-webhook";


const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req: Request, res: Response) => {
  res.send("Workflow Insight API is running!");
});

app.post("/webhook/gitlab", GitlabWebhook as RequestHandler);
app.post("/webhook", GithubWebhook as RequestHandler);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});