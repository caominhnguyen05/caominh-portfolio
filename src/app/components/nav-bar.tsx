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

  // State to track the index of the hovered link.
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // An array of refs to store the DOM nodes of each navigation link.
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // State to store the position and width of the underline.
  const [underlineStyle, setUnderlineStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  // This effect runs whenever the hoveredIndex changes.
  useEffect(() => {
    if (hoveredIndex !== null) {
      const linkEl = linkRefs.current[hoveredIndex];
      if (linkEl) {
        setUnderlineStyle({
          left: linkEl.offsetLeft,
          width: linkEl.offsetWidth,
          opacity: 1,
        });
      }
    } else {
      setUnderlineStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [hoveredIndex]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white">
          Cao Minh Nguyen
        </Link>

        <div
          className="hidden md:flex space-x-8 relative"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {navLinks.map((link, index) => (
            <a
              key={link.title}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors duration-300 py-2"
              onMouseEnter={() => setHoveredIndex(index)}
              ref={(el) => {
                linkRefs.current[index] = el;
              }}
            >
              {link.title}
            </a>
          ))}

          <motion.div
            className="absolute bottom-0 h-[2px] bg-white rounded-full"
            animate={underlineStyle}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
