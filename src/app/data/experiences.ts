import { Experience } from "../types";

export const experiences: Experience[] = [
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
