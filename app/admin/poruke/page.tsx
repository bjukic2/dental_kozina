"use client"


import { div, p } from "framer-motion/client";
import { useEffect, useState } from "react";

type Poruka = {
    id: number;
    ime: string;
    email: string;
    poruka: string;
    createdAt: string;
};


export default function AdminPoruke() {
    const [poruke, setPoruke] = useState<Poruka[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/admin/poruke")
            .then((res) => res.json())
            .then((data) => {
                setPoruke(data);
                setLoading(false);
            });
    }, []);

    const obrisiPoruku = async (id: number) => {
        await fetch(`/api/admin/poruke/${id}`, {method: "DELETE"});
        setPoruke(poruke.filter((p) => p.id != id));
    };

    if (loading) return <p>Učitavanje poruka...</p>;

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-4">
            <h1 className="text-2xl font-bold">Poruke korisnika</h1>
            {poruke.length === 0 ? (
                <p>Nema poruka.</p>
            ) : (
                poruke.map((p) => (
                    <div
                        key={p.id}
                        className="border p-4 rounded shadow flex justify-between items-start"
                    >
                        <div>
                            <p><strong>Ime:</strong> {p.ime}</p>
                            <p><strong>Email:</strong> {p.email}</p>
                            <p><strong>Poruka:</strong> {p.poruka}</p>
                            <p className="text-sm text-gray-500">{new Date(p.createdAt).toLocaleString()}</p>
                        </div>
                        <button 
                            onClick={() => obrisiPoruku(p.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        >
                            Obriši
                        </button>
                    </div>    
                ))
            )}
        </div>
    );
}