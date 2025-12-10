// app/o-nama/page.tsx

import Image from "next/image";

export default function ONamaPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* UVOD O KLINICI */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          O našoj ordinaciji
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Naša stomatološka ordinacija posvećena je pružanju vrhunske dentalne
          skrbi uz individualan pristup svakom pacijentu. Kombiniramo suvremenu
          tehnologiju, stručno znanje i ugodnu atmosferu kako bismo osigurali
          osjećaj sigurnosti i povjerenja tijekom svakog posjeta.
        </p>
      </section>

      {/* ZAPOSLENICI */}
      <section className="max-w-6xl mx-auto px-6 pb-24 space-y-24">
        {/* Zaposlenik 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/placeholder-person.jpg"
              alt="Zaposlenik 1"
              width={500}
              height={500}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Ime Prezime</h2>
            <p className="text-blue-600 font-medium mb-3">
              Doktor dentalne medicine
            </p>
            <p className="text-gray-600 leading-relaxed">
              Kratki opis zaposlenika. Ovdje će kasnije ići stvarne
              kvalifikacije, iskustvo, edukacije i područja specijalizacije.
            </p>
          </div>
        </div>

        {/* Zaposlenik 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <Image
              src="/images/placeholder-person.jpg"
              alt="Zaposlenik 2"
              width={500}
              height={500}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-bold mb-4">Ime Prezime</h2>
            <p className="text-blue-600 font-medium mb-3">Dentalni asistent</p>
            <p className="text-gray-600 leading-relaxed">
              Kratki opis zaposlenika. Ovaj tekst služit će kao placeholder dok
              ne budu dostupni stvarni podaci i fotografije.
            </p>
          </div>
        </div>

        {/* Zaposlenik 3 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/placeholder-person.jpg"
              alt="Zaposlenik 3"
              width={500}
              height={500}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Ime Prezime</h2>
            <p className="text-blue-600 font-medium mb-3">
              Specijalist za ortodonciju
            </p>
            <p className="text-gray-600 leading-relaxed">
              Ovdje ide opis iskustva, rada s pacijentima i stručnih interesa.
              Tekst je privremeni i može se lako zamijeniti stvarnim sadržajem.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
