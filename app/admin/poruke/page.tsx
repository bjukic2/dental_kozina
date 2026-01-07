"use client";

import { useEffect, useState, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import DeleteConfirm from "@/components/DeleteConfirm";

interface Poruka {
  id: number;
  ime: string;
  email: string;
  poruka: string;
  createdAt: string;
}

export default function AdminPoruke() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push(
        `/prijava?callbackUrl=${encodeURIComponent("/admin/poruke")}`
      );
    } else if (status === "authenticated" && session?.user.role !== "admin") {
      router.push("/");
    }
  }, [session, status, router]);

  const [poruke, setPoruke] = useState<Poruka[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [q, setQ] = useState("");
  const [od, setOd] = useState("");
  const [doDatuma, setDoDatuma] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const fetchPoruke = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams({ page: String(page) });
    if (q) params.append("q", q);
    if (od) params.append("od", od);
    if (doDatuma) params.append("do", doDatuma);

    const res = await fetch(`/api/poruke?${params.toString()}`);
    const data = await res.json();
    setPoruke(data.poruke);
    setTotalPages(data.totalPages);
    setLoading(false);
  }, [page, q, od, doDatuma]);

  useEffect(() => {
    fetchPoruke();
  }, [page, q, od, doDatuma, fetchPoruke]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    fetchPoruke();
  };

  const obrisiPoruku = async (id: number) => {
    await fetch(`/api/admin/poruke/${id}`, { method: "DELETE" });
    fetchPoruke();
  };

  return (
    <div className="px-6 py-20 bg-linear-to-b from-gray-950 via-gray-900 to-gray-950 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Back link */}
        <Link
          href="/admin"
          className="inline-block px-4 py-2 bg-gray-800 text-gray-200 rounded-lg shadow hover:bg-gray-700 transition"
        >
          ⬅ Povratak na Admin Panel
        </Link>

        <h1 className="text-3xl font-bold text-gray-200 text-center">
          Poruke korisnika
        </h1>

        {/* FILTER FORM */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap gap-4 items-end p-5 rounded-xl bg-gray-800 border border-gray-700 shadow"
        >
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-300">
              Pretraga (ime/email)
            </label>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="rounded p-2 bg-gray-900 border border-gray-700 text-gray-200"
              placeholder="npr. Ana"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-300">
              Od datuma
            </label>
            <input
              type="date"
              value={od}
              onChange={(e) => setOd(e.target.value)}
              className="rounded p-2 bg-gray-900 border border-gray-700 text-gray-200"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-300">
              Do datuma
            </label>
            <input
              type="date"
              value={doDatuma}
              onChange={(e) => setDoDatuma(e.target.value)}
              className="rounded p-2 bg-gray-900 border border-gray-700 text-gray-200"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 shadow"
          >
            Filtriraj
          </button>
        </form>

        {/* LISTA PORUKA */}
        {loading ? (
          <p className="text-gray-300 text-center">Učitavanje poruka...</p>
        ) : poruke.length === 0 ? (
          <p className="text-gray-400 text-center">Nema poruka.</p>
        ) : (
          <div className="space-y-6">
            {poruke.map((p) => (
              <div
                key={p.id}
                className="bg-gray-800 border border-gray-700 p-5 rounded-xl shadow hover:shadow-xl transition"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 text-sm text-gray-300">
                  <div>
                    <p className="font-semibold text-gray-100">Ime:</p>
                    <p>{p.ime}</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-100">Email:</p>
                    <p className="break-all">{p.email}</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-100">Vrijeme:</p>
                    <p>{new Date(p.createdAt).toLocaleString()}</p>
                  </div>
                </div>

                <div className="mt-2">
                  <p className="font-semibold text-gray-100 mb-1 text-lg">
                    Poruka:
                  </p>
                  <p className="text-gray-200 whitespace-pre-line leading-relaxed bg-gray-900 p-3 rounded-lg shadow-inner">
                    {p.poruka}
                  </p>
                </div>

                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => {
                      setSelectedId(p.id);
                      setModalOpen(true);
                    }}
                    className="bg-red-600 text-white px-4 py-1.5 rounded hover:bg-red-700 shadow"
                  >
                    Obriši
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PAGINATION */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={`px-3 py-1 rounded border shadow-sm hover:shadow-md transition
                ${
                  page === num
                    ? "bg-blue-600 text-white border-blue-700"
                    : "bg-gray-800 text-blue-300 border-gray-700"
                }`}
            >
              {num}
            </button>
          ))}
        </div>

        {/* DELETE CONFIRM MODAL */}
        <DeleteConfirm
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onConfirm={() => {
            if (selectedId) obrisiPoruku(selectedId);
          }}
        />
      </div>
    </div>
  );
}
