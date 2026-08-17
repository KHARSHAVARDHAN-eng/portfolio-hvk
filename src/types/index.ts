/**
 * Active stage state within the retro arcade interactive view.
 */
export type ArcadeStage = 
  | 'LANDING'
  | 'MENU'
  | 'ABOUT'
  | 'PROJECTS'
  | 'OPEN_SOURCE'
  | 'SKILLS'
  | 'EDUCATION'
  | 'ACHIEVEMENTS'
  | 'CONTACT';

/**
 * Data structure representing an architectural or workflow pipeline step.
 */
export interface PipelineStep {
  step: number;
  name: string;
  subtitle: string;
  description: string;
  tech: string[];
  details: string[];
}

/**
 * Technical project item schema displayed across portfolio showcase & interactive modals.
 */
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI/ML' | 'GraphRAG' | 'Computer Vision' | 'Audio AI' | 'Full Stack';
  featured: boolean;
  problem: string;
  solution: string;
  architecture: string;
  keyFeatures: string[];
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  metrics?: { label: string; value: string }[];
  pipelineSteps?: PipelineStep[];
}

export interface Skill {
  name: string;
  level?: number;
  categoryTag?: string;
  highlight?: string;
  projectsUsedIn?: string[];
  icon?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: Skill[];
}

export interface Contribution {
  title: string;
  repo: string;
  role: string;
  stars?: string;
  type: 'PR' | 'Maintainer' | 'Core Contributor' | 'Feature';
  description: string;
  tech: string[];
  link: string;
}

export interface Milestone {
  id: string;
  title: string;
  organization: string;
  period: string;
  type: 'internship' | 'hackathon' | 'open-source' | 'certification';
  location: string;
  description: string;
  highlights: string[];
  badgeText: string;
}

export interface PersonalInfo {
  name: string;
  handle: string;
  title: string;
  subtitle: string;
  location: string;
  status: string;
  bio: string;
  interests: string[];
  education: {
    degree: string;
    institution: string;
    period: string;
    grade: string;
    details: string;
  };
  socials: {
    github: string;
    linkedin: string;
    email: string;
    resume: string;
    twitter?: string;
  };
}
