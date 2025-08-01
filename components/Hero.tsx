"use client";

import React from "react";
import Image from "next/image";
import { animated } from "@react-spring/web";
import { useSimpleDrag } from "@/hooks";
import HeroContent from "./hero/HeroContent";
import HeroHeader from "./hero/HeroHeader";
import HeroSideText from "./hero/HeroSideText";
import PageNumber from "./PageNumber";

const Hero: React.FC = () => {
  const { x, y, bind } = useSimpleDrag();

  return (
    <section
      id="hero"
      className="relative w-full flex flex-col justify-between overflow-hidden p-4 md:p-6"
      style={{ height: "100dvh" }}
      aria-label="Hero Section - Sakujitsu Portfolio Introduction"
    >
      <animated.div
        className="relative w-full h-full rounded-3xl md:rounded-4xl overflow-hidden cursor-grab active:cursor-grabbing"
        style={{ x, y }}
        {...bind()}
      >
        <Image
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/hero.png"
          alt="Sakujitsu Portfolio Hero Background"
          fill
          priority
          sizes="100vw"
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />

        {/* Magazine-style text overlay */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between p-4 md:p-6 pt-safe pb-safe">
          {/* Top section - Magazine title style */}
          <HeroHeader />

          {/* Middle section - Feature text */}
          <HeroSideText position="middle" text="VISUAL STORIES" />

          {/* Side text */}
          <HeroSideText position="left" text="PHOTOGRAPHY・DESIGN・ART" />

          {/* Bottom section - Multiple text elements */}
          <HeroContent />
        </div>

        {/* Page Number */}
        <PageNumber pageNumber="01" position="bottom-right" />
      </animated.div>
    </section>
  );
};

export default Hero;
