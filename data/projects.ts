import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    technologies: ["React", "Next.js", "Stripe"],
    image:
      "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Modern e-commerce platform with seamless checkout experience",
    category: "web",
    year: 2024,
    status: "completed",
  },
  {
    id: 2,
    title: "Task Management App",
    technologies: ["Vue.js", "Firebase", "Tailwind"],
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Collaborative task management with real-time updates",
    category: "web",
    year: 2024,
    status: "completed",
  },
  {
    id: 3,
    title: "Design System",
    technologies: ["React", "Storybook", "TypeScript"],
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Comprehensive design system and component library",
    category: "tools",
    year: 2023,
    status: "completed",
  },
  {
    id: 4,
    title: "Data Visualization",
    technologies: ["D3.js", "React", "Python"],
    image:
      "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Interactive data visualization dashboard",
    category: "data",
    year: 2024,
    status: "in-progress",
  },
  {
    id: 5,
    title: "Mobile App",
    technologies: ["React Native", "Expo", "MongoDB"],
    image:
      "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Cross-platform mobile application with native performance",
    category: "mobile",
    year: 2024,
    status: "completed",
  },
  {
    id: 6,
    title: "AI Chat Interface",
    technologies: ["React", "WebSocket", "OpenAI"],
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Intelligent chat interface with AI-powered responses",
    category: "ai",
    year: 2024,
    status: "concept",
  },
];

export const featuredProject: Project = projects[0]; 