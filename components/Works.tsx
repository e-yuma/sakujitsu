import React from "react";

interface Project {
  id: number;
  title: string;
  technologies: string[];
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    technologies: ["React", "Next.js", "Stripe"],
    image:
      "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Modern e-commerce platform with seamless checkout experience",
  },
  {
    id: 2,
    title: "Task Management App",
    technologies: ["Vue.js", "Firebase", "Tailwind"],
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Collaborative task management with real-time updates",
  },
  {
    id: 3,
    title: "Design System",
    technologies: ["React", "Storybook", "TypeScript"],
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Comprehensive design system and component library",
  },
  {
    id: 4,
    title: "Data Visualization",
    technologies: ["D3.js", "React", "Python"],
    image:
      "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Interactive data visualization dashboard",
  },
  {
    id: 5,
    title: "Mobile App",
    technologies: ["React Native", "Expo", "MongoDB"],
    image:
      "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Cross-platform mobile application with native performance",
  },
  {
    id: 6,
    title: "AI Chat Interface",
    technologies: ["React", "WebSocket", "OpenAI"],
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Intelligent chat interface with AI-powered responses",
  },
];

const Works: React.FC = () => {
  // Smooth container animation variants
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Smooth card animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="works" className="py-20 px-6 overflow-hidden h-full">
      <div className="flex flex-col md:flex-row-reverse items-center md:items-stretch">
        <div className="w-full md:w-1/2 py-6 md:py-0 px-6 flex flex-col justify-center">
          <h1 className="text-5xl mb-8">Concept</h1>
          <h2 className="text-2xl mb-4">それは、夢で見たはずの風景</h2>
          <p className="text-sm leading-relaxed">
            どこかの誰かが忘れていった、記憶の欠片。
            <br />
            無数のデータとしてデジタルに沈殿した、感情の残響。
            <br />
            <br />
            私たちは、昨日。
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            className="h-full object-cover"
            src="/assets/works.png"
            alt="works"
          />
        </div>
      </div>
    </section>
  );
};

export default Works;
