import { Instagram } from "lucide-react";
import React from "react";
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
        <div className="flex justify-between items-start">
          <div className="space-y-1 md:space-y-2">
            <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-black text-white tracking-tighter leading-none">
              SAKUJITSU
            </h1>
            <p className="text-xs md:text-sm lg:text-base text-white/80 tracking-widest font-light">
              CREATIVE PORTFOLIO
            </p>
          </div>

          {/* Date/Issue style element */}
          <div className="text-right text-white/60">
            <p className="text-xs tracking-widest">2024</p>
            <p className="text-xs tracking-widest">ISSUE #01</p>
          </div>
        </div>

        {/* Middle section - Feature text */}
        <div className="absolute top-1/3 right-4 md:right-8 transform rotate-90 origin-top-right">
          <p className="text-xs text-white/40 tracking-[0.3em] md:tracking-[0.5em] font-light">
            VISUAL STORIES
          </p>
        </div>

        {/* Side text */}
        <div className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 -rotate-90 origin-left">
          <p className="text-xs text-white/30 tracking-[0.2em] md:tracking-[0.3em]">
            PHOTOGRAPHY・DESIGN・ART
          </p>
        </div>

        {/* Bottom section - Multiple text elements */}
        <div className="space-y-3 md:space-y-4">
          {/* Large quote or tagline */}
          <div className="max-w-xl md:max-w-2xl">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-white leading-tight mb-2">
              Creating Visual
              <br />
              <span className="text-gray-300 font-light italic">
                Narratives
              </span>
            </h2>
            <p className="text-sm lg:text-base text-white/70 leading-relaxed max-w-xs md:max-w-md">
              探求し続ける視覚的表現の可能性。一瞬一瞬を切り取り、物語を紡ぐ。
            </p>
          </div>

          {/* Bottom row with Instagram */}
          <div className="flex justify-start items-end">
            <a
              href="https://www.instagram.com/sakujitsu_/"
              target="_blank"
              className="text-base md:text-lg lg:text-xl gap-2 flex items-center text-white hover:text-gray-200 transition-colors relative tracking-widest group"
              draggable="false"
            >
              <span className="relative">
                Instagram
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gray-200 transition-all duration-300 ease-out group-hover:w-full"></span>
              </span>
              <Instagram className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Page Number */}
      <PageNumber pageNumber="01" position="bottom-right" />
    </section>
  );
};

export default Hero;
