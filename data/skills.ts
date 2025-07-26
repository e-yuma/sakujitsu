import { Skill, Statistic } from '../types';

export const skills: Skill[] = [
  // Frontend
  { name: "JavaScript", category: "frontend", level: 5 },
  { name: "TypeScript", category: "frontend", level: 5 },
  { name: "React", category: "frontend", level: 5 },
  { name: "Next.js", category: "frontend", level: 4 },
  { name: "Vue.js", category: "frontend", level: 4 },
  { name: "Framer Motion", category: "frontend", level: 4 },
  
  // Backend
  { name: "Node.js", category: "backend", level: 4 },
  { name: "Python", category: "backend", level: 3 },
  { name: "GraphQL", category: "backend", level: 3 },
  { name: "MongoDB", category: "backend", level: 3 },
  { name: "PostgreSQL", category: "backend", level: 3 },
  
  // Tools
  { name: "Docker", category: "tools", level: 3 },
  { name: "AWS", category: "tools", level: 3 },
  { name: "Three.js", category: "tools", level: 2 },
  
  // Design
  { name: "Figma", category: "design", level: 4 },
  { name: "Adobe Creative Suite", category: "design", level: 3 },
];

export const statistics: Statistic[] = [
  {
    value: "5+",
    label: "YEARS EXP",
    description: "Years of professional experience",
  },
  {
    value: "50+",
    label: "PROJECTS",
    description: "Completed projects",
  },
  {
    value: "∞",
    label: "CREATIVITY",
    description: "Endless creative possibilities",
  },
];

export const learningSkills = ["WebGL", "AI/ML", "Rust", "Web3"]; 