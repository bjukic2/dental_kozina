import telephone from "@components/icons/telephone.png";
import location from "@components/icons/location.png";
import mail from "@components/icons/mail.png";
import Image from "next/image";

const adresa = process.env.ADRESA;

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
              <span>Example 12, Example</span>
            </div>

            <a
              href="tel:1111111111"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
            >
              <Image src={telephone} alt="Telefon" width={20} height={20} />
              <span>1111111111</span>
            </a>

            <a
              href="mailto:example@example.com"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
            >
              <Image src={mail} alt="Email" width={20} height={20} />
              <span>example@example.com</span>
            </a>
          </div>
        </div>

        <form className="space-y-4 bg-gray-50 p-6 rounded-lg shadow-md">
          <h6 className="text-lg font-semibold text-gray-700">
            Pošaljite poruku
          </h6>

          <div className="flex flex-col">
            <label htmlFor="ime" className="text-sm font-medium text-gray-600">
              Ime i prezime
            </label>
            <input
              type="text"
              id="ime"
              name="ime"
              className="border p-2 rounded mt-1"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-600"
            >
              Email adresa
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border p-2 rounded mt-1"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="poruka"
              className="text-sm font-medium text-gray-600"
            >
              Poruka
            </label>
            <textarea
              id="poruka"
              name="poruka"
              rows={4}
              className="border p-2 rounded mt-1"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Pošalji
          </button>
        </form>
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
