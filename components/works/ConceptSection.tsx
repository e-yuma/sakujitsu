import { motion } from "framer-motion";
import React from "react";
import { commonAnimations } from "../../utils/animations";

const ConceptSection: React.FC = () => {
  return (
    <motion.div className="mb-8 md:mb-12" {...commonAnimations.fadeInLeft}>
      <div className="flex items-center mb-4 md:mb-6">
        <div className="w-6 md:w-8 h-px bg-gray-400 mr-3 md:mr-4"></div>
        <h2 className="text-lg md:text-xl tracking-[0.15em] md:tracking-[0.2em] font-light text-white/80">
          CONCEPT
        </h2>
      </div>

      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 md:mb-6">
        それは、夢で見たはずの
        <br />
        <span className="text-gray-300 font-light italic">風景</span>
      </h3>

      <div className="space-y-3 md:space-y-4 text-white/70 leading-relaxed text-sm md:text-base">
        <p>どこかの誰かが忘れていった、記憶の欠片。</p>
        <p>無数のデータとしてデジタルに沈殿した、感情の残響。</p>
        <p className="text-white font-medium">私たちは、昨日。</p>
      </div>
    </motion.div>
  );
};

export default ConceptSection;
