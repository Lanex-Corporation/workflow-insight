import { Request, Response } from "express";
import { PrismaClient } from ".prisma/main-client";

const prisma = new PrismaClient();

export const JiraWebhook = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const {
      webhookEvent,
      issue_event_type_name,
      issue,
    } = payload;

    const { fields } = issue || {};
    const { project, assignee, status } = fields || {};

    const jiraProject = await prisma.jiraProject.upsert({
      where: { key: project.key },
      update: {
        name: project.name,
      },
      create: {
        key: project.key,
        name: project.name,
      },
    });

    const jiraUser = assignee
      ? await prisma.jiraUser.upsert({
        where: { account_id: assignee.accountId },
        update: {
          display_name: assignee.displayName,
        },
        create: {
          display_name: assignee.displayName,
          account_id: assignee.accountId,
        },
      })
      : null;

    const jiraIssue = issue
      ? await prisma.jiraIssue.upsert({
        where: { issue_id: issue.id }, // ✅ must be a unique field
        update: {
          status_name: status?.name,
          status_id: status?.id,
          timespent: fields?.timespent ?? 0,
          timeestimate: fields?.timeestimate ?? 0,
          updated_at: new Date(fields?.updated ?? Date.now()),
          resolution_date: fields?.resolutiondate
            ? new Date(fields.resolutiondate)
            : null,
          project_id: jiraProject.id,
          assignee_id: jiraUser?.id ?? null, // ✅ safer direct reference
        },
        create: {
          key: issue.key,
          issue_id: issue.id,
          status_name: status?.name,
          status_id: status?.id,
          timespent: fields?.timespent ?? 0,
          timeestimate: fields?.timeestimate ?? 0,
          created_at: new Date(fields?.created ?? Date.now()),
          updated_at: new Date(fields?.updated ?? Date.now()),
          resolution_date: fields?.resolutiondate
            ? new Date(fields.resolutiondate)
            : null,
          project_id: jiraProject.id,
          assignee_id: jiraUser?.id ?? null,
        },
      })
      : null;

    const jiraEvent = await prisma.jiraEvent.create({
      data: {
        webhook_event: webhookEvent,
        issue_event_type: issue_event_type_name,
        issue: jiraIssue ? { connect: { id: jiraIssue.id } } : undefined,
        project: { connect: { id: jiraProject.id } },
        user: jiraUser ? { connect: { id: jiraUser.id } } : undefined,
        payload: {
          create: {
            raw_payload: payload,
          },
        },
      },
    });

    res.status(200).json({
      success: true,
      message: "JIRA webhook processed successfully",
      eventId: jiraEvent.id,
    });
  } catch (error) {
    console.error("Error handling JIRA webhook:", error);
    res.status(500).json({ success: false, error: (error as any).message });
  }
};
