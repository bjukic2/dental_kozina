import { db } from "@/utils/db";
import Link from "next/link";

export default async function KategorijePage() {
  const kategorije = await db.kategorija.findMany();

  return (
    <div>
      <h1>Kategorije</h1>
      {kategorije.map((kat) => (
        <Link key={kat.slug} href={`/usluge/${kat.slug}`}>
          <div>
            <img
              src={kat.slika || "/images/kategorije/implantologija.jpg"}
              alt={kat.naziv}
            />
            <h2>{kat.naziv}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
