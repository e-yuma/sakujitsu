import { AnimatePresence, motion, PanInfo } from "framer-motion";
import React, { useEffect, useState } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Music from "./components/Music";
import Works from "./components/Works";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    { component: Hero, id: "hero" },
    { component: Works, id: "works" },
    { component: Music, id: "music" },
    { component: About, id: "about" },
    { component: Footer, id: "contact" },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 100;

    if (info.offset.x > threshold && currentSection > 0) {
      setCurrentSection(currentSection - 1);
    } else if (
      info.offset.x < -threshold &&
      currentSection < sections.length - 1
    ) {
      setCurrentSection(currentSection + 1);
    }
  };

  const swipeVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    }),
  };

  if (isMobile) {
    return (
      <div className="bg-[#FAF8F5] text-[#3D352E] overflow-hidden">
        <Header />

        {/* Mobile Card Swipe Interface */}
        <div className="relative h-screen overflow-hidden">
          <AnimatePresence mode="wait" custom={currentSection}>
            <motion.div
              key={currentSection}
              custom={currentSection}
              variants={swipeVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="absolute inset-0 cursor-grab active:cursor-grabbing"
              whileDrag={{ scale: 0.98 }}
            >
              {React.createElement(sections[currentSection].component)}
            </motion.div>
          </AnimatePresence>

          {/* Section Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex space-x-3">
            {sections.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSection
                    ? "bg-[#C4A484] scale-125"
                    : "bg-white/50 backdrop-blur-sm"
                }`}
                onClick={() => setCurrentSection(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Swipe Hint */}
          <motion.div
            className="absolute bottom-20 left-1/2 -translate-x-1/2 z-40 text-center text-sm text-white/80 backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <motion.span
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ← Swipe to navigate →
            </motion.span>
          </motion.div>
        </div>
      </div>
    );
  }

  // Desktop Layout (unchanged)
  return (
    <div className="bg-[#FAF8F5] text-[#3D352E] overflow-x-hidden">
      <Header />
      <Hero />
      <Works />
      <Music />
      <About />
      <Footer />
    </div>
  );
}

export default App;
