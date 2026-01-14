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

  const toggleMenu = () => {
    setMenuOpen(true);
    setMobileUslugeScreen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const kategorije = [
    { name: "Estetska stomatologija", slug: "estetska-stomatologija" },
    { name: "Ortodoncija", slug: "ortodoncija" },
    { name: "Implantologija", slug: "implantologija" },
    { name: "Parodontologija", slug: "parodontologija" },
    {
      name: "Restaurativna dentalna medicina",
      slug: "restaurativna-dentalna-medicina",
    },
    { name: "Endodoncija", slug: "endodoncija" },
    { name: "Protetika", slug: "protetika" },
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
            <Link href="/" className="flex items-center">
              <Image src={logo} alt="logo" width={140} height={40} />
            </Link>

            {/* MOBILE BUTTON */}
            <div className="lg:hidden flex items-center gap-3">
              <span
                className="text-white text-sm cursor-pointer"
                onClick={toggleMenu}
              >
                IZBORNIK
              </span>

              <button onClick={toggleMenu} className="cursor-pointer">
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

      {/* OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="overlay"
            className="fixed inset-0 bg-gray-950/80 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* MOBILE PANELS */}
      <AnimatePresence mode="wait" initial={false}>
        {/* MAIN SCREEN */}
        {menuOpen && !mobileUslugeScreen && (
          <motion.div
            key="main-menu"
            className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-gray-900 text-white z-50 px-6 py-8 shadow-lg"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onAnimationComplete={(def) => {
              if (def === "exit") setMobileUslugeScreen(false);
            }}
          >
            <div className="flex justify-end items-center mb-6">
              <button
                onClick={closeMenu}
                className="cursor-pointer flex items-center text-sm gap-1"
              >
                ZATVORI
                <X size={24} />
              </button>
            </div>

            <ul className="flex flex-col gap-4 text-sm font-medium divide-y divide-gray-700">
              <li className="py-3">
                <Link href="/" onClick={closeMenu}>
                  POČETNA
                </Link>
              </li>
              <li className="py-3">
                <Link href="/oNama" onClick={closeMenu}>
                  O NAMA
                </Link>
              </li>
              <li className="py-3">
                <Link href="/galerija" onClick={closeMenu}>
                  GALERIJA OSMIJEHA
                </Link>
              </li>

              <li className="py-3">
                <button
                  onClick={() => setMobileUslugeScreen(true)}
                  className="flex items-center gap-1 w-full cursor-pointer"
                >
                  USLUGE <ChevronRight size={18} />
                </button>
              </li>

              <li className="py-3">
                <Link href="/kontakt" onClick={closeMenu}>
                  KONTAKT
                </Link>
              </li>
            </ul>

            <Link href="/kontakt">
              <button
                className="mt-6 border border-white px-4 py-2 rounded-full hover:bg-blue-300 hover:text-gray-800 transition w-full cursor-pointer"
                onClick={closeMenu}
              >
                PRVI PREGLED
              </button>
            </Link>
          </motion.div>
        )}

        {/* SUB SCREEN */}
        {menuOpen && mobileUslugeScreen && (
          <motion.div
            key="sub-menu"
            className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-gray-900 text-white z-50 px-6 py-8 shadow-lg"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
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
                <li key={k.slug} className="py-3 uppercase">
                  <Link
                    href={`/usluge/${k.slug}`}
                    onClick={closeMenu}
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
  );
}
