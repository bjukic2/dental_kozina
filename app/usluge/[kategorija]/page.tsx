import { db } from "@/utils/db";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function KategorijaPage({
  params,
}: {
  params: { kategorija: string };
}) {
  const kategorija = await db.kategorija.findUnique({
    where: { slug: params.kategorija },
    include: { usluge: true },
  });

  if (!kategorija) return notFound();

  return (
    <div>
      <h1>{kategorija.naziv}</h1>
      <p>{kategorija.opis}</p>

      {kategorija.usluge.map((usluga) => (
        <Link
          key={usluga.slug}
          href={`/usluge/${params.kategorija}/${usluga.slug}`}
        >
          <div>
            <img
              src={usluga.slika || "images/kategorije/implantologija.jpg"}
              alt={usluga.naziv}
            />
            <h3>{usluga.naziv}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
