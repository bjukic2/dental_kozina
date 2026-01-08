"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Toast from "@/components/Toast";
import DeleteConfirm from "@/components/DeleteConfirm";

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

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [naziv, setNaziv] = useState("");
  const [opis, setOpis] = useState("");
  const [beforeImage, setBeforeImage] = useState<File | null>(null);
  const [afterImage, setAfterImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const [errors, setErrors] = useState({
    naziv: false,
    opis: false,
    beforeImage: false,
    afterImage: false,
  });

  const handleUpload = async () => {
    const newErrors = {
      naziv: !naziv,
      opis: !opis,
      beforeImage: !beforeImage,
      afterImage: !afterImage,
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) {
      setToast({ message: "Niste unijeli sve podatke.", type: "error" });
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("naziv", naziv);
    formData.append("opis", opis);
    formData.append("prijeImage", beforeImage!);
    formData.append("poslijeImage", afterImage!);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (res.ok) {
        setToast({ message: "Uspješno učitano!", type: "success" });
        setNaziv("");
        setOpis("");
        setBeforeImage(null);
        setAfterImage(null);
        setErrors({
          naziv: false,
          opis: false,
          beforeImage: false,
          afterImage: false,
        });
      } else {
        setToast({
          message: data.message || "Greška pri učitavanju.",
          type: "error",
        });
      }
    } catch (err) {
      console.error(err);
      setToast({ message: "Dogodila se greška.", type: "error" });
    }

    setLoading(false);
  };

  const [usporedbe, setUsporedbe] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/admin/usporedbe");
      const data = await res.json();
      setUsporedbe(data);
    };

    fetchData();
  }, []);

  const handleDelete = async () => {
    if (!deleteId) return;
    const res = await fetch(`/api/admin/usporedbe/${deleteId}`, {
      method: "DELETE",
    });
    if (res.ok) {
      setUsporedbe((prev) => prev.filter((u) => u.id !== deleteId));
      setToast({ message: "Uspješno izbrisano!", type: "success" });
    } else {
      setToast({ message: "Greška pri brisanju.", type: "error" });
    }
    setDeleteId(null);
  };

  return (
    <div className="px-6 py-20 bg-[linear-gradient(to_bottom,#030712_0%,#111827_50%,#030712_100%)] min-h-screen">
      <div className="max-w-lg mx-auto space-y-10">
        {/* Back link */}
        <Link
          href="/admin"
          className="inline-block px-4 py-2 bg-gray-800 text-gray-200 rounded-lg shadow hover:bg-gray-700 transition"
        >
          ⬅ Povratak na Admin Panel
        </Link>

        <h1 className="text-3xl font-bold text-center text-gray-200">
          Dodavanje usporedbi
        </h1>

        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow space-y-5">
          {/* Naziv */}
          <div>
            <label className="block font-semibold text-gray-300 mb-1">
              Naziv
            </label>
            <input
              type="text"
              value={naziv}
              onChange={(e) => setNaziv(e.target.value)}
              className={`w-full rounded-lg p-2 bg-gray-900 border shadow-inner text-gray-200 ${
                errors.naziv ? "border-red-500" : "border-gray-700"
              }`}
            />
          </div>

          {/* Opis */}
          <div>
            <label className="block font-semibold text-gray-300 mb-1">
              Opis
            </label>
            <textarea
              value={opis}
              onChange={(e) => setOpis(e.target.value)}
              className={`w-full rounded-lg p-2 bg-gray-900 border shadow-inner h-24 text-gray-200 ${
                errors.opis ? "border-red-500" : "border-gray-700"
              }`}
            />
          </div>

          {/* Slike */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Slika prije */}
            <div className="relative">
              <label className="block font-semibold text-gray-300 mb-1">
                Slika prije
              </label>

              <div
                className={`w-full h-40 flex items-center justify-center border-2 rounded-lg cursor-pointer transition-colors ${
                  errors.beforeImage
                    ? "border-red-500 bg-red-900/20"
                    : "border-gray-600 bg-gray-900 hover:bg-gray-800"
                }`}
                onClick={() => document.getElementById("beforeInput")?.click()}
              >
                {beforeImage ? (
                  <img
                    src={URL.createObjectURL(beforeImage)}
                    alt="Prije"
                    className="w-full h-full object-contain rounded-lg p-2"
                  />
                ) : (
                  <span className="text-gray-500 text-center">
                    Klikni ili povuci datoteku
                  </span>
                )}
                <input
                  type="file"
                  id="beforeInput"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => setBeforeImage(e.target.files?.[0] || null)}
                />
              </div>

              {beforeImage && (
                <button
                  onClick={() => setBeforeImage(null)}
                  className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-gray-200 px-2 py-1 rounded shadow text-sm"
                >
                  Izbriši
                </button>
              )}
            </div>

            {/* Slika poslije */}
            <div className="relative">
              <label className="block font-semibold text-gray-300 mb-1">
                Slika poslije
              </label>

              <div
                className={`w-full h-40 flex items-center justify-center border-2 rounded-lg cursor-pointer transition-colors ${
                  errors.afterImage
                    ? "border-red-500 bg-red-900/20"
                    : "border-gray-600 bg-gray-900 hover:bg-gray-800"
                }`}
                onClick={() => document.getElementById("afterInput")?.click()}
              >
                {afterImage ? (
                  <img
                    src={URL.createObjectURL(afterImage)}
                    alt="Poslije"
                    className="w-full h-full object-contain rounded-lg p-2"
                  />
                ) : (
                  <span className="text-gray-500 text-center">
                    Klikni ili povuci datoteku
                  </span>
                )}
                <input
                  type="file"
                  id="afterInput"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => setAfterImage(e.target.files?.[0] || null)}
                />
              </div>

              {afterImage && (
                <button
                  onClick={() => setAfterImage(null)}
                  className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-gray-200 px-2 py-1 rounded shadow text-sm"
                >
                  Izbriši
                </button>
              )}
            </div>
          </div>

          {/* Upload gumb */}
          <button
            onClick={handleUpload}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition shadow cursor-pointer"
          >
            {loading ? "Učitavam..." : "Učitaj slike"}
          </button>
        </div>

        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow space-y-5">
          <h2 className="text-xl font-semibold text-gray-200">
            Postojeće usporedbe
          </h2>

          {usporedbe.length === 0 && (
            <p className="text-gray-400">Nema dodanih usporedbi.</p>
          )}

          <div className="space-y-4">
            {usporedbe.map((u) => (
              <div
                key={u.id}
                className="flex items-center justify-between bg-gray-900 p-3 rounded-lg border border-gray-700"
              >
                <div>
                  <p className="text-gray-200 font-semibold">{u.naziv}</p>
                  <p className="text-gray-400 text-sm">{u.opis}</p>
                </div>

                <button
                  onClick={() => {
                    setDeleteId(u.id);
                    setDeleteOpen(true);
                  }}
                  className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm cursor-pointer"
                >
                  Izbriši
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* Toast */}
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </div>
      <DeleteConfirm
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
}
