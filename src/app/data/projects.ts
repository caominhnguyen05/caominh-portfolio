import { Project } from "../types";

export const projects: Project[] = [
  {
    title: "CS Revision Platform",
    description:
      "As a Computer Science tutor, I made this website for my students to easily find and navigate between different revision materials for their CS exams, including past papers, revision notes, books and syllabuses. They can create an account to track their past papers completion progress, including to-do list and completed papers list.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "OAuth",
      "Vercel",
    ],
    githubUrl: "https://github.com/caominhnguyen05/cs-revision-web",
    liveUrl: "https://cs-revision.vercel.app/",
    imageUrl: "projects/cs-revision.png",
  },
  {
    title: "Multi-Domain Support Triage Agent",
    description:
      "A terminal-based, multi-domain support triage agent built for the HackerRank Orchestrate hackathon. Uses RAG (embeddings + vector search) and OpenAI GPT-4o-mini reasoning to classify user issues and intelligently escalate tickets.",
    tags: ["RAG", "ChromaDB", "OpenAI LLM", "Python", "IF-TDF"],
    githubUrl:
      "https://github.com/caominhnguyen05/support-agent-hackerrank-orchestrate",
    imageUrl: "projects/support-agent.png",
  },
  {
    title: "Personal Portfolio",
    description:
      "You are looking at it right now! Designed with a minimalist, modern aesthetic and built with a focus on responsiveness and smooth user interaction using Next.js, Tailwind CSS, and Framer Motion.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    githubUrl: "https://github.com/caominhnguyen05/caominh-portfolio",
    liveUrl: "https://caominhnguyen.vercel.app",
    imageUrl: "/projects/portfolio.png",
  },
  {
    title: "Bill-Splitting Application",
    description:
      "Collaborated with five students to develop a Java-based desktop application that streamlines group expense splitting after events. The app calculates individual balances, determines who owes whom, and minimises the number of payments needed.",
    tags: [
      "Spring Boot",
      "Java",
      "REST APIs",
      "Database Design",
      "GitLab",
      "JavaFX",
    ],
    githubUrl: "https://github.com/caominhnguyen05/splitty_manage_expenses",
    imageUrl: "/projects/splitty.png",
  },
  {
    title: "CineBrowse",
    description:
      "A movie browser web app using React.js and the OMDb API, enabling users to search for keywords in movie titles and get dynamically updating results.",
    tags: ["React.js", "JavaScript", "CSS", "OMDb API"],
    githubUrl: "https://github.com/caominhnguyen05/cinebrowse_movie_app",
  },
];
