// Updated AdminPoruke styling with delete confirmation and improved filter UI

"use client";

import { useEffect, useState, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import DeleteConfirm from "@/components/DeleteConfirm"; // ispravljeno ime

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

  // modal states
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
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Link
        href="/admin"
        className="mb-6 inline-block px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg shadow"
      >
        ⬅ Povratak na Admin Panel
      </Link>

      <h1 className="text-2xl font-bold">Poruke korisnika</h1>

      {/* FILTER FORM */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap gap-4 items-end p-4 rounded-xl bg-blue-50 shadow-sm border border-blue-100"
      >
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">
            Pretraga (ime/email)
          </label>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="rounded p-2 bg-white border border-blue-100 shadow-inner"
            placeholder="npr. Ana"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Od datuma</label>
          <input
            type="date"
            value={od}
            onChange={(e) => setOd(e.target.value)}
            className="rounded p-2 bg-white border border-blue-100 shadow-inner"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Do datuma</label>
          <input
            type="date"
            value={doDatuma}
            onChange={(e) => setDoDatuma(e.target.value)}
            className="rounded p-2 bg-white border border-blue-100 shadow-inner"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 shadow"
        >
          Filtriraj
        </button>
      </form>

      {loading ? (
        <p>Učitavanje poruka...</p>
      ) : poruke.length === 0 ? (
        <p>Nema poruka.</p>
      ) : (
        <div className="space-y-6">
          {poruke.map((p) => (
            <div
              key={p.id}
              className="bg-blue-50 border border-blue-100 p-5 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 text-sm text-gray-700">
                <div>
                  <p className="font-semibold text-gray-900">Ime:</p>
                  <p>{p.ime}</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">Email:</p>
                  <p className="break-all">{p.email}</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">Vrijeme:</p>
                  <p>{new Date(p.createdAt).toLocaleString()}</p>
                </div>
              </div>

              <div className="mt-2">
                <p className="font-semibold text-gray-900 mb-1 text-lg">
                  Poruka:
                </p>
                <p className="text-gray-900 whitespace-pre-line leading-relaxed bg-white p-3 rounded-lg shadow-inner">
                  {p.poruka}
                </p>
              </div>

              <div className="flex justify-end mt-4">
                <button
                  onClick={() => {
                    setSelectedId(p.id);
                    setModalOpen(true);
                  }}
                  className="bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600 shadow"
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
            className={`px-3 py-1 rounded border shadow-sm hover:shadow-md transition-shadow
              ${
                page === num
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600"
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
          if (selectedId) {
            obrisiPoruku(selectedId);
          }
        }}
      />
    </div>
  );
}
