"use client";

import Link from "next/link";
import logo from "./icons/logo.png";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.2 }}
        className="
    fixed top-0 left-0 w-full z-50
    bg-gray-950 backdrop-blur-xl
    shadow-md
  "
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* LOGO */}
            <Link href="/" className="flex items-center">
              <Image src={logo} alt="logo" width={140} height={40} />
            </Link>

            {/* MOBILE BUTTON */}
            <div className="lg:hidden">
              <button onClick={toggleMenu} aria-label="Toggle Menu">
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* DESKTOP NAV */}
            <ul className="hidden lg:flex gap-6 items-center text-lg font-medium">
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
                <Link href="/galerija" className="hover:text-gray-300">
                  GALERIJA OSMIJEHA
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

            {/* DESKTOP CTA */}
            <div className="hidden lg:block">
              <Link href="/kontakt" className="cursor-pointer">
                <button className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-gray-800 transition cursor-pointer">
                  PRVI PREGLED
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-gray-950 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            <motion.div
              className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-gray-800 text-white z-50 px-6 py-8 shadow-lg"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Navigacija</h3>
                <button onClick={toggleMenu}>
                  <X size={24} />
                </button>
              </div>

              <ul className="flex flex-col gap-4 text-sm font-medium">
                <li>
                  <Link href="/" onClick={toggleMenu}>
                    POČETNA
                  </Link>
                </li>
                <li>
                  <Link href="/oNama" onClick={toggleMenu}>
                    O NAMA
                  </Link>
                </li>
                <li>
                  <Link href="/galerija" onClick={toggleMenu}>
                    GALERIJA OSMIJEHA
                  </Link>
                </li>
                <li>
                  <Link href="/usluge" onClick={toggleMenu}>
                    USLUGE
                  </Link>
                </li>
                <li>
                  <Link href="/kontakt" onClick={toggleMenu}>
                    KONTAKT
                  </Link>
                </li>
              </ul>

              <button
                className="mt-6 border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-gray-800 transition w-full"
                onClick={toggleMenu}
              >
                PRVI PREGLED
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
