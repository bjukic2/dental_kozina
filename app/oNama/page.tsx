"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function ONamaPage() {
  return (
    <main className="bg-black text-white">
      {/* UVOD O KLINICI */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold mb-6 text-gray-300">
          O našoj ordinaciji
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Naša stomatološka ordinacija posvećena je pružanju vrhunske dentalne
          skrbi uz individualan pristup svakom pacijentu. Kombiniramo suvremenu
          tehnologiju, stručno znanje i ugodnu atmosferu kako bismo osigurali
          osjećaj sigurnosti i povjerenja tijekom svakog posjeta.
        </p>
      </section>

      {/* ZAPOSLENICI */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 pb-24 space-y-24">
        {[
          {
            name: "Ime Prezime",
            role: "Doktor dentalne medicine",
            desc: "Naš doktor dentalne medicine posvećen je pružanju najviše kvalitete usluge uz individualan pristup svakom pacijentu.",
          },
          {
            name: "Ime Prezime",
            role: "Dentalni tehničar",
            desc: "Naš dentalni tehničar koristi najnoviju tehnologiju za izradu preciznih protetskih rješenja i dodatne skrbi za pacijente.",
            reverse: true,
          },
          {
            name: "Ime Prezime",
            role: "Dentalni asistent",
            desc: "Dentalni asistent pomaže u svakodnevnom radu ordinacije, osiguravajući glatku i sigurnu komunikaciju s pacijentima.",
          },
        ].map((person, idx) => (
          <div
            key={idx}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              person.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full h-64 sm:h-80 md:h-full relative">
              <Image
                src="/images/placeholder-person.jpg"
                alt={person.name}
                fill
                className="rounded-2xl shadow-lg object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                {person.name}
              </h2>
              <p className="text-blue-300 font-medium mb-3">{person.role}</p>
              <p className="text-gray-300 leading-relaxed">{person.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA SECIJA */}
      <section className="py-24 px-6 md:px-12 bg-gray-900 text-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Rezervirajte svoj termin već danas
        </h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto text-sm sm:text-base">
          Naš tim stoji vam na raspolaganju za sva pitanja i konzultacije.
        </p>
        <Link href="/kontakt">
          <button className="bg-gray-800 text-gray-300 px-10 py-4 rounded-xl font-semibold hover:bg-blue-300 transition shadow-md">
            Kontaktirajte nas
          </button>
        </Link>
        <ScrollToTopButton />
      </section>
    </main>
  );
}
