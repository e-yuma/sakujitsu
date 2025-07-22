import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="fixed inset-0 w-full h-screen flex items-center justify-center overflow-hidden z-0"
    >
      <img
        className="w-full h-full object-cover"
        src="/assets/hero.png"
        alt="hero"
      />
    </section>
  );
};

export default Hero;
