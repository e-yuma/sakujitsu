import React from "react";
import HeroContent from "./hero/HeroContent";
import HeroHeader from "./hero/HeroHeader";
import HeroSideText from "./hero/HeroSideText";
import PageNumber from "./PageNumber";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-full flex flex-col justify-between overflow-hidden"
    >
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/hero.png"
        alt="hero"
      />

      {/* Magazine-style text overlay */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between p-4 md:p-8">
        {/* Top section - Magazine title style */}
        <HeroHeader />

        {/* Middle section - Feature text */}
        <HeroSideText position="middle" text="VISUAL STORIES" />

        {/* Side text */}
        <HeroSideText position="left" text="PHOTOGRAPHY・DESIGN・ART" />

        {/* Bottom section - Multiple text elements */}
        <HeroContent />
      </div>

      {/* Page Number */}
      <PageNumber pageNumber="01" position="bottom-right" />
    </section>
  );
};

export default Hero;
