"use server";

import { prisma } from "@/utils/prisma";
import { notFound } from "next/navigation";

type ResolvedParams = { slug: string };
type Props = { params: Promise<ResolvedParams> };

export default async function KategorijaPage({ params }: Props) {
  const { slug } = await params;

  const kategorija = await prisma.kategorija.findUnique({
    where: { slug },
    include: { usluge: true },
  });

  if (!kategorija) return notFound();

  return (
    <main className="min-h-screen pt-20 px-4 py-16 bg-[linear-gradient(to_bottom,#030712_0%,#111827_50%,#030712_100%)] text-white">
      <div className="max-w-5xl mx-auto">
        {/* Naslov kategorije */}
        <h1 className="text-4xl font-bold text-center text-blue-300 mb-4 uppercase">
          {kategorija.naziv}
        </h1>

        {/* Opis kategorije */}
        {kategorija.opis && (
          <>
            <p className="text-gray-300 text-center mb-12 leading-relaxed max-w-3xl mx-auto">
              {kategorija.opis}
            </p>
            <div className="w-full h-px bg-gray-800 mb-12" />
          </>
        )}

        <div className="space-y-24">
          {kategorija.usluge.map((u, i) => (
            <div key={u.id}>
              <section
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:w-1/2">
                  {/* Naziv usluge iznad slike */}
                  <h2 className="text-3xl font-semibold mb-4 text-center md:text-left flex items-center justify-center text-blue-300">
                    {u.naziv}
                  </h2>

                  {u.slika && (
                    <img
                      src={u.slika}
                      alt={u.naziv}
                      className="w-full rounded-xl shadow-lg"
                    />
                  )}
                </div>

                {/* Opis usluge */}
                <div className="md:w-1/2">
                  <p className="text-gray-300 leading-relaxed">{u.opis}</p>
                </div>
              </section>
              {i !== kategorija.usluge.length - 1 && (
                <div className="w-full h-px bg-white/10 my-16" />
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
