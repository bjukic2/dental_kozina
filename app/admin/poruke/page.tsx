"use client"

import { useEffect, useState, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

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
      router.push(`/prijava?callbackUrl=${encodeURIComponent("/admin/poruke")}`);
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

  // Memoriramo fetchPoruke pomoću useCallback
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
      <h1 className="text-2xl font-bold">Poruke korisnika</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap gap-4 items-end border p-4 rounded bg-gray-50"
      >
        <div className="flex flex-col">
          <label className="text-sm font-medium">Pretraga (ime/email)</label>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="border rounded p-2"
            placeholder="npr. Ana"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">Od datuma</label>
          <input
            type="date"
            value={od}
            onChange={(e) => setOd(e.target.value)}
            className="border rounded p-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">Do datuma</label>
          <input
            type="date"
            value={doDatuma}
            onChange={(e) => setDoDatuma(e.target.value)}
            className="border rounded p-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Filtriraj
        </button>
      </form>

      {loading ? (
        <p>Učitavanje poruka...</p>
      ) : poruke.length === 0 ? (
        <p>Nema poruka.</p>
      ) : (
        <div className="space-y-4">
          {poruke.map((p) => (
            <div
              key={p.id}
              className="border p-4 rounded shadow flex justify-between items-start"
            >
              <div>
                <p>
                  <strong>Ime:</strong> {p.ime}
                </p>
                <p>
                  <strong>Email:</strong> {p.email}
                </p>
                <p>
                  <strong>Poruka:</strong> {p.poruka}
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(p.createdAt).toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => obrisiPoruku(p.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Obriši
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            className={`px-3 py-1 rounded border ${
              page === num ? "bg-blue-600 text-white" : "bg-white text-blue-600"
            }`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}
