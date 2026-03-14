"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const navLinks = [
    { title: "About", href: "#about" },
    { title: "Experience", href: "#experience" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (hoveredIndex !== null) {
      const el = linkRefs.current[hoveredIndex];
      if (el) {
        setPillStyle({
          left: el.offsetLeft,
          width: el.offsetWidth,
          opacity: 1,
        });
      }
    } else {
      setPillStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [hoveredIndex]);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 flex justify-center"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.div
        className="mt-4 flex items-center justify-between gap-5 px-5 py-2.5 rounded-full border transition-all duration-500"
        animate={{
          backdropFilter: scrolled ? "blur(20px)" : "blur(8px)",
          backgroundColor: scrolled
            ? "rgba(10,10,10,0.85)"
            : "rgba(10,10,10,0.4)",
          borderColor: scrolled
            ? "rgba(255,255,255,0.1)"
            : "rgba(255,255,255,0.06)",
          width: scrolled ? "520px" : "560px",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(10,10,10,0.4)",
          borderColor: "rgba(255,255,255,0.06)",
          width: "560px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 tracking-wide whitespace-nowrap"
        >
          Cao Minh
        </Link>

        {/* Links */}
        <div
          className="flex items-center gap-1 relative"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Hover pill background */}
          <motion.div
            className="absolute inset-y-0 rounded-full bg-white/[0.08]"
            animate={{
              left: pillStyle.left,
              width: pillStyle.width,
              opacity: pillStyle.opacity,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 35 }}
          />

          {navLinks.map((link, index) => (
            <a
              key={link.title}
              href={link.href}
              ref={(el) => {
                linkRefs.current[index] = el;
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              className={`relative z-10 text-sm px-4 py-1.5 rounded-full transition-colors duration-200 tracking-wide ${
                hoveredIndex === index
                  ? "text-white"
                  : "text-gray-200 hover:text-gray-300"
              }`}
            >
              {link.title}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
