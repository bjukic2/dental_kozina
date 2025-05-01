import { prisma } from "@/utils/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";

type ResolvedParams = {
  kategorija: string;
  usluga: string;
};

type Props = {
  params: Promise<ResolvedParams>;
};

export default async function UslugaPage({ params }: Props) {
  const { kategorija, usluga } = await params;

  const service = await prisma.usluga.findFirst({
    where: {
      slug: usluga,
      kategorija: { slug: kategorija },
    },
    include: { kategorija: true },
  });

  if (!service) return notFound();

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold">{service.naziv}</h1>
      <p className="text-gray-500 mb-2">
        Kategorija: {service.kategorija.naziv}
      </p>
      {service.slika ? (
        <Image
          src={service.slika}
          alt={service.naziv}
          width={600}
          height={400}
        />
      ) : (
        <div className="w-[600px] h-[400px] bg-gray-200 flex items-center justify-center text-gray-600">
          Nema slike
        </div>
      )}

      <p className="mt-4">{service.opis}</p>
      <p className="mt-2 font-semibold">
        Cijena:{" "}
        {service.cijena !== null ? `${service.cijena.toFixed(2)} €` : "/"}
      </p>
    </div>
  );
}

export async function generateStaticParams() {
  const usluge = await prisma.usluga.findMany({
    select: {
      slug: true,
      kategorija: {
        select: { slug: true },
      },
    },
  });

  return usluge.map((usluga) => ({
    kategorija: usluga.kategorija.slug,
    usluga: usluga.slug,
  }));
}
