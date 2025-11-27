import { prisma } from "@/utils/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

type ResolvedParams = { kategorija: string };
type Props = { params: ResolvedParams };

export default async function KategorijaPage({ params }: Props) {
  const { kategorija } = params;

  const kat = await prisma.kategorija.findUnique({
    where: { slug: kategorija },
    include: { usluge: true },
  });

  if (!kat) return notFound();

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          {kat.naziv}
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">{kat.opis}</p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 justify-center">
        {kat.usluge.map((usluga) => (
          <Link key={usluga.id} href={`/usluge/${kat.slug}/${usluga.slug}`}>
            <div className="group bg-white rounded-2xl shadow-md border overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative w-full aspect-video bg-gray-100">
                {usluga.slika ? (
                  <Image
                    src={usluga.slika}
                    alt={usluga.naziv}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-gray-500">
                    Nema slike
                  </div>
                )}
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  {usluga.naziv}
                </h3>
                <p className="text-gray-600 mt-2">{usluga.opis}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const kategorije = await prisma.kategorija.findMany({
    select: { slug: true },
  });
  return kategorije.map((kat) => ({ kategorija: kat.slug }));
}
