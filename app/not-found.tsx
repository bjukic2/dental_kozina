import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-[linear-gradient(to_bottom,#030712_0%,#111827_50%,#030712_100%)]">
      <div className="text-center">
        <h1 className="text-blue-300 text-5xl font-semibold tracking-tight mb-4">
          404
        </h1>

        <p className="text-xl text-gray-300 mb-2">Stranica nije pronađena</p>

        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Ova stranica nije dio naše ordinacije. Možda ste skrenuli krivim
          putem.
        </p>

        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-md bg-white/10 hover:bg-blue-300 hover:text-gray-800 transition-colors text-white font-medium"
        >
          Natrag na početnu
        </Link>
      </div>
    </div>
  );
}
