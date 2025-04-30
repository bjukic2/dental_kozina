import { db } from "@/utils/db";
import { notFound } from "next/navigation";

export default async function UslugaPage({
  params,
}: {
  params: { kategorija: string; usluga: string };
}) {
  const usluga = await db.usluga.findUnique({
    where: { slug: params.usluga },
    include: { kategorija: true },
  });

  if (!usluga || usluga.kategorija.slug !== params.kategorija) {
    return notFound();
  }

  return (
    <div>
      <h1>{usluga.naziv}</h1>
      <img
        src={usluga.slika || "/images/kategorije/implantologija.jpg"}
        alt={usluga.naziv}
      />
      <p>{usluga.opis}</p>
      {usluga.cijena && <p>Cijena: {usluga.cijena.toFixed(2)} €</p>}
    </div>
  );
}
