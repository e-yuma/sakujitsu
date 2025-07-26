import React from "react";
import ConceptSection from "./works/ConceptSection";
import FeaturedProject from "./works/FeaturedProject";
import ProjectStats from "./works/ProjectStats";
import SideText from "./works/SideText";
import PageNumber from "./PageNumber";

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
              <h1 className="font-display text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-black tracking-display leading-none">
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
          {/* Left Side - Featured Project */}
          <FeaturedProject />

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 md:pl-8 lg:pl-12 flex flex-col justify-center">
            <ConceptSection />
            <ProjectStats />
          </div>
        </div>

        {/* Side text elements */}
        <SideText position="left" text="DIGITAL EXPERIENCES" />
        <SideText position="right" text="VISUAL STORYTELLING" />
      </div>

      <PageNumber pageNumber="02" position="bottom-right" />
    </section>
  );
};

export default Works;
