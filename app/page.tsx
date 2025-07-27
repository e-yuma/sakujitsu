"use client";

import { animated } from "@react-spring/web";
import { useRef, useEffect } from "react";
import { useSwipeNavigation, useWindowSize } from "@/hooks";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import About from "@/components/About";
import Music from "@/components/Music";

const sections = [
  { id: "hero", component: Hero, name: "Hero" },
  { id: "works", component: Works, name: "Works" },
  { id: "about", component: About, name: "About" },
  { id: "music", component: Music, name: "Music" },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { windowWidth, windowHeight } = useWindowSize();

  const { x, currentSection, moveToSection, bind } = useSwipeNavigation({
    sectionsCount: sections.length,
    windowWidth,
    windowHeight,
  });

  // 縦スクロールで移動
  useEffect(() => {
    if (windowWidth === 0) return;

    let wheelTimeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 10) {
        e.preventDefault();

        clearTimeout(wheelTimeout);
        wheelTimeout = setTimeout(() => {
          if (e.deltaY > 0) {
            moveToSection(currentSection + 1);
          } else if (e.deltaY < 0) {
            moveToSection(currentSection - 1);
          }
        }, 50);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(wheelTimeout);
    };
  }, [currentSection, moveToSection, windowWidth]);

  return (
    <main
      className="overflow-hidden relative bg-black"
      style={{
        height: `${windowHeight}px`,
        minHeight: "100dvh",
      }}
      role="main"
      aria-label="Sakujitsu Portfolio"
    >
      {/* インジケーター - 上端におしゃれに配置 */}
      <div className="fixed top-0 left-0 right-0 z-50 p-4 pt-safe">
        <div className="flex justify-center">
          <div className="flex space-x-2 bg-black/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
            {sections.map((_, index) => (
              <button
                key={index}
                onClick={() => moveToSection(index)}
                className={`w-8 h-1 rounded-full transition-all duration-300 hover:scale-110 ${
                  index === currentSection
                    ? "bg-white shadow-sm"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* スワイプコンテナ */}
      <animated.div
        ref={containerRef}
        {...bind()}
        className="flex select-none"
        style={{
          x,
          width: `${sections.length * 100}vw`,
          height: `${windowHeight}px`,
          minHeight: "100dvh",
          touchAction: "pan-y pinch-zoom",
          overscrollBehavior: "none",
        }}
      >
        {sections.map((section) => {
          const Component = section.component;
          return (
            <div
              key={section.id}
              className="w-screen flex-shrink-0"
              style={{
                height: `${windowHeight}px`,
                minHeight: "100dvh",
                touchAction: "none",
              }}
            >
              <Component />
            </div>
          );
        })}
      </animated.div>
    </main>
  );
}
