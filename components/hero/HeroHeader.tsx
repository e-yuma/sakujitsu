import React from "react";

const HeroHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-start">
      <div className="space-y-1 md:space-y-2">
        <h1 className="font-display text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-black text-white tracking-display leading-none">
          SAKUJITSU
        </h1>
        <p className="font-sans text-xs md:text-sm lg:text-base text-white/80 tracking-widest font-light">
          CREATIVE PORTFOLIO
        </p>
      </div>

      {/* Date/Issue style element */}
      <div className="text-right text-white/60">
        <p className="text-xs tracking-widest">2024</p>
        <p className="text-xs tracking-widest">ISSUE #01</p>
      </div>
    </div>
  );
};

export default HeroHeader;
