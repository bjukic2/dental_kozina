import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div>
          <h6 className="text-lg font-semibold mb-4">Aestethic Dental Kozina</h6>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">Početna</Link>
            </li>
            <li>
              <Link href="/oNama" className="hover:underline">O nama</Link>
            </li>
            <li>
              <Link href="/usluge" className="hover:underline">Usluge</Link>
            </li>
            <li>
              <Link href="/kontakt" className="hover:underline">Kontakt</Link>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="text-lg font-semibold mb-4">Oralna kirurgija</h6>
        </div>

        <div>
          <h6 className="text-lg font-semibold mb-4">Estetska stomatologija</h6>
        </div>

        <div>
          <h6 className="text-lg font-semibold mb-4">Opća stomatologija</h6>
        </div>

        <div>
          <h6 className="text-lg font-semibold mb-4">Ortodoncija</h6>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-8">
        © {new Date().getFullYear()} Aestethic Dental Kozina. Sva prava pridržana.
      </div>
    </footer>
  );
}
