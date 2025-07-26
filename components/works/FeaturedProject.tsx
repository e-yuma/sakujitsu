import { motion } from "framer-motion";
import React from "react";
import { commonAnimations } from "../../utils/animations";

const FeaturedProject: React.FC = () => {
  return (
    <div className="w-1/3 sm:w-2/5 md:w-1/2 relative flex-shrink-0">
      <motion.div
        className="relative h-64 sm:h-72 md:h-full rounded-lg md:rounded-xl overflow-hidden"
        {...commonAnimations.scaleIn}
      >
        <img
          className="w-full h-full object-cover"
          src="/assets/works.png"
          alt="featured works"
        />

        {/* Image overlay with typography */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-2 sm:bottom-3 md:bottom-6 left-2 sm:left-3 md:left-6 right-2 sm:right-3 md:right-6">
          <div className="flex flex-col">
            <h3 className="text-sm sm:text-base md:text-xl font-bold mb-1">
              Featured Work
            </h3>
            <p className="text-xs sm:text-sm text-white/80 hidden sm:block">
              それは、夢で見たはずの風景
            </p>
            <div className="text-right hidden md:block mt-2">
              <div className="w-8 h-px bg-white/40 mb-1"></div>
              <p className="text-xs tracking-wider text-white/60">2024</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturedProject;
