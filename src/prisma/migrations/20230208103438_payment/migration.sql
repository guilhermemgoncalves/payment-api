-- CreateTable
CREATE TABLE `payment` (
    `id` VARCHAR(191) NOT NULL,
    `amount` DECIMAL NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `customerid` VARCHAR(191) NOT NULL,
    `storeid` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL DEFAULT 'www.google.com.br',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `payment` ADD CONSTRAINT `payment_customerid_fkey` FOREIGN KEY (`customerid`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payment` ADD CONSTRAINT `payment_storeid_fkey` FOREIGN KEY (`storeid`) REFERENCES `store`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
