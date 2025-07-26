// Music types
export interface Track {
  id: number;
  title: string;
  artist: string;
  youtubeUrl: string;
  thumbnail: string;
  description: string;
  genre: string;
  duration: string;
}

// Works types
export interface Project {
  id: number;
  title: string;
  technologies: string[];
  image: string;
  description: string;
  category?: string;
  year?: number;
  status?: 'completed' | 'in-progress' | 'concept';
}

// About types
export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'design' | 'other';
  level: 1 | 2 | 3 | 4 | 5;
}

export interface Statistic {
  value: string;
  label: string;
  description?: string;
}

// Animation types
export interface AnimationConfig {
  duration: number;
  repeat: number;
  ease: string;
  delay?: number;
}

export interface MotionVariants {
  initial: Record<string, any>;
  animate: Record<string, any>;
  exit?: Record<string, any>;
  transition?: Record<string, any>;
}

// Common UI types
export interface PageSection {
  id: string;
  title: string;
  number: string;
  component: React.ComponentType;
}

// Navigation types
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  external?: boolean;
} 