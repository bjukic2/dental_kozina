import { prisma } from "@/utils/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";

type ResolvedParams = { kategorija: string; usluga: string };
type Props = { params: Promise<ResolvedParams> };

export default async function UslugaPage({ params }: Props) {
  const { kategorija, usluga } = await params;

  const service = await prisma.usluga.findFirst({
    where: { slug: usluga, kategorija: { slug: kategorija } },
    include: { kategorija: true },
  });

  if (!service) return notFound();

  return (
    <div className="px-6 py-20 bg-linear-to-b from-gray-950 via-gray-900 to-gray-950">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Slika */}
          <div className="relative w-full h-64 sm:h-80 md:h-[400px] rounded-2xl shadow-md overflow-hidden bg-gray-100">
            {service.slika ? (
              <Image
                src={service.slika}
                alt={service.naziv}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full text-gray-500">
                Nema slike
              </div>
            )}
          </div>

          {/* Opis */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-300">
              {service.naziv}
            </h1>

            <p className="text-gray-400">
              Kategorija:{" "}
              <span className="font-semibold text-gray-200">
                {service.kategorija.naziv}
              </span>
            </p>

            <p className="text-gray-300 leading-relaxed">{service.opis}</p>

            <p className="text-xl font-semibold mt-4">
              Cijena:{" "}
              {service.cijena !== null ? (
                <span className="text-blue-300">
                  {service.cijena.toFixed(2)} €
                </span>
              ) : (
                "/"
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const usluge = await prisma.usluga.findMany({
    select: { slug: true, kategorija: { select: { slug: true } } },
  });

  return usluge.map((u) => ({
    kategorija: u.kategorija.slug,
    usluga: u.slug,
  }));
}
