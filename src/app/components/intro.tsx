"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const codeLines = [
  { text: "const minh = {", color: "text-gray-300" },
  { text: '  university: "TU Delft",', color: "text-blue-400" },
  {
    text: '  focus: ["Backend", "Data analysis", "Fullstack"],',
    color: "text-emerald-400",
  },
  { text: "  openToWork: true,", color: "text-purple-400" },
  { text: "  graduating: 2026,", color: "text-purple-400" },
  { text: "}", color: "text-gray-300" },
  { text: "", color: "" },
  { text: "minh.buildSomething();", color: "text-amber-400" },
];

const TerminalBlock: React.FC = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const t = setTimeout(() => setVisibleLines((v) => v + 1), 120);
      return () => clearTimeout(t);
    }
  }, [visibleLines]);

  useEffect(() => {
    const t = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <motion.div
      className="w-full max-w-xl"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.6 }}
    >
      <div className="flex items-center gap-1.5 px-5 py-4 bg-white/[0.07] border border-white/[0.1] rounded-t-lg border-b-0">
        <span className="w-3 h-3 rounded-full bg-white/20" />
        <span className="w-3 h-3 rounded-full bg-white/14" />
        <span className="w-3 h-3 rounded-full bg-white/10" />
        <span className="ml-4 text-xs text-gray-500 tracking-wide">
          minh.ts
        </span>
      </div>

      <div className="bg-white/[0.035] border border-white/[0.1] rounded-b-lg px-6 py-6 font-mono text-sm leading-[1.95] min-h-[300px] shadow-2xl shadow-black/40">
        {codeLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={line.color || "text-transparent"}>
            {line.text || "\u00A0"}
          </div>
        ))}
        {visibleLines < codeLines.length && (
          <span
            className={`inline-block w-[7px] h-[14px] bg-gray-400 align-middle ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}
          />
        )}
        {visibleLines >= codeLines.length && (
          <div className="mt-4 flex items-center gap-2 text-emerald-400 text-sm">
            <span>{">"}</span>
            <span>Ready.</span>
            <span
              className={`inline-block w-[6px] h-[13px] bg-emerald-500 align-middle ml-1 ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Intro: React.FC = () => {
  return (
    <section
      id="intro"
      className="relative min-h-screen flex items-center px-6 md:px-12 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_45%)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto py-36 lg:py-44 grid lg:grid-cols-[1.08fr_0.92fr] items-center gap-14 lg:gap-20">
        <div className="max-w-4xl">
          <motion.span
            className="text-sm md:text-base font-semibold tracking-[0.16em] uppercase block mb-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            Computer Science Student
          </motion.span>

          <motion.h1
            className="font-serif text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-normal leading-[0.95] tracking-tight text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Cao Minh Nguyen.
            <br />
          </motion.h1>

          <motion.div
            className="w-20 h-px bg-white/25 my-9"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />

          <motion.p
            className="text-xl md:text-2xl font-light leading-[1.55] max-w-2xl mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            CS student at TU Delft. Interested in backend systems, cloud
            infrastructure, and AI engineering. Seeking SWE graduate roles in
            2026.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            <a
              href="#projects"
              className="text-base font-semibold px-7 py-3.5 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
            >
              View Projects
            </a>
            <a
              href="/CM_Nguyen_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-base font-medium px-7 py-3.5 text-gray-200 rounded-full border border-white/20 hover:border-white/45 hover:text-white transition-all"
            >
              View CV
            </a>
          </motion.div>
        </div>

        <div className="hidden lg:flex justify-end">
          <TerminalBlock />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
};

export default Intro;
