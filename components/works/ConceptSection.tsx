import { motion } from "framer-motion";
import React from "react";
import { commonAnimations } from "../../utils/animations";

const ConceptSection: React.FC = () => {
  return (
    <motion.div className="mb-3 md:mb-6" {...commonAnimations.fadeInLeft}>
      <div className="flex items-center mb-2 md:mb-4">
        <div className="w-3 md:w-6 h-px bg-gray-400 mr-2 md:mr-3"></div>
        <h2 className="text-xs md:text-base tracking-[0.15em] font-light text-white/80">
          CONCEPT
        </h2>
      </div>

      <h3 className="text-sm sm:text-base md:text-2xl lg:text-3xl font-bold leading-tight mb-2 md:mb-4">
        それは、夢で見たはずの
        <br className="sm:hidden" />
        <span className="text-gray-300 font-light italic">風景</span>
      </h3>

      <div className="space-y-1 md:space-y-3 text-white/70 leading-relaxed text-xs sm:text-sm">
        <p>記憶の欠片。</p>
        <p className="hidden md:block">
          無数のデータとしてデジタルに沈殿した、感情の残響。
        </p>
        <p className="text-white font-medium">私たちは、昨日。</p>
      </div>
    </motion.div>
  );
};

export default ConceptSection;
