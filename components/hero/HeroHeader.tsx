import React from "react";

const HeroHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-start">
      <div className="space-y-1">
        <h1 className="font-display text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white tracking-display leading-none">
          SAKUJITSU
        </h1>
        <p className="font-sans text-xs md:text-sm text-white/80 tracking-widest font-light">
          CREATIVE PORTFOLIO
        </p>
      </div>

      {/* Date/Issue style element */}
      <div className="text-right text-white/60">
        <p className="text-xs tracking-widest">2024</p>
        <p className="text-xs tracking-widest">#01</p>
      </div>
    </div>
  );
};

export default HeroHeader;
