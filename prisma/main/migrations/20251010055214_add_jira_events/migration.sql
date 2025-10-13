-- CreateTable
CREATE TABLE `JiraEvent` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `webhook_event` VARCHAR(191) NOT NULL,
    `issue_event_type` VARCHAR(191) NOT NULL,
    `issue_id` INTEGER NULL,
    `project_id` INTEGER NULL,
    `user_id` INTEGER NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `JiraProject` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `key` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `JiraProject_key_key`(`key`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `JiraUser` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `account_id` VARCHAR(191) NOT NULL,
    `display_name` VARCHAR(191) NULL,

    UNIQUE INDEX `JiraUser_account_id_key`(`account_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `JiraIssue` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `issueId` VARCHAR(191) NOT NULL,
    `summary` VARCHAR(191) NULL,
    `key` VARCHAR(191) NOT NULL,
    `status_name` VARCHAR(191) NULL,
    `status_id` VARCHAR(191) NULL,
    `timespent` INTEGER NULL,
    `timeestimate` INTEGER NULL,
    `created_at` DATETIME(3) NULL,
    `updated_at` DATETIME(3) NULL,
    `resolution_date` DATETIME(3) NULL,
    `project_id` INTEGER NULL,
    `creator_id` INTEGER NULL,
    `assignee_id` INTEGER NULL,
    `sprint_name` VARCHAR(191) NULL,
    `sprint_start` DATETIME(3) NULL,
    `sprint_end` DATETIME(3) NULL,
    `raw_fields` JSON NULL,

    UNIQUE INDEX `JiraIssue_issueId_key`(`issueId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `JiraPayload` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `raw_payload` JSON NOT NULL,
    `event_id` INTEGER NOT NULL,

    UNIQUE INDEX `JiraPayload_event_id_key`(`event_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `JiraEvent` ADD CONSTRAINT `JiraEvent_issue_id_fkey` FOREIGN KEY (`issue_id`) REFERENCES `JiraIssue`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `JiraEvent` ADD CONSTRAINT `JiraEvent_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `JiraProject`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `JiraEvent` ADD CONSTRAINT `JiraEvent_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `JiraUser`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `JiraIssue` ADD CONSTRAINT `JiraIssue_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `JiraProject`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `JiraIssue` ADD CONSTRAINT `JiraIssue_creator_id_fkey` FOREIGN KEY (`creator_id`) REFERENCES `JiraUser`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `JiraIssue` ADD CONSTRAINT `JiraIssue_assignee_id_fkey` FOREIGN KEY (`assignee_id`) REFERENCES `JiraUser`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `JiraPayload` ADD CONSTRAINT `JiraPayload_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `JiraEvent`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
