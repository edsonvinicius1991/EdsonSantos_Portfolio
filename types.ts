export type Language = 'pt' | 'en';

export interface Translation {
  nav: {
    about: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    role: string;
    greeting: string;
    description: string;
    ctaProject: string;
    ctaContact: string;
  };
  about: {
    title: string;
    bio: string;
    educationTitle: string;
    education: EducationItem[];
  };
  skills: {
    title: string;
    categories: {
      data: string;
      dev: string;
      automation: string;
      qa: string;
    };
  };
  experience: {
    title: string;
    items: ExperienceItem[];
  };
  projects: {
    title: string;
    viewCode: string;
    viewDemo: string;
    items: ProjectItem[];
  };
  contact: {
    title: string;
    text: string;
    email: string;
    linkedin: string;
    github: string;
    whatsapp: string;
    copyright: string;
    backToTop: string;
  };
}

export interface EducationItem {
  degree: string;
  institution: string;
  year?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
  tech: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  repoUrl: string;
  demoUrl?: string;
  image?: string;
  gallery?: string[];
  longDescription?: string;
  category: 'dev' | 'data' | 'qa';
}

export interface SkillMetric {
  subject: string;
  A: number; 
  fullMark: number;
}