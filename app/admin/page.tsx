"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

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
    <div className="max-w-xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>

      <ul className="space-y-4">
        <li>
          <Link
            href="/admin/poruke"
            className="block bg-blue-600 text-white text-center py-3 rounded hover:bg-blue-700 transition"
          >
            Pogledaj poruke
          </Link>
        </li>
        <li>
          <Link
            href="/admin/usporedbe"
            className="block bg-green-600 text-white text-center py-3 rounded hover:bg-green-700 transition"
          >
            Dodaj usporedbu
          </Link>
        </li>
      </ul>
    </div>
  );
}
