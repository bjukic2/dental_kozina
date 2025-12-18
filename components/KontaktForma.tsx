"use client";

import { useState, useRef } from "react";

export default function KontaktForma() {
  const [status, setStatus] = useState<string>("");
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Poruka se šalje... \nNemojte zatvarati ovaj prozor.");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (result.success) {
        setStatus("Poruka uspješno poslana!");
        setFileName(null);
        form.reset();
      } else {
        setStatus("Došlo je do greške pri slanju poruke.");
      }
    } catch (error) {
      console.error("Greška:", error);
      setStatus("Došlo je do greške pri slanju.");
    }
  };

  const handleFileChange = (file: File | null) => {
    if (file) {
      setFileName(file.name);
    } else {
      setFileName(null);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && fileInputRef.current) {
      fileInputRef.current.files = e.dataTransfer.files;
      handleFileChange(file);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <h6 className="text-lg font-semibold text-gray-200">Pošaljite poruku</h6>

      {/* Ime */}
      <div className="flex flex-col">
        <label htmlFor="ime" className="text-sm font-medium text-gray-300">
          Ime i prezime
        </label>
        <input
          type="text"
          id="ime"
          name="ime"
          required
          className="mt-1 rounded-lg border border-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm font-medium text-gray-300">
          Email adresa
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 rounded-lg border border-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Poruka */}
      <div className="flex flex-col">
        <label htmlFor="poruka" className="text-sm font-medium text-gray-300">
          Poruka
        </label>
        <textarea
          id="poruka"
          name="poruka"
          rows={4}
          required
          className="mt-1 rounded-lg border border-gray-400 px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Ortopan – Drag & Drop */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-300 mb-1">
          Ortopan (po želji)
        </label>

        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className="flex cursor-pointer flex-col items-center justify-center
                     rounded-xl border-2 border-dashed border-gray-300
                     bg-gray-700 px-4 py-6 text-center
                     hover:border-blue-500 hover:bg-gray-400
                     transition-colors"
        >
          <p className="text-sm text-gray-300">
            {fileName ? (
              <>
                Odabrana datoteka:
                <span className="block font-semibold text-gray-800 mt-1">
                  {fileName}
                </span>
              </>
            ) : (
              <>
                Povucite ortopan ovdje ili{" "}
                <span className="font-semibold text-blue-400">
                  kliknite za odabir
                </span>
              </>
            )}
          </p>

          <p className="mt-2 text-xs text-gray-400">
            JPG, PNG ili PDF • max 5 MB
          </p>
        </div>

        {/* Pravi file input (skriven) */}
        <input
          ref={fileInputRef}
          type="file"
          id="ortopan"
          name="ortopan"
          accept=".jpg,.jpeg,.png,.pdf"
          className="hidden"
          onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full rounded-xl bg-blue-400 px-4 py-2 font-semibold text-white
                   hover:bg-blue-700 transition-colors hover: cursor-pointer"
      >
        Pošalji
      </button>

      {status && (
        <p
          className={`text-sm font-medium mt-2 text-center ${
            status.includes("uspješno") ? "text-green-600" : "text-red-600"
          }`}
        >
          {status}
        </p>
      )}
    </form>
  );
}
