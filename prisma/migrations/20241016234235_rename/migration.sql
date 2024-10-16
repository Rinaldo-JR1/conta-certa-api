/*
  Warnings:

  - You are about to drop the column `parcels` on the `Transaction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "parcels",
ADD COLUMN     "parcel" INTEGER NOT NULL DEFAULT 1;
