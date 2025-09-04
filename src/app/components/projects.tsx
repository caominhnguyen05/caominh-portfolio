"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import React from "react";
import { Project } from "../types";

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
    <div className="container mx-auto max-w-6xl">{children}</div>
  </motion.section>
);

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
}) => (
  <motion.div
    className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 flex flex-col justify-between h-full"
    whileHover={{ y: -5, boxShadow: "0px 10px 30px -15px #000000" }}
    transition={{ duration: 0.3 }}
  >
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <div className="flex space-x-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FiGithub size={20} />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FiExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
    </div>
    <div className="flex flex-wrap gap-2 mt-auto">
      {tags.map((tag) => (
        <span
          key={tag}
          className="bg-blue-900/50 text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "1. Splitty - Group Expense Management",
      description:
        "Collaborated with five students to develop a Java-based desktop application that streamlines group expense splitting after events. The app calculates individual balances, determines who owes whom, and minimizes the number of payments needed.",
      tags: [
        "Spring Boot",
        "Java",
        "REST APIs",
        "Database Design",
        "GitLab",
        "JavaFX",
      ],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "2. CineBrowse - Movie Browser Web App",
      description:
        "A movie browser web app using React.js and the OMDb API, enabling users to search for keywords in movie titles and get dynamically changing results.",
      tags: ["React.js", "UI Design", "JavaScript", "CSS", "External API"],
      githubUrl: "https://github.com/caominhnguyen05/cinebrowse_movie_app",
      liveUrl: "#",
    },
  ];

  return (
    <SectionWrapper id="projects">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Personal Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
