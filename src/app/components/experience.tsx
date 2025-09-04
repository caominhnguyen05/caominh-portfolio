"use client";
import { motion } from "framer-motion";
import React from "react";
import { Experience as ExperienceType } from "../types";

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id }) => (
  <motion.section
    id={id}
    className="min-h-screen py-20 px-6"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
  >
    <div className="container mx-auto max-w-4xl">{children}</div>
  </motion.section>
);

const Experience: React.FC = () => {
  const experiences: ExperienceType[] = [
    {
      role: "Software Engineer Intern",
      company: "FPT Software",
      period: "Jul 2025 - Sep 2025",
      description: [
        "Developed a cross-platform voice recording & analysis mobile application using Flutter and AWS backend services, designed for self-assessment of speech performance and supporting healthcare professionals at Sunstar to diagnose and monitor oral frailty in patients.",
        "Integrated Amazon Transcribe for real-time speech-to-text and Amazon Comprehend for sentiment/emotion analysis of transcribed text.",
        "Implemented secure user authentication and data management with Amazon Cognito.",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "RET",
      period: "Apr 2025 - Jun 2025",
      description: [
        "Worked with a team of five to develop a web-based prototype application that enables process managers to visualize business processes, their interdependencies, and associated metadata through a layered, graph-based interface.",
        "Designed and implemented frontend components using React.js with Vite, ensuring a responsive and user-friendly interface.",
        "Contributed to the backend development by building RESTful API endpoints with Java Spring Boot and connecting them to a PostgreSQL database.",
      ],
    },
    {
      role: "Teaching Assistant",
      company: "TU Delft",
      period: "Sep 2025 - Present",
      description: [
        "I am currently a Teaching Assistant for the CSE program second-year course Big Data Processing.",
        "Helped students have a better understanding of the course material by answering questions about the course theory and assignments.",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Dizconto",
      period: "May 2025 - Present",
      description: [
        "Build backend system of the company's ticket website with RESTful APIs and authentication, using NestJS and TypeScript.",
        "Improve the website’s UI/UX by adding new features, fixing bugs, and improving responsiveness for a better user experience.",
      ],
    },
  ];

  return (
    <SectionWrapper id="experience">
      <h2 className="bg-red text-4xl font-bold text-center mb-12 text-white">
        Work Experience
      </h2>
      <div className="relative border-l-2 border-gray-700 ml-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-10 ml-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full -left-3 ring-8 ring-gray-900"></span>
            <h3 className="flex items-center mb-1 text-xl font-semibold text-white">
              {exp.role} @ {exp.company}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
              {exp.period}
            </time>
            <ul className="list-disc ml-5 text-gray-300 space-y-1">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;
