import telephone from "@components/icons/telephone.png";
import location from "@components/icons/location.png";
import mail from "@components/icons/mail.png";
import Image from "next/image";
import KontaktForma from "@/components/KontaktForma";

const adresa = process.env.ADRESA;
const adresa_text = process.env.ADRESA_TEXT;
const mobitel = process.env.MOBITEL;
const email = process.env.EMAIL;

export default function Kontakt() {
  return (
    <div className="pt-20 py-20 px-6 space-y-20 bg-[linear-gradient(to_bottom,#030712_0%,#111827_50%,#030712_100%)]">
      <div className="max-w-6xl mx-auto">
        {/* Naslov sekcije */}
        <div className="text-center space-y-3 pt-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-300">
            Kontaktirajte nas
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Tu smo za sva pitanja vezana uz termine, tretmane i naše usluge.
          </p>
        </div>

        {/* PRVI RED: Radno vrijeme + Kontakt podaci */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 max-w-3xl mx-auto">
          {/* Radno vrijeme */}
          <div className="p-6 rounded-2xl bg-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <h6 className="text-lg font-semibold text-blue-300 flex items-center justify-center">
              Radno vrijeme
            </h6>
            <h5 className="text-2xl font-bold text-gray-300 mt-2 flex items-center justify-center">
              Pon – Pet 08:00 – 19:00
            </h5>
            <p className="text-gray-400 mt-3">
              Za sve informacije možete nas kontaktirati putem telefona ili
              emaila.
            </p>
          </div>

          {/* Kontakt podaci */}
          <div className="p-6 rounded-2xl bg-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.06)] space-y-5">
            <h6 className="text-lg font-semibold text-blue-300 flex items-center justify-center">
              Kontakt podaci
            </h6>

            <div className="flex items-center gap-3">
              <Image src={location} alt="Lokacija" width={26} height={26} />
              <span className="text-lg text-gray-400">{adresa_text}</span>
            </div>

            <a
              href={`tel:${mobitel}`}
              className="flex items-center gap-3 hover:text-blue-600 transition-colors text-lg"
            >
              <Image src={telephone} alt="Telefon" width={26} height={26} />
              <span className="text-gray-400">{mobitel}</span>
            </a>

            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 hover:text-blue-600 transition-colors text-lg"
            >
              <Image src={mail} alt="Email" width={26} height={26} />
              <span className="text-gray-400">{email}</span>
            </a>
          </div>
        </div>
        <div className="mt-10 p-10 bg-gray-800 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] max-w-3xl mx-auto">
          {" "}
          <KontaktForma />{" "}
        </div>

        {/* Mapa */}
        <div className="space-y-4 mt-20 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-gray-400">Lokacija</h3>
          <div className="w-full h-64 md:h-72 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <iframe
              src={adresa}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
