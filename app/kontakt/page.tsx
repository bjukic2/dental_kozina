import telephone from "@components/icons/telephone.png";
import location from "@components/icons/location.png";
import mail from "@components/icons/mail.png";
import Image from "next/image";

export default function Kontakt() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10">
      {/* Gornji dio: kontakt info + forma */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Kontakt detalji */}
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

        {/* Kontakt forma */}
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

      {/* Mapa ispod, cijela širina */}
      <div className="w-full h-72">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.1525787899177!2d16.73399347692645!3d43.62418317110345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134ab010bf28a07b%3A0xc5c1d4f6c00ac4e3!2sDomovinskog%20rata%2035%2C%2021240%2C%20Vedrine!5e0!3m2!1sen!2shr!4v1744658194488!5m2!1sen!2shr"
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
