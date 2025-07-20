import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (isMobile) return; // Disable scroll navigation on mobile
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/20 backdrop-blur-md" : "bg-transparent"
      }`}
      initial={{ x: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-end items-end">
        <nav className="hidden md:flex space-x-8">
          {["Works", "Music", "About", "Contact"].map((item) => (
            <motion.button
              key={item}
              className={`relative text-sm font-medium hover:text-[#C4A484] transition-colors duration-300 ${
                isMobile ? "pointer-events-none" : ""
              }`}
              whileHover={{ y: -2 }}
              onClick={() => scrollToSection(item.toLowerCase())}
            >
              {item}
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E8D5C4]"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
