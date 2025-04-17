-- CreateTable
CREATE TABLE "Poruka" (
    "id" SERIAL NOT NULL,
    "ime" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "poruka" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Poruka_pkey" PRIMARY KEY ("id")
);
