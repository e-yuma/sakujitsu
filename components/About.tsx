import React from "react";
import Avatar from "./about/Avatar";
import ProfileSection from "./about/ProfileSection";
import SkillsGrid from "./about/SkillsGrid";
import StatsGrid from "./about/StatsGrid";
import PageNumber from "./PageNumber";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="h-full relative bg-gradient-to-br from-zinc-900 via-gray-900 to-black text-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-48 md:w-72 h-48 md:h-72 bg-gradient-to-br from-amber-500/10 to-orange-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-16 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-tr from-amber-400/5 to-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-48 md:w-64 h-48 md:h-64 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col p-4 md:p-8">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8 md:mb-16">
          <div>
            <div className="flex items-center mb-3 md:mb-4">
              <div className="w-8 md:w-16 h-px bg-amber-400/60 mr-4 md:mr-6"></div>
              <span className="text-xs md:text-sm tracking-[0.3em] md:tracking-[0.4em] text-white/60 font-light">
                PROFILE
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-display leading-none mb-2 md:mb-4">
              ABOUT
            </h1>
            <p className="text-base md:text-lg text-amber-200/80 tracking-wide font-light">
              Creative Frontend Engineer
            </p>
          </div>

          {/* Top right year */}
          <div className="text-right">
            <p className="text-3xl md:text-6xl font-black text-white/10 leading-none">
              2024
            </p>
            <p className="text-xs tracking-widest text-white/40 mt-1 md:mt-2">
              EST. 2019
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <ProfileSection />
            <StatsGrid />
          </div>

          {/* Right Column - Avatar & Skills */}
          <div className="lg:col-span-5 flex flex-col items-center justify-start pt-4 md:pt-8">
            <Avatar />
            <SkillsGrid />
          </div>
        </div>
      </div>

      <PageNumber pageNumber="03" position="bottom-right" />
    </section>
  );
};

export default About;
