"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="group relative">
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-3 md:p-4 rounded-full shadow-lg bg-gray-800 text-white hover:bg-gray-700 
                         dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 
                         transition-colors duration-300"
            >
              <ArrowUp size={20} />
            </button>

            {/* TOOLTIP */}
            <span
              className="absolute right-full mr-2 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 
                             origin-right bg-gray-800 text-white dark:bg-white dark:text-gray-900 
                             text-xs px-2 py-1 rounded transition-all duration-300 whitespace-nowrap"
            >
              Nazad na vrh
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
