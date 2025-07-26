import { Instagram } from "lucide-react";
import React from "react";

const HeroContent: React.FC = () => {
  return (
    <div className="space-y-3 md:space-y-4">
      {/* Large quote or tagline */}
      <div className="max-w-xl md:max-w-2xl">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-white leading-tight mb-2">
          Creating Visual
          <br />
          <span className="text-gray-300 font-light italic">Narratives</span>
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
  );
};

export default HeroContent;
