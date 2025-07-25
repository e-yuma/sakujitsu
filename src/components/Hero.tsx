import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="fixed inset-0 w-full h-lvh flex items-center justify-center overflow-hidden z-0"
    >
      <img
        className="w-full h-full object-cover"
        src="/assets/hero.png"
        alt="hero"
      />
      <div className="absolute left-8 text-lg tracking-widest font-light rotate-[90deg] origin-bottom-left">
        Instagram
      </div>
      <div className="absolute bottom-8 left-8 text-5xl tracking-widest font-semibold">
        YOUTUBE
      </div>
    </section>
  );
};

export default Hero;
