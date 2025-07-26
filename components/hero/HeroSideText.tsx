import React from "react";

interface HeroSideTextProps {
  position: "middle" | "left";
  text: string;
}

const HeroSideText: React.FC<HeroSideTextProps> = ({ position, text }) => {
  const positions = {
    middle:
      "absolute top-1/3 right-4 md:right-8 transform rotate-90 origin-top-right",
    left: "absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 -rotate-90 origin-left",
  };

  const textStyles = {
    middle:
      "text-xs text-white/40 tracking-[0.3em] md:tracking-[0.5em] font-light",
    left: "text-xs text-white/30 tracking-[0.2em] md:tracking-[0.3em]",
  };

  return (
    <div className={`${positions[position]} hidden md:block`}>
      <p className={textStyles[position]}>{text}</p>
    </div>
  );
};

export default HeroSideText;
