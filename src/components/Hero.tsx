import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="hero"
      className={`relative ${
        isMobile ? "h-full" : "h-screen"
      } flex items-center justify-center overflow-hidden`}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="src\assets\hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#FAF8F5]/30 backdrop-blur-[1px]" />
      </div>

      {!isMobile && (
        <motion.div
          className="absolute bottom-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="flex flex-col items-center justify-center cursor-pointer"
            animate={{
              y: [0, -10, 0],
            }}
            onClick={() =>
              document
                .getElementById("works")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="text-sm mb-2 text-[#3D352E] block hover:underline hover:text-[#A1887F] transition-colors duration-300 cursor-pointer">
              Scroll
            </span>
            <ChevronDown className="w-5 h-5 text-[#3D352E]" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
