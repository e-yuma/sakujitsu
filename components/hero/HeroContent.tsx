import { Instagram } from "lucide-react";
import React from "react";

const HeroContent: React.FC = () => {
  return (
    <div className="space-y-2 md:space-y-3 -mt-8 md:-mt-12 lg:-mt-16">
      {/* Large quote or tagline */}
      <div className="max-w-lg md:max-w-xl">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight mb-3 md:mb-4">
          Creating Visual
          <br />
          <span className="text-gray-300 font-light italic">Narratives</span>
        </h2>
        <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-xs md:max-w-sm mb-4 md:mb-6">
          探求し続ける視覚的表現の可能性。一瞬一瞬を切り取り、物語を紡ぐ。
        </p>
      </div>

      {/* Bottom row with Instagram */}
      <div className="flex justify-start items-end mt-2 md:mt-4 mb-4 md:mb-6">
        <a
          href="https://www.instagram.com/sakujitsu_/"
          target="_blank"
          className="text-sm md:text-base gap-2 flex items-center text-white hover:text-gray-200 transition-colors relative tracking-widest group"
          draggable="false"
        >
          <span className="relative">
            Instagram
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gray-200 transition-all duration-300 ease-out group-hover:w-full"></span>
          </span>
          <Instagram className="w-4 h-4 md:w-5 md:h-5" />
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
