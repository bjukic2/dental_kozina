import Image from "next/image";
import Link from "next/link";
import logo from "./icons/logo.png";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* LOGO */}
        <div className="flex justify-center mb-4">
          <Link href="/">
            <Image src={logo} alt="logo" width={210} height={90} />
          </Link>
        </div>

        {/* KONTEJNER KOJI CENTRIRA SVE */}
        <div className="max-w-7xl mx-auto">
          {/* CRTA ISPOD LOGA */}
          <div className="h-0.5 bg-gray-500 mx-auto mb-10 w-full"></div>

          {/* TRI STUPCA */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 text-center">
            {/* DRUŠTVENE MREŽE */}
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-4">Društvene mreže</h3>
              <div className="flex flex-col items-center gap-3">
                <Link
                  href="https://facebook.com"
                  className="flex items-center gap-2 hover:text-gray-300"
                >
                  <Facebook size={20} />
                  <span>Facebook</span>
                </Link>
                <Link
                  href="https://instagram.com"
                  className="flex items-center gap-2 hover:text-gray-300"
                >
                  <Instagram size={20} />
                  <span>Instagram</span>
                </Link>
              </div>
            </div>

            {/* RADNO VRIJEME */}
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-4">Radno vrijeme</h3>
              <div className="space-y-1">
                <p>
                  Pon – Pet: <span className="font-medium">08:00 – 16:00</span>
                </p>
                <p>
                  Subota: <span className="font-medium">09:00 – 13:00</span>
                </p>
                <p>
                  Nedjelja: <span className="font-medium">Zatvoreno</span>
                </p>
              </div>
            </div>

            {/* KONTAKT */}
            {/* KONTAKT */}
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-4">Kontakt</h3>

              <div className="space-y-2">
                {/* Telefon */}
                <a
                  href="tel:+385991234567"
                  className="flex items-center justify-center gap-2 hover:text-gray-300 transition-colors"
                >
                  <Phone size={18} />
                  <span>+385 99 123 4567</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@ordinacija.hr"
                  className="flex items-center justify-center gap-2 hover:text-gray-300 transition-colors"
                >
                  <Mail size={18} />
                  <span>info@ordinacija.hr</span>
                </a>

                {/* Lokacija */}
                <a
                  href="https://maps.google.com/?q=Domovinskog rata 35, Vedrine"
                  target="_blank"
                  className="flex items-center justify-center gap-2 hover:text-gray-300 transition-colors"
                >
                  <MapPin size={18} />
                  <span>Domovinskog rata 35</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center mt-10 text-sm text-gray-400">
        © {new Date().getFullYear()} Aesthetic dental Kozina. Sva prava
        pridržana.
      </div>
    </footer>
  );
}
