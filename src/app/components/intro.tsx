"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

const Intro: React.FC = () => {
  const name = "Cao Minh Nguyen.";
  const letters = Array.from(name);

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section
      id="intro"
      className="h-screen flex items-center justify-center text-center"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          Hi, I&apos;m{" "}
          <motion.span
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            aria-label={name}
            className="inline-flex"
          >
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.span>
          <br />
          <motion.span
            className="text-gray-400 text-3xl md:text-5xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: letters.length * 0.1 + 0.5 }}
          >
            A Computer Science Student at TU Delft.
          </motion.span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: letters.length * 0.1 + 0.7, duration: 0.8 }}
        >
          I have contributed in building modern web and mobile applications
          using different languages and frameworks. Passionate about backend
          development, cloud technologies, and creating UI/UX for seamless user
          experiences.
        </motion.p>
      </div>
    </section>
  );
};

export default Intro;
