"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import React, { useState } from "react";
import { projects } from "../data/projects";

const Projects: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <motion.section
      id="projects"
      className="py-24 px-6 md:px-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-l font-medium tracking-[0.12em] uppercase  mb-14">
          Projects
        </p>

        <div className="flex flex-col">
          {projects.map((project, index) => {
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
                {/* Collapsed row */}
                <div className="grid grid-cols-[1fr_auto] gap-6 items-center py-6 select-none">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] text-gray-400 tabular-nums font-medium tracking-wider">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-[15px] font-medium transition-colors duration-200 ${
                          isOpen
                            ? "text-white"
                            : "text-gray-300 group-hover:text-white"
                        }`}
                      >
                        {project.title}
                      </span>
                    </div>

                    {/* Tags preview — visible when collapsed */}
                    <AnimatePresence initial={false}>
                      {!isOpen && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex flex-wrap gap-1.5 mt-1.5 ml-7"
                        >
                          {project.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] text-gray-400 px-2.5 py-1 border border-white/[0.15] rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 3 && (
                            <span className="text-[11px] text-gray-400 px-2.5 py-1">
                              +{project.tags.length - 3} more
                            </span>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Right — icons + chevron */}
                  <div className="flex items-center gap-4">
                    {/* GitHub & Live — stop propagation so clicks don't toggle accordion */}
                    <div
                      className="flex items-center gap-3"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          <FiGithub size={16} />
                        </a>
                      )}
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          <FiExternalLink size={16} />
                        </a>
                      )}
                    </div>

                    {/* Chevron */}
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="w-5 h-5 flex items-center justify-center text-gray-400 group-hover:text-gray-400 transition-colors"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M6 1v10M1 6h10"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </motion.div>
                  </div>
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
                      <div className="pb-7 flex flex-col gap-5 ml-7">
                        {/* Description */}
                        <motion.p
                          className="text-[14px] text-gray-400 font-light leading-[1.8]"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          {project.description}
                        </motion.p>

                        {/* All tags */}
                        <motion.div
                          className="flex flex-wrap gap-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.15 }}
                        >
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] text-gray-400 px-3 py-1.5 border border-white/[0.15] rounded-full
                                transition-all duration-200 hover:border-white/60 hover:text-white hover:scale-105 cursor-default"
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

export default Projects;
