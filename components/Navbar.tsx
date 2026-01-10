"use client";

import Link from "next/link";
import logo from "./icons/logo.png";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopUslugeOpen, setDesktopUslugeOpen] = useState(false);
  const [mobileUslugeScreen, setMobileUslugeScreen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const kategorije = [
    { name: "Estetska stomatologija", slug: "estetska-stomatologija" },
    { name: "Ortodoncija", slug: "ortodoncija" },
    { name: "Implantologija", slug: "implantologija" },
    { name: "Parodontologija", slug: "parodontologija" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 left-0 w-full z-50 bg-gray-950 backdrop-blur-xl shadow-md"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* LOGO */}
            <Link href="/" className="flex items-center">
              <Image src={logo} alt="logo" width={140} height={40} />
            </Link>

            {/* MOBILE BUTTON */}
            <div className="lg:hidden flex items-center gap-3">
              {/* IZBORNIK uvijek prikazan */}
              <span
                className="text-white text-sm cursor-pointer"
                onClick={toggleMenu}
              >
                IZBORNIK
              </span>

              {/* Ikona */}
              <button
                onClick={toggleMenu}
                aria-label="Toggle Menu"
                className="cursor-pointer"
              >
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

              {/* DESKTOP DROPDOWN */}
              <li
                className="relative"
                onMouseEnter={() => setDesktopUslugeOpen(true)}
                onMouseLeave={() => setDesktopUslugeOpen(false)}
              >
                <span className="hover:text-gray-300 cursor-pointer flex items-center gap-1">
                  USLUGE <ChevronDown size={18} />
                </span>

                <AnimatePresence>
                  {desktopUslugeOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-lg p-3 w-56"
                    >
                      {kategorije.map((k) => (
                        <Link
                          key={k.slug}
                          href={`/usluge/${k.slug}`}
                          className="block px-3 py-2 rounded hover:bg-gray-800 text-gray-200"
                        >
                          {k.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <li>
                <Link href="/kontakt" className="hover:text-gray-300">
                  KONTAKT
                </Link>
              </li>
            </ul>

            {/* DESKTOP CTA */}
            <div className="hidden lg:block">
              <Link href="/kontakt">
                <button className="border border-white px-4 py-2 rounded-full hover:bg-blue-300 hover:text-gray-800 transition cursor-pointer">
                  PRVI PREGLED
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-gray-950 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            {/* MAIN MOBILE MENU */}
            <motion.div
              className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-gray-900 text-white z-50 px-6 py-8 shadow-lg"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-end items-center mb-6">
                <button
                  onClick={toggleMenu}
                  className="cursor-pointer flex items-center text-sm"
                >
                  ZATVORI
                  <X size={24} />
                </button>
              </div>

              <ul className="flex flex-col gap-4 text-sm font-medium divide-y divide-gray-700">
                <li className="py-3 flex items-center leading-none">
                  <Link href="/" onClick={toggleMenu}>
                    POČETNA
                  </Link>
                </li>
                <li className="py-3 flex items-center leading-none">
                  <Link href="/oNama" onClick={toggleMenu}>
                    O NAMA
                  </Link>
                </li>
                <li className="py-3 flex items-center leading-none">
                  <Link href="/galerija" onClick={toggleMenu}>
                    GALERIJA OSMIJEHA
                  </Link>
                </li>

                {/* MOBILE SUB-SCREEN TRIGGER */}
                <li className="py-3 flex items-center leading-none">
                  <button
                    onClick={() => setMobileUslugeScreen(true)}
                    className="flex items-center gap-1 w-full cursor-pointer"
                  >
                    <span>USLUGE</span>
                    <ChevronRight size={18} />
                  </button>
                </li>

                <li className="pt-2">
                  <Link href="/kontakt" onClick={toggleMenu}>
                    KONTAKT
                  </Link>
                </li>
              </ul>

              <button
                className="mt-6 border border-white px-4 py-2 rounded-full hover:bg-blue-300 hover:text-gray-800 transition w-full"
                onClick={toggleMenu}
              >
                PRVI PREGLED
              </button>
            </motion.div>

            {/* MOBILE SUB-SCREEN FOR KATEGORIJE */}
            <AnimatePresence>
              {mobileUslugeScreen && (
                <motion.div
                  className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-gray-900 text-white z-60 px-6 py-8 shadow-lg"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <button
                      onClick={() => setMobileUslugeScreen(false)}
                      className="cursor-pointer"
                    >
                      <ArrowLeft size={22} />
                    </button>
                    <h3 className="text-lg font-semibold">Usluge</h3>
                  </div>

                  <ul className="flex flex-col gap-4 text-sm font-medium divide-y divide-gray-700">
                    {kategorije.map((k) => (
                      <li
                        key={k.slug}
                        className="py-3 flex items-center leading-none"
                      >
                        <Link
                          href={`/usluge/${k.slug}`}
                          onClick={() => {
                            setMobileUslugeScreen(false);
                            toggleMenu();
                          }}
                          className="block py-1"
                        >
                          {k.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
