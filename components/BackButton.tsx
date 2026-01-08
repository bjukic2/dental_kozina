"use client";

export default function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="mb-6 px-4 py-2 rounded-lg bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700 transition cursor-pointer"
    >
      ← Nazad
    </button>
  );
}
