import React from "react";
import PageNumber from "./PageNumber";

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
  return (
    <section
      id="works"
      className="h-full relative bg-black text-white overflow-hidden"
    >
      {/* Background geometric elements */}
      <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-gradient-to-tr from-gray-800/30 to-transparent rounded-full blur-2xl"></div>

      {/* Main Content Container */}
      <div className="relative z-10 h-full flex flex-col p-4 md:p-8">
        {/* Header Section - Magazine Style */}
        <div className="flex justify-between items-start mb-8 md:mb-12">
          <div className="flex items-end space-x-4 md:space-x-8">
            <div>
              <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-none">
                WORKS
              </h1>
              <p className="text-xs md:text-sm lg:text-base text-white/60 tracking-[0.2em] md:tracking-[0.3em] font-light mt-1 md:mt-2">
                SELECTED PROJECTS 2024
              </p>
            </div>
          </div>

          {/* Top right decorative text */}
          <div className="text-right text-white/40 hidden md:block">
            <p className="text-xs tracking-widest transform rotate-12 origin-bottom-right">
              CREATIVE
            </p>
            <p className="text-xs tracking-widest transform -rotate-6 origin-top-right mt-1">
              PORTFOLIO
            </p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col md:flex-row">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 relative mb-6 md:mb-0">
            <div className="relative h-64 md:h-full rounded-xl md:rounded-2xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="/assets/works.png"
                alt="works"
              />

              {/* Image overlay with typography */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                      Featured Work
                    </h3>
                    <p className="text-sm text-white/80 max-w-xs">
                      それは、夢で見たはずの風景
                    </p>
                  </div>
                  <div className="text-right hidden md:block">
                    <div className="w-12 h-px bg-white/40 mb-2"></div>
                    <p className="text-xs tracking-wider text-white/60">2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 md:pl-8 lg:pl-12 flex flex-col justify-center">
            {/* Concept Section */}
            <div className="mb-8 md:mb-12">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-6 md:w-8 h-px bg-gray-400 mr-3 md:mr-4"></div>
                <h2 className="text-lg md:text-xl tracking-[0.15em] md:tracking-[0.2em] font-light text-white/80">
                  CONCEPT
                </h2>
              </div>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 md:mb-6">
                それは、夢で見たはずの
                <br />
                <span className="text-gray-300 font-light italic">風景</span>
              </h3>

              <div className="space-y-3 md:space-y-4 text-white/70 leading-relaxed text-sm md:text-base">
                <p>どこかの誰かが忘れていった、記憶の欠片。</p>
                <p>無数のデータとしてデジタルに沈殿した、感情の残響。</p>
                <p className="text-white font-medium">私たちは、昨日。</p>
              </div>
            </div>

            {/* Statistics or additional info */}
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              <div>
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-1">
                  24+
                </h4>
                <p className="text-xs md:text-sm text-white/60 tracking-wide">
                  PROJECTS COMPLETED
                </p>
              </div>
              <div>
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-1">
                  2024
                </h4>
                <p className="text-xs md:text-sm text-white/60 tracking-wide">
                  YEAR ACTIVE
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Side text - hidden on mobile */}
        <div className="absolute top-1/3 left-4 md:left-8 transform -rotate-90 origin-left hidden md:block">
          <p className="text-xs text-white/20 tracking-[0.5em]">
            DIGITAL EXPERIENCES
          </p>
        </div>

        <div className="absolute bottom-1/3 right-4 md:right-8 transform rotate-90 origin-right hidden md:block">
          <p className="text-xs text-white/20 tracking-[0.5em]">
            VISUAL STORYTELLING
          </p>
        </div>
      </div>

      <PageNumber pageNumber="02" position="bottom-right" />
    </section>
  );
};

export default Works;
