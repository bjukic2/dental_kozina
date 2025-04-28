"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      <section className="w-full bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Dobrodošli u Dental Kozina
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Vaš osmijeh je naša strast. Moderna stomatologija za cijelu obitelj.
        </p>
        <Link href="/kontakt">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition cursor-pointer">
            Dogovori termin
          </button>
        </Link>
      </section>

      <section className="max-w-6xl w-full px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Naše usluge</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            "Estetska stomatologija",
            "Implantologija",
            "Ortodoncija",
            "Parodontologija",
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-4">{service}</h3>
              <p className="text-gray-600 text-sm">
                Vrhunski tretmani prilagođeni vašim potrebama i željama.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <Image
              src="/images/dental.jpg"
              alt="Dental Team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">Zašto izabrati nas?</h2>
            <p className="text-gray-700 mb-4">
              Iskustvo, stručnost i ljubaznost su naši zaštitni znakovi.
              Koristimo najsuvremeniju tehnologiju kako bismo pružili najbolje
              moguće rezultate.
            </p>
            <p className="text-gray-700">
              Vaše zadovoljstvo i zdravlje su naš prioritet!
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-blue-600 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Kontaktirajte nas</h2>
        <p className="text-lg mb-8">
          Imate pitanja? Rado ćemo vam pomoći! Kontaktirajte nas putem telefona
          ili e-maila.
        </p>
        <Link href="/kontakt">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition cursor-pointer">
            Pošaljite poruku
          </button>
        </Link>
        <ScrollToTopButton />
      </section>
    </main>
  );
}
