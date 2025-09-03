"use client";

import { motion } from "framer-motion";
import React from "react";

const Intro: React.FC = () => {
  return (
    <section
      id="intro"
      className="h-screen flex items-center justify-center text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Hi, I'm Cao Minh Nguyen.
          <br />
          <span className="text-gray-400">
            A Computer Science Student at TU Delft.
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          I have contributed in building modern web and mobile applications
          using different languages and frameworks. Passionate about backend
          development, cloud technologies, and creating UI/UX for seamless user
          experiences.
        </p>
      </motion.div>
    </section>
  );
};

export default Intro;
