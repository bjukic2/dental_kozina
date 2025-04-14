"use client";

import Link from "next/link";
import logo from "./icons/logo.png";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Hamburger ikone (možeš i druge)

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-800 text-white px-4 md:px-12 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="logo" width={150} height={40} />
        </Link>

        {/* Hamburger ikona - prikazuje se na mobitelu */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop meni */}
        <ul className="hidden md:flex gap-6 items-center text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-gray-300">
              POČETNA
            </Link>
          </li>
          <li>
            <Link href="/oNama" className="hover:text-gray-300">
              O NAMA
            </Link>
          </li>
          <li>
            <Link href="/usluge" className="hover:text-gray-300">
              USLUGE
            </Link>
          </li>
          <li>
            <Link href="/kontakt" className="hover:text-gray-300">
              KONTAKT
            </Link>
          </li>
        </ul>

        {/* Desktop gumb */}
        <div className="hidden md:block">
          <button className="border border-white text-white bg-transparent px-4 py-2 rounded hover:bg-white hover:text-gray-800 transition">
            PRVI PREGLED
          </button>
        </div>
      </div>

      {/* Mobilni meni (toggle) */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                POČETNA
              </Link>
            </li>
            <li>
              <Link href="/oNama" onClick={() => setMenuOpen(false)}>
                O NAMA
              </Link>
            </li>
            <li>
              <Link href="/usluge" onClick={() => setMenuOpen(false)}>
                USLUGE
              </Link>
            </li>
            <li>
              <Link href="/kontakt" onClick={() => setMenuOpen(false)}>
                KONTAKT
              </Link>
            </li>
          </ul>

          <button
            className="border border-white text-white bg-transparent px-4 py-2 rounded hover:bg-white hover:text-gray-800 transition w-full"
            onClick={() => setMenuOpen(false)}
          >
            PRVI PREGLED
          </button>
        </div>
      )}
    </nav>
  );
}
