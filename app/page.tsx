"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function HomePage() {
  return (
    <main className="flex flex-col bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="relative w-full bg-gradient-to-r from-blue-50 to-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Dental Kozina <br />
              <span className="text-blue-600">
                Centar moderne stomatologije
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Pružamo vrhunsku dentalnu njegu koristeći najmoderniju
              tehnologiju. Vaš osmijeh je naša odgovornost.
            </p>
            <Link href="/kontakt">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition shadow-md">
                Dogovorite termin
              </button>
            </Link>
          </div>

          <div className="relative">
            <Image
              src="/images/dental.jpg"
              alt="Dental clinic"
              width={600}
              height={450}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Naše usluge</h2>
          <p className="text-gray-500 text-center mb-16">
            Sve na jednom mjestu za zdrav i lijep osmijeh
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "Estetska stomatologija", icon: "🦷" },
              { title: "Implantologija", icon: "🪛" },
              { title: "Ortodoncija", icon: "😁" },
              { title: "Parodontologija", icon: "🫧" },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm">
                  Individualan pristup i suvremene metode liječenja.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Image
              src="/images/team.jpg"
              alt="Dental team"
              width={600}
              height={450}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Zašto odabrati našu ordinaciju?
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li>• Višegodišnje iskustvo i stručan tim</li>
              <li>• Bezbolni zahvati uz suvremenu opremu</li>
              <li>• Individualan pristup svakom pacijentu</li>
              <li>• Transparentne cijene bez skrivenih troškova</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Rezervirajte svoj termin već danas
        </h2>
        <p className="text-blue-100 mb-8 max-w-xl mx-auto">
          Naš tim stoji vam na raspolaganju za sva pitanja i konzultacije.
        </p>
        <Link href="/kontakt">
          <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover:bg-gray-100 transition shadow-md">
            Kontaktirajte nas
          </button>
        </Link>
        <ScrollToTopButton />
      </section>
    </main>
  );
}
