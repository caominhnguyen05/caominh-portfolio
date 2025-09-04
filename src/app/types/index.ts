export interface Education {
  institution: string;
  degree: string;
  years: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}
