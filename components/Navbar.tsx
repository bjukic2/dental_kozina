"use client";

import Link from "next/link";
import logo from "./icons/logo.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;
        const scrollThreshold = 100;

        if (currentScrollY > scrollThreshold) {
          if (currentScrollY > lastScrollY) {
            setShowNavbar(false);
          } else {
            setShowNavbar(true);
          }
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
        className="w-full bg-gray-800 text-white py-4 z-50 fixed top-0 left-0 shadow-md"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-12">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="logo" width={150} height={40} />
          </Link>

          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

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

          <div className="hidden md:block">
            <Link href="/kontakt">
              <button className="border border-white text-white bg-transparent px-4 py-2 rounded hover:bg-white hover:text-gray-800 transition cursor-pointer">
                PRVI PREGLED
              </button>
            </Link>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
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
                className="mt-6 border border-white text-white bg-transparent px-4 py-2 rounded hover:bg-white hover:text-gray-800 transition w-full"
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
