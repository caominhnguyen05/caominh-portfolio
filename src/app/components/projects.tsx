"use client";
import Image from "next/image";
import { motion } from "framer-motion";
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
    el.scrollBy({ left: dir === "right" ? 640 : -640, behavior: "smooth" });
    setTimeout(updateScrollState, 400);
  };

  return (
    <motion.section
      id="projects"
      className="py-28 md:py-36 overflow-visible"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-12 md:mb-16">
        <div className="grid lg:grid-cols-[0.32fr_0.68fr] gap-8 lg:gap-16 items-end border-b border-white/[0.08] pb-10">
          <p className="text-sm md:text-base font-semibold tracking-[0.16em] uppercase">
            Projects
          </p>
          <div className="flex items-end justify-between gap-8">
            <h2 className="font-serif text-5xl md:text-7xl font-normal leading-[0.98] tracking-tight text-white">
              Built out of curiosity.
            </h2>

            <div className="hidden sm:flex items-center gap-2 shrink-0">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Scroll projects left"
                className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 ${
                  canScrollLeft
                    ? "border-white/70 text-white hover:bg-white/10 hover:border-white/50"
                    : "border-white/[0.16] text-white/35 cursor-not-allowed"
                }`}
              >
                <FiChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Scroll projects right"
                className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 ${
                  canScrollRight
                    ? "border-white/70 text-white hover:bg-white/10 hover:border-white/50"
                    : "border-white/[0.16] text-white/35 cursor-not-allowed"
                }`}
              >
                <FiChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        onScroll={updateScrollState}
        className="flex gap-6 overflow-x-auto overflow-y-visible scroll-smooth px-6 md:px-12 pb-10 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-[86vw] sm:w-[520px] lg:w-[620px] bg-white rounded-lg overflow-hidden flex flex-col group cursor-pointer snap-start"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{
              y: -8,
              boxShadow:
                "0 32px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)",
              transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
            }}
            style={{
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            }}
          >
            <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden flex-shrink-0">
              {project.imageUrl ? (
                <Image
                  src={
                    project.imageUrl.startsWith("/")
                      ? project.imageUrl
                      : `/${project.imageUrl}`
                  }
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 620px, (min-width: 640px) 520px, 86vw"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-sm font-semibold tracking-[0.16em] uppercase text-gray-400">
                    Screenshot coming soon
                  </span>
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/30 to-transparent" />
            </div>

            <div className="flex flex-col flex-1 p-7 md:p-9 gap-5">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-3xl md:text-4xl font-semibold text-gray-950 leading-[1.05] tracking-tight">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 flex-shrink-0 mt-1">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`${project.title} GitHub`}
                      className="w-10 h-10 rounded-full border border-gray-200 text-gray-500 hover:text-gray-950 hover:border-gray-400 transition-colors duration-200 flex items-center justify-center"
                    >
                      <FiGithub size={18} />
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`${project.title} live site`}
                      className="w-10 h-10 rounded-full border border-gray-200 text-gray-500 hover:text-gray-950 hover:border-gray-400 transition-colors duration-200 flex items-center justify-center"
                    >
                      <FiExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-base md:text-lg text-gray-600 leading-[1.7] font-normal flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm font-semibold text-gray-600 px-3.5 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-150 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        <div className="flex-shrink-0 w-6 md:w-12" />
      </div>

      <div className="flex justify-center gap-1.5 mt-6">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              const el = scrollRef.current;
              if (!el) return;
              el.scrollTo({ left: i * 640, behavior: "smooth" });
              setTimeout(updateScrollState, 400);
            }}
            aria-label={`Go to project ${i + 1}`}
            className="w-1.5 h-1.5 rounded-full bg-white/20 hover:bg-white/50 transition-colors duration-200"
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
