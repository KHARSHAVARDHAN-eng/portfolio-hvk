/**
 * Active stage state within the retro arcade interactive view.
 * Controls which virtual cabinet room or showcase view is currently active.
 */
export type ArcadeStage = 
  | 'LANDING'     // Opening retro boot splash screen
  | 'MENU'        // Main interactive hub/selector
  | 'ABOUT'       // Developer profile and background overview
  | 'PROJECTS'    // Interactive showcase of technical projects
  | 'OPEN_SOURCE' // Open-source contributions and pull requests
  | 'SKILLS'      // Tech stack matrix and domain expertise
  | 'EDUCATION'   // Academic background and credentials
  | 'ACHIEVEMENTS' // Hackathons, internships, and milestones
  | 'CONTACT';    // Communication channels and contact form

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

/**
 * Individual skill representation containing proficiency and usage details.
 */
export interface Skill {
  name: string;
  level?: number;
  categoryTag?: string;
  highlight?: string;
  projectsUsedIn?: string[];
  icon?: string;
}

/**
 * Grouped skill category containing a list of related technical competencies.
 */
export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: Skill[];
}

/**
 * Open-source contribution or community project pull request item.
 */
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

/**
 * Career milestone, experience highlight, or hackathon achievement entry.
 */
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

/**
 * Developer personal profile data including education and contact handles.
 */
export interface PersonalInfo {
  name: string;
  handle: string;
  title: string;
  subtitle: string;
  location: string;
  status: string;
  bio: string;
  interests: string[];
  /** Academic credentials and background */
  education: {
    degree: string;
    institution: string;
    period: string;
    grade: string;
    details: string;
  };
  /** External profile links and contact coordinates */
  socials: {
    github: string;
    linkedin: string;
    email: string;
    resume: string;
    twitter?: string;
  };
}
