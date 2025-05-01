import { prisma } from "@/utils/prisma";
import Link from "next/link";
import Image from "next/image";

export default async function SveKategorije() {
  const kategorije = await prisma.kategorija.findMany();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-20 px-6">
      {kategorije.map((kat) => (
        <Link key={kat.id} href={`/usluge/${kat.slug}`}>
          <div className="border rounded-xl p-4 hover:shadow-lg transition">
            {kat.slika ? (
              <Image src={kat.slika} alt={kat.naziv} width={600} height={400} />
            ) : (
              <div className="w-[600px] h-[400px] bg-gray-200 flex items-center justify-center text-gray-600">
                Nema slike
              </div>
            )}

            <h2 className="text-xl font-bold mt-2">{kat.naziv}</h2>
            <p>{kat.opis}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
