import { prisma } from "@/utils/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import BackButton from "@/components/BackButton";

type ResolvedParams = { kategorija: string };
type Props = { params: Promise<ResolvedParams> };

export default async function KategorijaPage({ params }: Props) {
  const { kategorija } = await params;

  const kat = await prisma.kategorija.findUnique({
    where: { slug: kategorija },
    include: { usluge: true },
  });

  if (!kat) return notFound();

  return (
    <div className="px-6 py-20 bg-[linear-gradient(to_bottom,#030712_0%,#111827_50%,#030712_100%)] min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header: Back + Naslov */}
        <div className="flex items-center justify-between mb-12">
          {/* Back button */}
          <BackButton />

          {/* Naslov */}
          <h1 className="text-3xl md:text-4xl font-bold text-blue-300 text-center">
            {kat.naziv}
          </h1>

          {/* Balancer div — ista visina kao botun */}
          <div className="px-4 py-2 opacity-0">placeholder</div>
        </div>

        {/* Grid kartica */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
          {kat.usluge.map((usluga) => (
            <Link key={usluga.id} href={`/usluge/${kat.slug}/${usluga.slug}`}>
              <div
                className="
                  group 
                  bg-gray-800/60 
                  border border-gray-700 
                  rounded-xl 
                  overflow-hidden 
                  cursor-pointer 
                  shadow-md 
                  hover:shadow-2xl 
                  hover:-translate-y-1 
                  transition-all 
                  duration-300 
                  flex flex-col
                "
              >
                {/* Slika */}
                <div className="relative w-full aspect-video bg-gray-900">
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

                {/* Tekst */}
                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-gray-200 group-hover:text-blue-300 transition">
                    {usluga.naziv}
                  </h3>
                  <p className="text-gray-400 mt-2 line-clamp-2">
                    {usluga.opis}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
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
