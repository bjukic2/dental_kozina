import { prisma } from "@/utils/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 60;

type Props = {
  params: {
    kategorija: string;
  };
};

export default async function KategorijaPage(props: Props) {
  const resolvedParams = await Promise.resolve(props.params);
  const { kategorija } = resolvedParams;

  const kat = await prisma.kategorija.findUnique({
    where: { slug: kategorija },
    include: { usluge: true },
  });

  if (!kat) return notFound();

  return (
    <div className="py-20 px-6">
      <h1 className="text-3xl font-bold mb-4">{kat.naziv}</h1>
      <p className="mb-6">{kat.opis}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {kat.usluge.map((usluga) => (
          <Link key={usluga.id} href={`/usluge/${kat.slug}/${usluga.slug}`}>
            <div className="border rounded-xl p-4 hover:shadow-lg transition">
              {usluga.slika ? (
                <Image
                  src={usluga.slika}
                  alt={usluga.naziv}
                  width={600}
                  height={400}
                />
              ) : (
                <div className="w-[600px] h-[400px] bg-gray-200 flex items-center justify-center text-gray-600">
                  Nema slike
                </div>
              )}
              <h3 className="text-xl font-semibold mt-2">{usluga.naziv}</h3>
              <p>{usluga.opis}</p>
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

  return kategorije.map((kat) => ({
    kategorija: kat.slug,
  }));
}
