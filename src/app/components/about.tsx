"use client";

import { motion } from "framer-motion";
import React from "react";
import { Education } from "../types";

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

const About: React.FC = () => {
  const education: Education[] = [
    {
      institution: "Delft University of Technology",
      degree: "BSc Computer Science & Engineering",
      years: "2023 - 2026 (Expected)",
    },
    {
      institution: "Vinschool Times City - Hanoi, Vietnam",
      degree: "Cambridge International AS and A Levels program",
      years: "2019 - 2022",
    },
  ];

  return (
    <SectionWrapper id="about">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        About Me
      </h2>
      <div className="text-center text-lg text-gray-300 space-y-6">
        <p>
          I&apos;m Minh, from Vietnam, a third-year Computer Science student at
          Delft University of Technology with a strong foundation in software
          development, algorithms, and data structures. I have gained hands-on
          experience as a Software Engineer Intern at{" "}
          <a
            href="https://www.ret.nl/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            RET
          </a>{" "}
          and{" "}
          <a
            href="https://fptsoftware.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            FPT Software
          </a>
          , where I developed robust backend systems, integrated backend with
          AWS cloud technologies, and worked on collaborative projects that
          improved user experiences. These experiences strengthened my skills in
          backend development, cloud technologies, and full-stack engineering.
        </p>
        <p>
          I love to work in friendly, collaborative environments and am
          passionate about using technology to solve real-world problems. When
          I&apos;m not coding, I enjoy watching football, going to the gym and
          travelling around Europe to explore new cities and culture.
        </p>
      </div>

      <div className="mt-16">
        <h3 className="text-3xl font-bold text-center mb-8 text-white">
          Education
        </h3>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-900/50 p-6 rounded-lg border border-gray-800"
            >
              <div className="flex justify-between items-center">
                <h4 className="text-xl font-semibold text-white">
                  {edu.institution}
                </h4>
                <p className="text-gray-400">{edu.years}</p>
              </div>
              <p className="text-gray-300 mt-1">{edu.degree}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
