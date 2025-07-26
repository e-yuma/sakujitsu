import { motion } from "framer-motion";
import React from "react";
import { commonAnimations } from "../../utils/animations";

const FeaturedProject: React.FC = () => {
  return (
    <div className="w-full md:w-1/2 relative mb-6 md:mb-0">
      <motion.div
        className="relative h-64 md:h-full rounded-xl md:rounded-2xl overflow-hidden"
        {...commonAnimations.scaleIn}
      >
        <img
          className="w-full h-full object-cover"
          src="/assets/works.png"
          alt="featured works"
        />

        {/* Image overlay with typography */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                Featured Work
              </h3>
              <p className="text-sm text-white/80 max-w-xs">
                それは、夢で見たはずの風景
              </p>
            </div>
            <div className="text-right hidden md:block">
              <div className="w-12 h-px bg-white/40 mb-2"></div>
              <p className="text-xs tracking-wider text-white/60">2024</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturedProject;
