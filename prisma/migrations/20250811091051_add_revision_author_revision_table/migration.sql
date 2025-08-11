/*
  Warnings:

  - Added the required column `user_id` to the `Revision` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Revision` ADD COLUMN `user_id` INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX `Revision_user_id_idx` ON `Revision`(`user_id`);

-- AddForeignKey
ALTER TABLE `Revision` ADD CONSTRAINT `Revision_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
