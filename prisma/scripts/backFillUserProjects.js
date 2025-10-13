import { PrismaClient as MainClient } from '../../node_modules/.prisma/main-client';

const prisma = new MainClient();

async function backfillUserProjects() {
  // fetch all projects with only the event author_id values
  const projects = await prisma.project.findMany({
    select: {
      id: true,
      name: true,
      events: {
        select: {
          author_id: true,
        },
      },
    },
  });

  for (const project of projects) {
    // collect all unique user ids from author and reviewer fields
    const contributorIds = new Set();

    for (const event of project.events) {
      if (event.author_id) contributorIds.add(event.author_id);
    }

    if (contributorIds.size === 0) continue;

    // update project to connect contributors
    await prisma.project.update({
      where: { id: project.id },
      data: {
        contributors: {
          connect: Array.from(contributorIds).map((id) => ({ id })),
        },
      },
    });

    console.log(
      `Project ${project.name} linked with contributors: ${Array.from(
        contributorIds
      ).join(", ")}`
    );
  }
}

backfillUserProjects()
  .then(() => console.log("Backfill completed."))
  .catch((e) => {
    console.error("Error backfilling data:", e);
  })
  .finally(() => prisma.$disconnect());
