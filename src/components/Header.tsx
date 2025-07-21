import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={`hidden md:block fixed top-0 left-0 right-0 z-50 duration-500 ${
        scrolled ? "bg-white/20 backdrop-blur-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="container mx-auto p-8 flex items-center justify-between w-full">
        {/* 左：ロゴ */}
        <div className="flex items-center">
          <img src="/assets/logo.svg" alt="Logo" className="w-14 h-14" />
        </div>
        {/* 右：ナビゲーション */}
        <nav className="hidden md:flex space-x-12">
          {["Works", "Music", "About", "Contact"].map((item) => (
            <motion.button
              key={item}
              className={`relative text-lg font-medium hover:text-[#C4A484] transition-colors duration-300`}
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
