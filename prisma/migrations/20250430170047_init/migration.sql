-- CreateTable
CREATE TABLE "kategorija" (
    "id" SERIAL NOT NULL,
    "naziv" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "opis" TEXT,
    "slika" TEXT,

    CONSTRAINT "kategorija_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usluga" (
    "id" SERIAL NOT NULL,
    "naziv" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "opis" TEXT,
    "slika" TEXT,
    "cijena" DECIMAL(65,30),
    "kategorijaId" INTEGER NOT NULL,

    CONSTRAINT "usluga_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "kategorija_slug_key" ON "kategorija"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "usluga_slug_key" ON "usluga"("slug");

-- AddForeignKey
ALTER TABLE "usluga" ADD CONSTRAINT "usluga_kategorijaId_fkey" FOREIGN KEY ("kategorijaId") REFERENCES "kategorija"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
