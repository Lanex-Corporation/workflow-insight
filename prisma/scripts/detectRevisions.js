import { PrismaClient, EventType } from "@prisma/client";

const prisma = new PrismaClient();

async function detectRevisions() {
  const tickets = await prisma.ticket.findMany({
    include: {
      events: { orderBy: { date_created: "asc" } }
    }
  });

  for (const ticket of tickets) {
    const events = ticket.events;

    for (let i = 0; i < events.length - 1; i++) {
      const current = events[i];
      const next = events[i + 1];

      if (
        current.event_type === EventType.closed &&
        next.event_type === EventType.opened
      ) {
        await prisma.revision.upsert({
          where: { pr_event_id: next.id },
          update: {},
          create: { pr_event_id: next.id, user_id: next.author_id }
        });
      }
    }
  }
}

detectRevisions()
  .then(() => console.log("✅ Done creating revisions."))
  .catch(console.error)
  .finally(() => prisma.$disconnect());
