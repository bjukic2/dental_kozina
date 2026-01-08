import { prisma } from "@/utils/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import BackButton from "@/components/BackButton";

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
    <div className="px-6 py-20 bg-[linear-gradient(to_bottom,#030712_0%,#111827_50%,#030712_100%)] min-h-screen flex">
      <div className="w-full max-w-4xl mx-auto my-auto">
        {/* Back botun */}
        <div className="mb-10">
          <BackButton />
        </div>

        {/* Glavni card */}
        <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-10 shadow-xl">
          {/* Naslov */}
          <h1 className="text-3xl md:text-4xl font-bold text-blue-300 mb-8 text-center">
            {service.naziv}
          </h1>

          {/* Slika preko cijele širine */}
          <div className="relative w-full h-64 sm:h-80 md:h-[380px] rounded-xl overflow-hidden bg-gray-900 mb-10">
            {service.slika ? (
              <Image
                src={service.slika}
                alt={service.naziv}
                fill
                className="object-cover"
                sizes="100vw"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full text-gray-500">
                Nema slike
              </div>
            )}
          </div>

          {/* Opis u svjetlijem okviru */}
          <div className="bg-gray-700/40 border border-gray-600 rounded-xl p-6 text-gray-300 leading-relaxed mb-6">
            {service.opis}
          </div>

          {/* Cijena — odvojeni okvir ispod opisa */}
          <div className="flex justify-end">
            <div className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 shadow text-gray-200 text-lg font-semibold">
              {service.cijena !== null ? (
                <span className="text-blue-300">
                  {service.cijena.toFixed(2)} €
                </span>
              ) : (
                <span className="text-gray-400">/</span>
              )}
            </div>
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
