"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function UsporedbeAdmin() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push(
        `/prijava?callbackUrl=${encodeURIComponent("/admin/usporedbe")}`
      );
    } else if (status === "authenticated" && session?.user.role !== "admin") {
      router.push("/");
    }
  }, [session, status, router]);

  const [naziv, setNaziv] = useState("");
  const [opis, setOpis] = useState("");
  const [beforeImage, setBeforeImage] = useState<File | null>(null);
  const [afterImage, setAfterImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    if (!naziv || !beforeImage || !afterImage) {
      setMessage("Naziv i obje slike su obavezni.");
      return;
    }

    setLoading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("naziv", naziv);
    formData.append("opis", opis);
    formData.append("prijeImage", beforeImage);
    formData.append("poslijeImage", afterImage);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Uspješno učitano!");
        setNaziv("");
        setOpis("");
        setBeforeImage(null);
        setAfterImage(null);
      } else {
        setMessage(data.message || "Greška pri učitavanju.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Dogodila se greška.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Učitaj usporedbu (prije i poslije)
      </h1>

      <div className="mb-4">
        <label>Naziv:</label>
        <input
          type="text"
          value={naziv}
          onChange={(e) => setNaziv(e.target.value)}
          className="w-full border px-2 py-1 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label>Opis (opcionalno):</label>
        <textarea
          value={opis}
          onChange={(e) => setOpis(e.target.value)}
          className="w-full border px-2 py-1 rounded"
        />
      </div>

      <div className="mb-4">
        <label>Slika prije:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setBeforeImage(e.target.files?.[0] || null)}
        />
        {beforeImage && (
          <img
            src={URL.createObjectURL(beforeImage)}
            alt="Prije"
            className="mt-2 w-full rounded shadow"
          />
        )}
      </div>

      <div className="mb-4">
        <label>Slika poslije:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setAfterImage(e.target.files?.[0] || null)}
        />
        {afterImage && (
          <img
            src={URL.createObjectURL(afterImage)}
            alt="Poslije"
            className="mt-2 w-full rounded shadow"
          />
        )}
      </div>

      <button
        onClick={handleUpload}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Učitavam..." : "Učitaj slike"}
      </button>

      {message && <p className="mt-4 text-center text-red-600">{message}</p>}
    </div>
  );
}
