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
    <main className="min-h-screen pt-20 px-4 py-16 bg-gray-950 text-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{kategorija.naziv}</h1>

        {kategorija.opis && (
          <p className="text-gray-300 mb-12 leading-relaxed">
            {kategorija.opis}
          </p>
        )}

        <div className="space-y-24">
          {kategorija.usluge.map((u, i) => (
            <section
              key={u.id}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {u.slika && (
                <img
                  src={u.slika}
                  alt={u.naziv}
                  className="w-full md:w-1/2 rounded-xl shadow-lg"
                />
              )}

              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-4">{u.naziv}</h2>
                <p className="text-gray-300 leading-relaxed mb-4">{u.opis}</p>

                {u.cijena && (
                  <p className="text-lg font-semibold text-blue-400">
                    Cijena: {u.cijena.toString()} €
                  </p>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
