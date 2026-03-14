"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Experience as ExperienceType } from "../types";
import { experiences } from "../data/experiences";

const Experience: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <motion.section
      id="experience"
      className="py-24 px-6 md:px-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-l font-medium tracking-[0.12em] uppercase mb-14">
          Experience
        </p>

        <div className="flex flex-col">
          {experiences.map((exp, index) => {
            const isOpen = expanded === index;
            const isOtherOpen = expanded !== null && expanded !== index;

            return (
              <motion.div
                key={index}
                className={`border-b border-white/[0.07] last:border-b-0 cursor-pointer group`}
                animate={{ opacity: isOtherOpen ? 0.35 : 1 }}
                transition={{ duration: 0.25 }}
                onClick={() => setExpanded(isOpen ? null : index)}
              >
                {/* Collapsed row — always visible */}
                <div className="grid md:grid-cols-[140px_1fr_auto] gap-6 items-center py-6 select-none">
                  {/* Period */}
                  <span className="text-xs text-gray-400 tabular-nums tracking-wide">
                    {exp.period}
                  </span>

                  {/* Company + role */}
                  <div className="flex flex-col gap-1">
                    <span
                      className={`text-[15px] font-medium transition-colors duration-200 ${
                        isOpen
                          ? "text-white"
                          : "text-gray-300 group-hover:text-white"
                      }`}
                    >
                      {exp.company}
                    </span>
                    <span className="text-[13px] text-gray-400 group-hover:text-gray-400 transition-colors duration-200">
                      {exp.role}
                    </span>
                  </div>

                  {/* Chevron */}
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="w-5 h-5 flex items-center justify-center text-gray-400 group-hover:text-gray-400 transition-colors"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M6 1v10M1 6h10"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </motion.div>
                </div>

                {/* Expanded content */}
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
                      <div className="pb-7 flex flex-col gap-5 md:pl-[164px]">
                        {/* Description bullets */}
                        <ul className="flex flex-col gap-2.5">
                          {exp.description.map((point, i) => (
                            <motion.li
                              key={i}
                              className="flex gap-3 text-[14px] text-gray-300 font-light leading-[1.75]"
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.25, delay: i * 0.07 }}
                            >
                              <span className="text-gray-300 flex-shrink-0 mt-px">
                                —
                              </span>
                              {point}
                            </motion.li>
                          ))}
                        </ul>

                        {/* Tags */}
                        <motion.div
                          className="flex flex-wrap gap-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] text-gray-400 px-3 py-1.5 border border-white/[0.08] rounded-full
                                cursor-default transition-all duration-200
                                hover:border-white/60 hover:text-white hover:scale-105"
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
