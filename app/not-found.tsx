import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center p-6">
      <div>
        <h1 className="text-4xl font-bold mb-4">
          404 – Stranica nije pronađena
        </h1>
        <p className="text-lg mb-6">
          Stranica koju tražite ne postoji ili je premještena.
        </p>
        <Link href="/" className="text-blue-600 underline">
          Natrag na početnu
        </Link>
      </div>
    </div>
  );
}
