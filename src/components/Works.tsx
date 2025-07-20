import { motion } from "framer-motion";
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
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#E8D5C4] to-[#D4B896] rounded-full blur-lg opacity-30"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div className="relative w-16 h-16 bg-gradient-to-r from-[#E8D5C4] to-[#D4B896] rounded-full flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 border-2 border-white rounded-full border-t-transparent"
                />
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Selected Works
          </h2>
          <p className="text-lg text-[#C4A484] max-w-2xl mx-auto">
            A showcase of innovative projects that blend creativity with
            cutting-edge technology
          </p>
        </motion.div>

        {/* Grid Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 border border-[#F0EBE3]"
              variants={cardVariants}
              whileHover={{
                y: -15,
                scale: 1.02,
                transition: {
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                },
              }}
              style={{
                transformOrigin: "center center",
              }}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: 1,
                    transition: {
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  }}
                />
              </div>

              <motion.div
                className="absolute inset-0 bg-[#C4A484]/95 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0, y: 20 }}
                whileHover={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                }}
              >
                <div className="text-center text-white p-6">
                  <motion.h3
                    className="text-2xl font-bold mb-3"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.1,
                        duration: 0.4,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      },
                    }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="text-sm mb-4 opacity-90"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{
                      y: 0,
                      opacity: 0.9,
                      transition: {
                        delay: 0.2,
                        duration: 0.4,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      },
                    }}
                  >
                    {project.description}
                  </motion.p>
                  <motion.div
                    className="flex flex-wrap justify-center gap-2"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.3,
                        duration: 0.4,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      },
                    }}
                  >
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[#FAF8F5] text-[#C4A484] rounded-lg text-sm font-medium border border-[#F0EBE3]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 2 && (
                    <span className="px-2 py-1 text-[#C4A484] text-sm">
                      +{project.technologies.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Works;
