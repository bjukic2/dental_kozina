/*
  Warnings:

  - Made the column `opis` on table `usporedba` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "usporedba" ALTER COLUMN "opis" SET NOT NULL;
