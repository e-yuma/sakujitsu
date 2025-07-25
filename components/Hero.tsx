import { Instagram } from "lucide-react";
import React from "react";

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
      <div className="relative z-10 w-full h-full flex flex-col justify-end items-start p-8">
        <a
          href="https://www.instagram.com/sakujitsu_/"
          target="_blank"
          className="text-xl md:text-3xl gap-2 flex items-center text-white hover:text-gray-200 transition-colors relative tracking-widest group"
          draggable="false"
        >
          <span className="relative">
            Instagram
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gray-200 transition-all duration-300 ease-out group-hover:w-full"></span>
          </span>
          <Instagram />
        </a>
      </div>
    </section>
  );
};

export default Hero;
