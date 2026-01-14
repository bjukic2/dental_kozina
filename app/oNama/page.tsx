"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function ONamaPage() {
  return (
    <main className=" bg-black text-white">
      {/* UVOD */}
      <section
        className="bg-[linear-gradient(to_bottom,#030712_0%,#111827_100%)]
 px-6 py-24"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-blue-300">
            O našoj ordinaciji
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Naša stomatološka ordinacija posvećena je pružanju suvremene,
            sigurne i kvalitetne dentalne skrbi uz individualan pristup svakom
            pacijentu. Koristimo modernu tehnologiju i provjerene metode
            liječenja kako bismo osigurali dugoročna i estetski prihvatljiva
            rješenja.
          </p>
        </div>
      </section>

      {/* OSOBA 1 */}
      <section
        className="bg-[linear-gradient(to_bottom,#111827_0%,#030712_100%)]
 py-24 px-6 md:px-12 bg-black"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full h-64 sm:h-80 md:h-full relative">
            <Image
              src="/images/placeholder-person.jpg"
              alt="Doktor dentalne medicine"
              fill
              className="rounded-2xl shadow-lg object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ime Prezime</h2>
            <p className="text-blue-300 font-medium mb-3">
              Doktor dentalne medicine
            </p>
            <p className="text-gray-300 leading-relaxed">
              Doktor dentalne medicine s višegodišnjim iskustvom u području opće
              i estetske stomatologije. Posebnu pažnju posvećuje individualnom
              pristupu i sigurnosti pacijenata tijekom svakog zahvata.
            </p>
          </div>
        </div>
      </section>

      {/* OSOBA 2 */}
      <section className="py-24 px-6 md:px-12 bg-gray-950">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* SLIKA — prva na mobitelu, druga na desktopu */}
          <div className="order-1 md:order-2 w-full h-64 sm:h-80 md:h-full relative">
            <Image
              src="/images/placeholder-person.jpg"
              alt="Dentalni tehničar"
              fill
              className="rounded-2xl shadow-lg object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* TEKST — drugi na mobitelu, prvi na desktopu */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ime Prezime</h2>
            <p className="text-blue-300 font-medium mb-3">Dentalni tehničar</p>
            <p className="text-gray-300 leading-relaxed">
              Dentalni tehničar specijaliziran za izradu estetskih i
              funkcionalnih protetskih rješenja koristeći suvremenu tehnologiju
              i visokokvalitetne materijale.
            </p>
          </div>
        </div>
      </section>

      {/* OSOBA 3 */}
      <section
        className="bg-[linear-gradient(to_bottom,#030712_0%,#111827_100%)]
 py-24 px-6 md:px-12 bg-black"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full h-64 sm:h-80 md:h-full relative">
            <Image
              src="/images/placeholder-person.jpg"
              alt="Dentalni asistent"
              fill
              className="rounded-2xl shadow-lg object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ime Prezime</h2>
            <p className="text-blue-300 font-medium mb-3">Dentalni asistent</p>
            <p className="text-gray-300 leading-relaxed">
              Dentalni asistent odgovoran za organizaciju rada ordinacije,
              asistenciju tijekom zahvata i stvaranje ugodne atmosfere za
              pacijente.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="bg-[linear-gradient(to_bottom,#111827_0%,#030712_100%)]
 py-24 px-6 md:px-12 bg-gray-900 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-300">
          Rezervirajte svoj termin već danas
        </h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto text-sm sm:text-base">
          Naš tim stoji vam na raspolaganju za sva pitanja i konzultacije.
        </p>
        <Link href="/kontakt">
          <button className="bg-gray-800 text-gray-300 px-10 py-4 rounded-xl font-semibold hover:bg-blue-300 hover:text-gray-900 transition shadow-md cursor-pointer">
            Kontaktirajte nas
          </button>
        </Link>
        <ScrollToTopButton />
      </section>
    </main>
  );
}
