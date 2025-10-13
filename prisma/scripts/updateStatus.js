import { PrismaClient as MainClient } from '../../node_modules/.prisma/main-client/index.js';

const prisma = new MainClient();

async function main() {
  console.log('🔍 Starting JiraEvent issue_status backfill for all records...');

  const batchSize = 100;
  let skip = 0;
  let totalUpdated = 0;
  let totalProcessed = 0;

  while (true) {
    const events = await prisma.jiraEvent.findMany({
      skip,
      take: batchSize,
      include: {
        payload: true,
      },
    });

    if (events.length === 0) break;

    for (const event of events) {
      totalProcessed++;
      const raw = event.payload?.raw_payload;

      if (!raw) {
        console.warn(`⚠️ Skipping event #${event.id} (no payload)`);
        continue;
      }

      try {
        const issueStatus = raw.issue?.fields?.status?.name;

        if (issueStatus) {
          await prisma.jiraEvent.update({
            where: { id: event.id },
            data: { issue_status: issueStatus },
          });
          totalUpdated++;
          console.log(`✅ Updated event #${event.id} → ${issueStatus}`);
        } else {
          console.warn(`⚠️ Event #${event.id} has no status in payload`);
        }
      } catch (err) {
        console.error(`❌ Failed for event #${event.id}:`, err);
      }
    }

    skip += batchSize;
  }

  console.log(`🎉 Done. Processed: ${totalProcessed}, Updated: ${totalUpdated}`);
}

main()
  .catch((err) => {
    console.error('❌ Error in backfill:', err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
