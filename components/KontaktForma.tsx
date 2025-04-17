"use client"

import { useState } from "react";

export default function KontaktForma() {
    const [status, setStatus] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("Slanje...");

        const formData = new FormData(e.currentTarget);
        const data = {
            ime: formData.get("ime"),
            email: formData.get("email"),
            poruka: formData.get("poruka"),
        };

        try {
            const res = await fetch("api/kontakt", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const result = await res.json();
            if(result.success) {
                setStatus("Poruka uspješno poslana!");
                e.currentTarget.reset();
            } else {
                setStatus("Došlo je do greške.");
            }
        } catch (err) {
            console.error(err);
            setStatus("Greška prilikon slanja.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded-lg shadow-md">
          <h6 className="text-lg font-semibold text-gray-700">Pošaljite poruku</h6>
    
          <div className="flex flex-col">
            <label htmlFor="ime" className="text-sm font-medium text-gray-600">
              Ime i prezime
            </label>
            <input type="text" id="ime" name="ime" className="border p-2 rounded mt-1" required />
          </div>
    
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-gray-600">
              Email adresa
            </label>
            <input type="email" id="email" name="email" className="border p-2 rounded mt-1" required />
          </div>
    
          <div className="flex flex-col">
            <label htmlFor="poruka" className="text-sm font-medium text-gray-600">
              Poruka
            </label>
            <textarea id="poruka" name="poruka" rows={4} className="border p-2 rounded mt-1" required />
          </div>
    
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Pošalji
          </button>
    
          {status && <p className="text-sm text-gray-700 mt-2">{status}</p>}
        </form>
      );
}