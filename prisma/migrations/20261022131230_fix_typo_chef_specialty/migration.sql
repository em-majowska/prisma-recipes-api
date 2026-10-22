/*
  Warnings:

  - You are about to drop the column `specialy` on the `Chef` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Chef" DROP COLUMN "specialy",
ADD COLUMN     "specialty" TEXT;
