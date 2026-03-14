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
      className="w-full max-w-md"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.6 }}
    >
      <div className="flex items-center gap-1.5 px-4 py-3 bg-white/[0.06] border border-white/[0.08] rounded-t-xl border-b-0">
        <span className="w-3 h-3 rounded-full bg-white/10" />
        <span className="w-3 h-3 rounded-full bg-white/10" />
        <span className="w-3 h-3 rounded-full bg-white/10" />
        <span className="ml-3 text-[11px] text-gray-600 tracking-wide">
          minh.ts
        </span>
      </div>

      {/* Code body */}
      <div className="bg-white/[0.03] border border-white/[0.08] rounded-b-xl px-5 py-5 font-mono text-[13px] leading-[1.9] min-h-[240px]">
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
          <div className="mt-3 flex items-center gap-2 text-emerald-500 text-[12px]">
            <span>▶</span>
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
      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto py-32 flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left — text */}
        <div className="flex-1 max-w-xl">
          <motion.span
            className="text-[11px] font-medium tracking-[0.14em] uppercase text-gray-500 block mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            Computer Science Student
          </motion.span>

          <motion.h1
            className="font-serif text-4xl md:text-6xl font-normal leading-[1.08] tracking-tight text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Cao Minh Nguyen.
            <br />
            <span className="italic text-gray-400 text-3xl md:text-5xl">
              Building things that matter.
            </span>
          </motion.h1>

          <motion.div
            className="w-16 h-px bg-white/20 my-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />

          <motion.p
            className="text-gray-300 text-base md:text-[17px] font-light leading-relaxed max-w-md mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            CS student at TU Delft. Interested in backend systems, cloud
            infrastructure, and full-stack engineering. Seeking SWE graduate
            roles in 2026.
          </motion.p>

          <motion.div
            className="flex gap-3 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            <a
              href="#projects"
              className="text-sm font-medium px-5 py-2.5 bg-white text-black rounded-full hover:opacity-80 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="/CM_Nguyen_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-normal px-5 py-2.5 text-gray-300 rounded-full border border-white/20 hover:border-white/40 hover:text-white transition-all"
            >
              View CV
            </a>
          </motion.div>
        </div>

        {/* Right — terminal */}
        <div className="hidden md:flex flex-1 justify-end">
          <TerminalBlock />
        </div>
      </div>

      {/* Bottom fade into black */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
};

export default Intro;
