-- DropForeignKey
ALTER TABLE `Revision` DROP FOREIGN KEY `Revision_reviewer_id_fkey`;

-- AlterTable
ALTER TABLE `Revision` MODIFY `reviewer_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Revision` ADD CONSTRAINT `Revision_reviewer_id_fkey` FOREIGN KEY (`reviewer_id`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
