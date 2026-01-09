"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function HomePage() {
  return (
    <main className="flex flex-col bg-black text-white">
      {/* HERO SECTION */}
      <section
        className="relative w-full bg-[linear-gradient(to_bottom,#030712_0%,#111827_100%)]
 py-24 px-6 md:py-32 md:px-12"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-gray-300">
              Aesthetic dental Kozina <br />
              <span className="text-blue-300">
                Centar moderne stomatologije
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-lg">
              Pružamo vrhunsku dentalnu njegu koristeći najmoderniju
              tehnologiju. Vaš osmijeh je naša odgovornost.
            </p>
            <Link href="/kontakt">
              <button className="bg-gray-800 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-blue-300 hover:text-gray-800 transition shadow-lg cursor-pointer">
                Dogovorite termin
              </button>
            </Link>
          </div>

          <div className="relative w-full aspect-4/3 sm:aspect-5/4 lg:h-full">
            <Image
              src="/images/dental.jpg"
              alt="Dental clinic"
              fill
              className="rounded-2xl shadow-lg object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        className="py-24 px-6 md:px-12 bg-[linear-gradient(to_bottom,#111827_0%,#030712_100%)]
 text-white"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-blue-300">
            Naše usluge
          </h2>
          <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
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
                className="bg-gray-700 border border-gray-700 rounded-2xl p-6 sm:p-8 text-center shadow-sm hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Individualan pristup i suvremene metode liječenja.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section
        className="py-24 px-6 md:px-12 bg-[linear-gradient(to_bottom,#030712_0%,#111827_100%)]
 text-white"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full h-64 sm:h-80 md:h-full relative">
            <Image
              src="/images/team.jpg"
              alt="Dental team"
              fill
              className="rounded-2xl shadow-lg object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-300">
              Zašto odabrati našu ordinaciju?
            </h2>
            <ul className="space-y-4 text-gray-300 text-sm sm:text-base">
              <li>• Višegodišnje iskustvo i stručan tim</li>
              <li>• Bezbolni zahvati uz suvremenu opremu</li>
              <li>• Individualan pristup svakom pacijentu</li>
              <li>• Transparentne cijene bez skrivenih troškova</li>
            </ul>
          </div>
        </div>
      </section>

      {/* GALLERY / NAŠA OPREMA */}
      <section className="py-24 px-6 md:px-12  bg-gray-900 text-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-blue-300">
          Naša ordinacija i oprema
        </h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Pokažimo vam modernu opremu i ugodno okruženje u kojem se brinemo za
          vaš osmijeh.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="relative w-full h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
            >
              <Image
                src={`/images/gallery-${i}.jpg`}
                alt={`Slika ${i}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-6 md:px-12 bg-[linear-gradient(to_bottom,#111827_0%,#030712_100%)]
 to-gray-900 text-white text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-300">
          Rezervirajte svoj termin već danas
        </h2>
        <p className="text-blue-100 mb-8 max-w-xl mx-auto text-sm sm:text-base">
          Naš tim stoji vam na raspolaganju za sva pitanja i konzultacije.
        </p>
        <Link href="/kontakt">
          <button className="bg-gray-800 text-gray-300 px-10 py-4 rounded-xl font-semibold hover:bg-blue-300 hover:text-gray-800 transition shadow-md hover:cursor-pointer">
            Kontaktirajte nas
          </button>
        </Link>
        <ScrollToTopButton />
      </section>
    </main>
  );
}
