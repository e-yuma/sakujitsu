"use client";

import React from "react";
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import HeroContent from "./hero/HeroContent";
import HeroHeader from "./hero/HeroHeader";
import HeroSideText from "./hero/HeroSideText";
import PageNumber from "./PageNumber";

const Hero: React.FC = () => {
  const [{ x, y }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    config: { tension: 300, friction: 30 },
  }));

  const bind = useDrag(
    ({ active, movement: [mx, my], last }) => {
      if (active) {
        // ドラッグ中は追従
        api.start({
          x: mx,
          y: my,
          immediate: true,
        });
      } else if (last) {
        // ドラッグ終了時は元の位置に戻る
        api.start({
          x: 0,
          y: 0,
          config: { tension: 300, friction: 30 },
        });
      }
    },
    {
      bounds: { left: -100, right: 100, top: -100, bottom: 100 },
      rubberband: true,
    }
  );

  return (
    <section
      id="hero"
      className="relative w-full flex flex-col justify-between overflow-hidden p-4 md:p-6"
      style={{ height: "100dvh" }}
    >
      <animated.div
        className="relative w-full h-full rounded-3xl md:rounded-4xl overflow-hidden cursor-grab active:cursor-grabbing"
        style={{ x, y }}
        {...bind()}
      >
        <Image
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/hero.png"
          alt="hero"
          fill
          priority
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
