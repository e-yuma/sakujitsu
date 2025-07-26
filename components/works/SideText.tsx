import React from "react";

interface SideTextProps {
  position: "left" | "right";
  text: string;
  className?: string;
}

const SideText: React.FC<SideTextProps> = ({
  position,
  text,
  className = "",
}) => {
  const baseClasses =
    "absolute text-xs text-white/20 tracking-[0.5em] hidden md:block";

  const positionClasses = {
    left: "top-1/3 left-4 md:left-8 transform -rotate-90 origin-left",
    right: "bottom-1/3 right-4 md:right-8 transform rotate-90 origin-right",
  };

  return (
    <div className={`${baseClasses} ${positionClasses[position]} ${className}`}>
      <p>{text}</p>
    </div>
  );
};

export default SideText;
