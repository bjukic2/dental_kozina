-- CreateTable
CREATE TABLE "usporedba" (
    "id" SERIAL NOT NULL,
    "naziv" TEXT NOT NULL,
    "opis" TEXT,
    "prijeUrl" TEXT NOT NULL,
    "poslijeUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usporedba_pkey" PRIMARY KEY ("id")
);
