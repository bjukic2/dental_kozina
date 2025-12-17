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
    <div className="max-w-6xl mx-auto py-20 px-6 space-y-20">
      {/* Naslov sekcije */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Kontaktirajte nas
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Tu smo za sva pitanja vezana uz termine, tretmane i naše usluge.
        </p>
      </div>

      {/* Kontakt kartice + forma */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16">
        {/* Lijevi dio */}
        <div className="space-y-10">
          {/* Radno vrijeme */}
          <div className="p-6 rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <h6 className="text-lg font-semibold text-gray-700">
              Radno vrijeme
            </h6>
            <h5 className="text-2xl font-bold text-gray-900 mt-2">
              Pon – Pet 08:00 – 19:00
            </h5>
            <p className="text-gray-600 mt-3">
              Za sve informacije možete nas kontaktirati putem telefona ili
              emaila.
            </p>
          </div>

          {/* Kontakt info */}
          <div className="p-6 rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] space-y-5">
            <h6 className="text-lg font-semibold text-gray-700">
              Kontakt podaci
            </h6>

            <div className="flex items-center gap-3 text-gray-800">
              <Image src={location} alt="Lokacija" width={26} height={26} />
              <span className="text-lg">{adresa_text}</span>
            </div>

            <a
              href={`tel:${mobitel}`}
              className="flex items-center gap-3 text-gray-800 hover:text-blue-600 transition-colors text-lg"
            >
              <Image src={telephone} alt="Telefon" width={26} height={26} />
              <span>{mobitel}</span>
            </a>

            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 text-gray-800 hover:text-blue-600 transition-colors text-lg"
            >
              <Image src={mail} alt="Email" width={26} height={26} />
              <span>{email}</span>
            </a>
          </div>
        </div>

        {/* Kontakt forma */}
        <div className="p-8 bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
          <KontaktForma />
        </div>
      </div>

      {/* Mapa */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-800">Lokacija</h3>
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
  );
}
