import telephone from "@components/icons/telephone.png";
import location from "@components/icons/location.png";
import mail from "@components/icons/mail.png";
import Image from "next/image";
import KontaktForma from "@/components/KontaktForma";

const adresa = process.env.ADRESA;
const adresa1 = process.env.ADRESA1;
const mobitel = process.env.MOBITEL;
const email = process.env.EMAIL;

export default function Kontakt() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div>
            <h6 className="text-lg font-semibold text-gray-700">
              Radno vrijeme
            </h6>
            <h5 className="text-xl font-bold text-gray-900">
              Pon - Pet 00:00 - 19:00
            </h5>
            <p className="text-gray-600 mt-2">
              Za sve informacije možete nas kontaktirati putem telefona ili
              emaila.
            </p>
          </div>

          <div className="space-y-4">
            <h6 className="text-lg font-semibold text-gray-700">Kontakt</h6>

            <div className="flex items-center gap-2 text-gray-700">
              <Image src={location} alt="Lokacija" width={20} height={20} />
              <span>{adresa1}</span>
            </div>

            <a
              href={`tel:${mobitel}`}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
            >
              <Image src={telephone} alt="Telefon" width={20} height={20} />
              <span>{mobitel}</span>
            </a>

            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
            >
              <Image src={mail} alt="Email" width={20} height={20} />
              <span>{email}</span>
            </a>
          </div>
        </div>
        <KontaktForma />
      </div>

      <div className="w-full h-72">
        <iframe
          src={adresa}
          width="100%"
          height="100%"
          className="rounded-lg shadow-mg border"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
