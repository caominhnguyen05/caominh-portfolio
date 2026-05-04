"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { experiences } from "../data/experiences";

const Experience: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <motion.section
      id="experience"
      className="py-28 md:py-36 px-6 md:px-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[0.32fr_0.68fr] gap-8 lg:gap-16 items-end mb-12 md:mb-16 border-b border-white/[0.08] pb-10">
          <p className="text-sm md:text-base font-semibold tracking-[0.16em] uppercase">
            Experience
          </p>
          <h2 className="font-serif text-5xl md:text-7xl font-normal leading-[0.98] tracking-tight text-white">
            From internships to shipped products.
          </h2>
        </div>

        <div className="flex flex-col">
          {experiences.map((exp, index) => {
            const isOpen = expanded === index;
            const isOtherOpen = expanded !== null && expanded !== index;

            return (
              <motion.div
                key={index}
                className="border-b border-white/[0.07] last:border-b-0 cursor-pointer group"
                animate={{ opacity: isOtherOpen ? 0.35 : 1 }}
                transition={{ duration: 0.25 }}
                onClick={() => setExpanded(isOpen ? null : index)}
              >
                <div className="grid md:grid-cols-[170px_1fr_auto] gap-5 md:gap-8 items-center py-7 md:py-8 select-none">
                  <span className="text-sm md:text-base text-gray-400 tabular-nums tracking-wide">
                    {exp.period}
                  </span>

                  <div className="flex flex-col gap-2">
                    <span
                      className={`text-2xl md:text-3xl font-semibold tracking-tight transition-colors duration-200 ${
                        isOpen
                          ? "text-white"
                          : "text-gray-300 group-hover:text-white"
                      }`}
                    >
                      {exp.company}
                    </span>
                    <span className="text-base md:text-lg text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                      {exp.role}
                    </span>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="w-10 h-10 rounded-full border border-white/[0.12] flex items-center justify-center text-gray-300 group-hover:border-white/30 group-hover:text-white transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M6 1v10M1 6h10"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </motion.div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-9 flex flex-col gap-6 md:pl-[202px]">
                        <ul className="flex flex-col gap-2.5">
                          {exp.description.map((point, i) => (
                            <motion.li
                              key={i}
                              className="flex gap-4 text-base md:text-lg text-gray-300 font-light leading-[1.75]"
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.25, delay: i * 0.07 }}
                            >
                              <span className="text-gray-500 flex-shrink-0 mt-1">
                                -
                              </span>
                              {point}
                            </motion.li>
                          ))}
                        </ul>

                        <motion.div
                          className="flex flex-wrap gap-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-sm text-gray-300 px-4 py-2 border border-white/[0.12] rounded-full cursor-default transition-all duration-200 hover:border-white/45 hover:text-white hover:bg-white/[0.04]"
                            >
                              {tag}
                            </span>
                          ))}
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
