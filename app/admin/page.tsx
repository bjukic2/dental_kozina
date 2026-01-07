"use client";

import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push(`/prijava?callbackUrl=${encodeURIComponent("/admin")}`);
    } else if (status === "authenticated" && session?.user.role !== "admin") {
      router.push("/");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return (
      <div className="px-6 py-20 bg-linear-to-b from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center">
        <p className="text-center text-gray-300">Učitavanje...</p>
      </div>
    );
  }

  return (
    <div className="px-6 bg-linear-to-b from-gray-950 via-gray-900 to-gray-950 min-h-screen py-60">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-200">
          Admin Panel
        </h1>

        <div className="flex justify-center gap-6 mb-16">
          <Link
            href="/admin/poruke"
            className={`px-6 py-3 rounded-xl shadow transition font-medium border text-lg
              ${
                pathname === "/admin/poruke"
                  ? "bg-blue-600 text-white border-blue-700 scale-105"
                  : "bg-gray-800 text-blue-300 border-gray-700 hover:bg-gray-700"
              }`}
          >
            Poruke
          </Link>

          <Link
            href="/admin/usporedbe"
            className={`px-6 py-3 rounded-xl shadow transition font-medium border text-lg
              ${
                pathname === "/admin/usporedbe"
                  ? "bg-green-600 text-white border-green-700 scale-105"
                  : "bg-gray-800 text-green-300 border-gray-700 hover:bg-gray-700"
              }`}
          >
            Usporedbe
          </Link>
        </div>

        <p className="text-center text-gray-400">
          Odaberite kategoriju za upravljanje sadržajem.
        </p>
      </div>
    </div>
  );
}
