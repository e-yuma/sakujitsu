import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className={`relative h-dvh flex items-center justify-center overflow-hidden`}
    >
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="\assets\hero.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Hero;
