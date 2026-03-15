"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import React, { useState, useRef } from "react";
import { projects } from "../data/projects";

const Projects: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 480 : -480, behavior: "smooth" });
    setTimeout(updateScrollState, 400);
  };

  return (
    <motion.section
      id="projects"
      className="py-24 overflow-visible"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 mb-16 flex items-end justify-between">
        <p className="text-l font-medium tracking-[0.12em] uppercas">
          Projects
        </p>

        {/* Arrow controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200
              ${
                canScrollLeft
                  ? "border-white/80 text-white hover:bg-white/10 hover:border-white/40"
                  : "border-white/[0.2] text-white/50 cursor-not-allowed"
              }`}
          >
            <FiChevronLeft size={16} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200
              ${
                canScrollRight
                  ? "border-white/80 text-white hover:bg-white/10 hover:border-white/40"
                  : "border-white/[0.2] text-white/50 cursor-not-allowed"
              }`}
          >
            <FiChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Scrollable track */}
      <div
        ref={scrollRef}
        onScroll={updateScrollState}
        className="flex gap-5 overflow-x-auto overflow-y-visible scroll-smooth px-6 md:px-12 pb-10"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-[400px] md:w-[460px] bg-white rounded-3xl overflow-hidden flex flex-col group cursor-pointer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{
              y: 6,
              boxShadow:
                "0 32px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)",
              transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
            }}
            style={{
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            }}
          >
            {/* Screenshot area */}
            <div className="relative w-full h-56 bg-gray-100 overflow-hidden flex-shrink-0">
              {project.imageUrl ? (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-103"
                />
              ) : (
                /* Placeholder when no image yet */
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-gray-400">
                    Screenshot coming soon
                  </span>
                </div>
              )}

              {/* Subtle gradient overlay at bottom of image */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/30 to-transparent" />
            </div>

            {/* Card body */}
            <div className="flex flex-col flex-1 p-7 gap-4">
              {/* Title + links */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-[18px] font-semibold text-gray-900 leading-snug tracking-tight">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3 flex-shrink-0 mt-0.5">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-gray-400 hover:text-gray-900 transition-colors duration-200"
                    >
                      <FiGithub size={17} />
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-gray-400 hover:text-gray-900 transition-colors duration-200"
                    >
                      <FiExternalLink size={17} />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-[14px] text-gray-500 leading-[1.75] font-light flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium text-gray-500 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-150 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Trailing spacer */}
        <div className="flex-shrink-0 w-6 md:w-12" />
      </div>

      {/* Scroll progress dots */}
      <div className="flex justify-center gap-1.5 mt-6">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              const el = scrollRef.current;
              if (!el) return;
              el.scrollTo({ left: i * 480, behavior: "smooth" });
              setTimeout(updateScrollState, 400);
            }}
            className="w-1.5 h-1.5 rounded-full bg-white/20 hover:bg-white/50 transition-colors duration-200"
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
