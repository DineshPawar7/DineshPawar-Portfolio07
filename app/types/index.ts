export interface Project {
  id: number;
  title: string;
  description: string;
  github?: string;
  live?: string;
  img: string | { src: string };
  alt?: string;
}

export interface Experience {
  title: string;
  company: string;
  description: string | string[];
  period: string;
  time: string;
}

export interface Education {
  title: string;
  institution: string;
  description: string;
  period: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface SkillCategory {
  [category: string]: Skill[];
}

export interface Testimonial {
  id: number;
  image: string;
  name?: string;
  role?: string;
}