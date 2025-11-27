import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-10 bg-gray-100 border-t">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {/* Logo & opis */}
        <div className="flex flex-col items-center">
          <h6 className="text-xl font-semibold mb-3">
            Aesthetic Dental Kozina
          </h6>
          <p className="text-sm text-gray-600 max-w-xs">
            Moderna dentalna ordinacija specijalizirana za estetsku, opću i
            specijalističku stomatologiju.
          </p>
        </div>

        {/* Navigacija */}
        <div className="flex flex-col items-center">
          <h6 className="text-lg font-semibold mb-4">Navigacija</h6>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <Link href="/" className="hover:underline">
                Početna
              </Link>
            </li>
            <li>
              <Link href="/oNama" className="hover:underline">
                O nama
              </Link>
            </li>
            <li>
              <Link href="/usluge" className="hover:underline">
                Usluge
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="hover:underline">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        {/* Kontakt i društvene mreže */}
        <div className="flex flex-col items-center">
          <h6 className="text-lg font-semibold mb-4">Kontakt</h6>
          <ul className="space-y-2 text-sm text-gray-700 mb-4">
            <li>📍 Adresa: …</li>
            <li>📞 Telefon: …</li>
            <li>✉️ Email: …</li>
          </ul>

          <div className="flex items-center gap-6 justify-center">
            <Link href="https://instagram.com" target="_blank">
              <Instagram className="w-6 h-6 text-gray-700 hover:text-black transition" />
            </Link>
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="w-6 h-6 text-gray-700 hover:text-black transition" />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10 px-4">
        © {new Date().getFullYear()} Aesthetic Dental Kozina. Sva prava
        pridržana.
      </div>
    </footer>
  );
}
