"use client";
import { motion } from "framer-motion";
import React from "react";
import { Experience as ExperienceType } from "../types";

const Experience: React.FC = () => {
  const experiences: ExperienceType[] = [
    {
      role: "Teaching Assistant",
      company: "TU Delft",
      period: "Sep 2025 – Nov 2025",
      type: "Academic",
      tags: ["Apache Spark", "Apache Flink", "Functional Programming"],
      description: [
        "TA for the second-year Big Data Processing (CSE2520) course in the Bachelor CSE program.",
        "Supported students with assignments and questions on functional programming, Unix command line, batch and stream processing with Apache Spark and Flink.",
        "Graded exams and delivered constructive feedback to students.",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "FPT Software",
      period: "Jul 2025 – Sep 2025",
      type: "Internship",
      tags: ["Flutter", "AWS", "Amazon Transcribe", "Cognito"],
      description: [
        "Built a cross-platform voice recording & analysis app in Flutter for oral frailty diagnosis at Sunstar.",
        "Integrated Amazon Transcribe for real-time STT and Comprehend for sentiment analysis.",
        "Implemented secure auth and data management with Amazon Cognito.",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Dizconto",
      period: "May 2025 – Sep 2025",
      type: "Internship",
      tags: ["NestJS", "TypeScript", "REST APIs"],
      description: [
        "Built the backend of a ticket platform with RESTful APIs and auth using NestJS and TypeScript.",
        "Improved UI/UX with new features, bug fixes, and responsiveness improvements.",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "RET",
      period: "Apr 2025 – Jun 2025",
      type: "Internship",
      tags: ["React", "Java Spring Boot", "PostgreSQL"],
      description: [
        "Built a graph-based web app for visualising business process interdependencies with a team of five.",
        "Designed and implemented React + Vite frontend components.",
        "Built RESTful API endpoints with Java Spring Boot connected to PostgreSQL.",
      ],
    },
  ];

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
        <p className="text-l font-medium tracking-[0.12em] uppercase  mb-14">
          Experience
        </p>

        <div className="divide-y divide-white/[0.1]">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="grid md:grid-cols-[140px_1fr] gap-8 py-7"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              {/* Left — meta */}
              <div className="flex flex-col gap-1.5 pt-0.5">
                <span className="text-[14px] font-medium text-gray-100">
                  {exp.company}
                </span>
                <span className="text-xs text-gray-400 leading-relaxed">
                  {exp.period}
                </span>
              </div>

              {/* Right — content */}
              <div className="flex flex-col gap-3">
                <h3 className="text-[15px] font-medium text-gray-200">
                  {exp.role}
                </h3>
                <ul className="space-y-1.5">
                  {exp.description.map((point, i) => (
                    <li
                      key={i}
                      className="text-[14px] text-gray-300 font-light leading-[1.75] flex gap-2.5"
                    >
                      <span className="text-gray-300 mt-px flex-shrink-0">
                        —
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-gray-300 px-2.5 py-1 border border-white/[0.15] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
