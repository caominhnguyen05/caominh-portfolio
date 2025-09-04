"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { Education } from "../types";

const SectionWrapper = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => (
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
      institution: "TU Delft",
      degree: "BSc Computer Science & Engineering",
      years: "2022 - 2025 (Expected)",
    },
    {
      institution: "Vinschool Times City",
      degree: "High School Diploma",
      years: "2019 - 2022",
    },
  ];

  return (
    <SectionWrapper id="about">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
        <motion.div
          className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-[3px]">
            <div className="w-full h-full rounded-full bg-gray-900 p-[2px]">
              <Image
                src="/profile.jpg"
                alt="A profile picture of Cao Minh Nguyen"
                width={256}
                height={256}
                className="rounded-full object-cover shadow-lg"
              />
            </div>
          </div>
        </motion.div>

        <div className="text-center md:text-left text-lg text-gray-300 space-y-6">
          <p>
            I&apos;m Minh, from Vietnam, a third-year Computer Science student
            at Delft University of Technology with a strong foundation in
            software development, algorithms, and data structures. I have gained
            hands-on experience as a Software Engineer Intern at{" "}
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
            improved user experiences. These experiences strengthened my skills
            in backend development, cloud technologies, and full-stack
            engineering.
          </p>
          <p>
            I love to work in friendly, collaborative environments and am
            passionate about using technology to solve real-world problems. When
            I&apos;m not coding, I enjoy watching football, going to the gym and
            travelling around Europe to explore new cities and culture.
          </p>
        </div>
      </div>

      <div className="mt-20">
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
