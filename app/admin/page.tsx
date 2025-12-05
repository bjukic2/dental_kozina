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
    return <p className="p-6">Učitavanje...</p>;
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-10 text-center">Admin Panel</h1>

      <div className="flex justify-center gap-4 mb-12">
        <Link
          href="/admin/poruke"
          className={`px-6 py-3 rounded-xl shadow transition font-medium border
            ${
              pathname === "/admin/poruke"
                ? "bg-blue-600 text-white border-blue-700 scale-105"
                : "bg-white text-blue-700 border-blue-300 hover:bg-blue-50"
            }`}
        >
          Poruke
        </Link>

        <Link
          href="/admin/usporedbe"
          className={`px-6 py-3 rounded-xl shadow transition font-medium border
            ${
              pathname === "/admin/usporedbe"
                ? "bg-green-600 text-white border-green-700 scale-105"
                : "bg-white text-green-700 border-green-300 hover:bg-green-50"
            }`}
        >
          Usporedbe
        </Link>
      </div>
    </div>
  );
}
