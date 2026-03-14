"use client";
import { motion } from "framer-motion";
import React from "react";
import { education } from "../data/education";

const About: React.FC = () => {
  const skills = [
    "Java",
    "Python",
    "TypeScript",
    "Next.js",
    "React",
    "Spring Boot",
    "NestJS",
    "AWS",
    "PostgreSQL",
    "Git",
    "Docker",
  ];

  return (
    <motion.section
      id="about"
      className="py-24 px-6 md:px-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-3xl mx-auto flex flex-col gap-16">
        {/* Label */}
        <p className="text-l font-medium tracking-[0.12em] uppercase ">About</p>

        {/* Row 1 — bio left, education right */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 items-start">
          {/* Bio */}
          <div className="space-y-5 text-[15px] leading-[1.85] font-light text-gray-300">
            <p>
              I&apos;m <span className="text-white font-normal">Minh</span>, a
              third-year CS student at{" "}
              <span className="text-white font-normal">TU Delft</span> from
              Vietnam.
            </p>
            <p>
              I&apos;ve interned at{" "}
              <span className="text-white font-normal">FPT Software</span>,{" "}
              <span className="text-white font-normal">Dizconto</span>, and{" "}
              <span className="text-white font-normal">RET</span> — building
              backend systems, modern UI, integrating AWS services, and shipping
              full-stack products to real users.
            </p>
            <p>
              Outside of code I follow football, train at the gym, and explore
              European cities when I can.
            </p>
          </div>

          {/* Education */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium tracking-[0.12em] uppercase text-gray-400">
              Education
            </p>
            <div className="flex flex-col">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  className="flex justify-between items-start py-4 border-b border-white/[0.3] last:border-0"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="flex flex-col gap-1">
                    <p className="text-[14px] font-medium text-gray-100">
                      {edu.institution}
                    </p>
                    <p className="text-[12px] text-gray-400 leading-relaxed">
                      {edu.degree}
                    </p>
                  </div>
                  <span className="text-xs text-gray-400 whitespace-nowrap ml-6 mt-0.5 tabular-nums">
                    {edu.years}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills — full width */}
        <div className="flex flex-col gap-5">
          <p className="text-sm font-medium tracking-[0.12em] uppercase text-gray-400">
            Core Skills
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((s, i) => (
              <motion.span
                key={s}
                className="text-[13px] text-gray-300 px-4 py-2 border border-white/[0.15] rounded-full hover:border-white/20 hover:text-white transition-all duration-200"
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
