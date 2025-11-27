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
    <div className="max-w-6xl mx-auto py-20 px-6 space-y-16">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Lijevi dio - info kartice */}
        <div className="space-y-8">
          {/* Radno vrijeme */}
          <div className="p-6 rounded-2xl bg-white shadow-md border">
            <h6 className="text-lg font-semibold text-gray-700">
              Radno vrijeme
            </h6>
            <h5 className="text-2xl font-bold text-gray-900 mt-2">
              Pon - Pet 08:00 – 19:00
            </h5>
            <p className="text-gray-600 mt-3">
              Za sve informacije možete nas kontaktirati putem telefona ili
              emaila.
            </p>
          </div>

          {/* Kontakt info */}
          <div className="p-6 rounded-2xl bg-white shadow-md border space-y-5">
            <h6 className="text-lg font-semibold text-gray-700">
              Kontakt podaci
            </h6>

            <div className="flex items-center gap-3 text-gray-800">
              <Image src={location} alt="Lokacija" width={26} height={26} />
              <span className="text-lg">{adresa_text}</span>
            </div>

            <a
              href={`tel:${mobitel}`}
              className="flex items-center gap-3 text-gray-800 hover:text-blue-600 transition text-lg"
            >
              <Image src={telephone} alt="Telefon" width={26} height={26} />
              <span>{mobitel}</span>
            </a>

            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 text-gray-800 hover:text-blue-600 transition text-lg"
            >
              <Image src={mail} alt="Email" width={26} height={26} />
              <span>{email}</span>
            </a>
          </div>
        </div>

        {/* Kontakt forma */}
        <div className="p-6 md:p-8 bg-white shadow-md border rounded-2xl">
          <KontaktForma />
        </div>
      </div>

      {/* Mapa */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Lokacija</h3>
        <div className="w-full h-80 rounded-2xl overflow-hidden shadow-md border">
          <iframe
            src={adresa}
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
