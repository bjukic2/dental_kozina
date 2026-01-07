import { prisma } from "@/utils/prisma";
import Link from "next/link";
import Image from "next/image";

export default async function SveKategorije() {
  const kategorije = await prisma.kategorija.findMany();

  return (
    <div className="pt-20 px-6 py-20 bg-[linear-gradient(to_bottom,#030712_0%,#111827_50%,#030712_100%)]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          Naše usluge
        </h1>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 justify-center">
          {kategorije.map((kat) => (
            <Link key={kat.id} href={`/usluge/${kat.slug}`}>
              <div className="group bg-white rounded-2xl shadow-md border overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative w-full aspect-video bg-gray-100">
                  {kat.slika ? (
                    <Image
                      src={kat.slika}
                      alt={kat.naziv}
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
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">
                    {kat.naziv}
                  </h2>
                  <p className="text-gray-600 mt-2">{kat.opis}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
