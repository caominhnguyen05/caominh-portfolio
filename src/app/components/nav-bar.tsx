"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const navLinks = [
    { title: "About", href: "#about" },
    { title: "Experience", href: "#experience" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [activePillStyle, setActivePillStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section detection via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    const handleIntersect = (id: string, isIntersecting: boolean) => {
      if (isIntersecting) {
        const index = sectionIds.indexOf(id);
        setActiveIndex(index);
      }
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => handleIntersect(id, entry.isIntersecting),
        { threshold: 0.3, rootMargin: "-10% 0px -60% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Update active pill position
  useEffect(() => {
    if (activeIndex !== null) {
      const el = linkRefs.current[activeIndex];
      if (el) {
        setActivePillStyle({
          left: el.offsetLeft,
          width: el.offsetWidth,
          opacity: 1,
        });
      }
    } else {
      setActivePillStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [activeIndex]);

  // Update hover pill position
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

  const handleMobileLink = () => setMobileOpen(false);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 w-full z-50 flex justify-center px-4"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          className="mt-4 flex items-center justify-between px-4 py-2 rounded-full border w-full"
          animate={{
            backgroundColor: scrolled
              ? "rgba(255,255,255,0.12)"
              : "rgba(255,255,255,0.06)",
            borderColor: scrolled
              ? "rgba(255,255,255,0.2)"
              : "rgba(255,255,255,0.1)",
            boxShadow: scrolled
              ? "0 0 0 1px rgba(255,255,255,0.06) inset, 0 8px 32px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.08) inset"
              : "0 0 0 1px rgba(255,255,255,0.03) inset, 0 4px 16px rgba(0,0,0,0.3)",
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{
            backdropFilter: "blur(32px) saturate(180%)",
            WebkitBackdropFilter: "blur(32px) saturate(180%)",
            backgroundColor: "rgba(255,255,255,0.06)",
            borderColor: "rgba(255,255,255,0.1)",
            maxWidth: "600px",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="text-[13px] font-medium text-white hover:text-white/70 transition-colors duration-200 tracking-wide whitespace-nowrap flex-shrink-0"
          >
            Cao Minh
          </Link>

          {/* Desktop links */}
          <div
            className="hidden md:flex items-center gap-0.5 relative"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Active section pill — solid white */}
            <motion.div
              className="absolute inset-y-0 rounded-full bg-white/[0.15]"
              animate={{
                left: activePillStyle.left,
                width: activePillStyle.width,
                opacity: activePillStyle.opacity,
              }}
              transition={{ type: "spring", stiffness: 380, damping: 36 }}
            />

            {/* Hover pill — subtler */}
            <motion.div
              className="absolute inset-y-0 rounded-full bg-white/[0.07]"
              animate={{
                left: pillStyle.left,
                width: pillStyle.width,
                opacity: pillStyle.opacity,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 35 }}
            />

            {navLinks.map((link, index) => {
              const isActive = activeIndex === index;
              const isHovered = hoveredIndex === index;
              return (
                <a
                  key={link.title}
                  href={link.href}
                  ref={(el) => {
                    linkRefs.current[index] = el;
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className={`relative z-10 text-[13px] px-3.5 py-1.5 rounded-full transition-colors duration-200 tracking-wide ${
                    isActive
                      ? "text-white font-medium"
                      : isHovered
                        ? "text-white"
                        : "text-white/70"
                  }`}
                >
                  {link.title}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <a
            href="https://www.linkedin.com/in/caominh-nguyen/"
            className="hidden md:block text-[12px] font-medium px-4 py-1.5 rounded-full bg-white text-black hover:bg-white/90 transition-all duration-200 whitespace-nowrap flex-shrink-0"
          >
            Let's connect!
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 flex-shrink-0"
            aria-label="Toggle menu"
          >
            <motion.span
              className="block w-5 h-px bg-white/70 rounded-full origin-center"
              animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="block w-5 h-px bg-white/70 rounded-full"
              animate={
                mobileOpen
                  ? { opacity: 0, scaleX: 0 }
                  : { opacity: 1, scaleX: 1 }
              }
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-5 h-px bg-white/70 rounded-full origin-center"
              animate={
                mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.25 }}
            />
          </button>
        </motion.div>
      </motion.nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full z-40 px-4 md:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div
              className="mt-20 rounded-2xl border border-white/[0.12] overflow-hidden"
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(32px) saturate(180%)",
                WebkitBackdropFilter: "blur(32px) saturate(180%)",
                boxShadow:
                  "0 8px 40px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.08) inset",
              }}
            >
              {navLinks.map((link, index) => {
                const isActive = activeIndex === index;
                return (
                  <motion.a
                    key={link.title}
                    href={link.href}
                    onClick={handleMobileLink}
                    className={`flex items-center justify-between px-6 py-4 text-[15px] transition-all duration-150 border-b border-white/[0.06] last:border-b-0 ${
                      isActive
                        ? "text-white bg-white/[0.08] font-medium"
                        : "text-white/70 hover:text-white hover:bg-white/[0.04]"
                    }`}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <span>{link.title}</span>
                  </motion.a>
                );
              })}

              <div className="px-6 py-4 border-t border-white/[0.06]">
                <a
                  href="https://www.linkedin.com/in/caominh-nguyen/"
                  onClick={handleMobileLink}
                  className="block w-full text-center text-[13px] font-medium px-4 py-2.5 rounded-full bg-white text-black hover:bg-white/90 transition-all"
                >
                  Let's connect!
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
