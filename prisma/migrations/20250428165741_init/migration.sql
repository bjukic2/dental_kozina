/*
  Warnings:

  - You are about to drop the `Poruka` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Poruka";

-- CreateTable
CREATE TABLE "poruka" (
    "id" SERIAL NOT NULL,
    "ime" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "poruka" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "poruka_pkey" PRIMARY KEY ("id")
);
