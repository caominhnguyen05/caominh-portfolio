"use client";
import { motion } from "framer-motion";
import React from "react";
import { education } from "../data/education";

const About: React.FC = () => {
  const skills = [
    "Java",
    "Python",
    "TypeScript",
    "Spring Boot",
    "Next.js",
    "React",
    "NestJS",
    "Django",
    "AWS",
    "PostgreSQL",
    "Git",
    "Docker",
  ];

  return (
    <motion.section
      id="about"
      className="py-28 md:py-36 px-6 md:px-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-16 md:gap-20">
        <div className="grid lg:grid-cols-[0.32fr_0.68fr] gap-8 lg:gap-16 items-end border-b border-white/[0.08] pb-10">
          <p className="text-sm md:text-base font-semibold tracking-[0.16em] uppercase ">
            About
          </p>
          <h2 className="font-serif text-5xl md:text-7xl font-normal leading-[0.98] tracking-tight text-white">
            Someone who loves to build things, learn new tech, and solve
            problems.
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-x-20 gap-y-14 items-start">
          <div className="space-y-7 text-xl md:text-2xl leading-[1.65] font-light text-gray-300">
            <p>
              Hi! I&apos;m Minh, a final-year Computer Science student at TU
              Delft with interests in algorithms & data structures, data
              analysis, and backend development. I've interned at FPT Software,
              Dizconto, and RET, building backend systems, modern UI,
              integrating AWS services, and shipping full-stack products to real
              users. Outside of code I follow football, train at the gym, and
              explore European cities when I can.
            </p>

            <p>
              I've interned at FPT Software, Dizconto, and RET, building backend
              systems, modern UI, integrating AWS services, and shipping
              full-stack applications to real users. can.
            </p>

            <p>
              In my free time, I enjoy watching football, training at the gym,
              and travelling around Europe.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-sm md:text-base font-semibold tracking-[0.16em] uppercase ">
              Education
            </p>
            <div className="flex flex-col">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  className="flex justify-between items-start py-6 border-b border-white/[0.1] last:border-0"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="flex flex-col gap-1">
                    <p className="text-lg md:text-xl font-semibold text-gray-100">
                      {edu.institution}
                    </p>
                    <p className="text-base text-gray-400 leading-relaxed">
                      {edu.degree}
                    </p>
                  </div>
                  <span className="text-sm text-gray-400 whitespace-nowrap ml-6 mt-1 tabular-nums">
                    {edu.years}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <p className="text-sm md:text-base font-semibold tracking-[0.16em] uppercase ">
            Core Skills
          </p>
          <div className="flex flex-wrap gap-3">
            {skills.map((s, i) => (
              <motion.span
                key={s}
                className="text-base md:text-lg text-gray-200 px-5 py-3 border border-white/30 rounded-full hover:border-white/50 hover:text-white hover:bg-white/[0.04] hover:scale-105 transition-all duration-200"
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
