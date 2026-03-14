"use client";
import { motion } from "framer-motion";
import React from "react";

const Intro: React.FC = () => {
  return (
    <section
      id="intro"
      className="min-h-screen flex items-center px-6 md:px-12"
    >
      <div className="max-w-3xl mx-auto w-full py-32">
        <motion.span
          className="text-xs font-medium tracking-[0.12em] uppercase text-gray-400 block mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          Computer Science student
        </motion.span>

        <motion.h1
          className="font-serif text-3xl md:text-6xl font-normal leading-[1.08] tracking-tight text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Cao Minh Nguyen.
          <br />
          <span className="italic text-gray-400 md:text-5xl">
            Building things that matter.
          </span>
        </motion.h1>

        <motion.div
          className="w-full h-px bg-white/8 my-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        />

        <motion.p
          className="text-gray-300 text-base md:text-lg font-light leading-relaxed max-w-lg mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Hi, I'm a CS student at TU Delft. Interested in backend systems, cloud
          infrastructure, full-stack engineering. Seeking SWE graduate roles in
          2026.
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
            href="/cv.pdf"
            className="text-sm font-normal px-5 py-2.5 text-gray-400 rounded-full border border-white/25 hover:border-white/40 hover:text-white transition-all"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
