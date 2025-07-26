import { motion } from "framer-motion";
import React from "react";
import { commonAnimations } from "../../utils/animations";

const ProfileSection: React.FC = () => {
  return (
    <div className="space-y-4 md:space-y-6">
      <motion.div {...commonAnimations.fadeInUp} viewport={{ once: true }}>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 md:mb-8">
          Hello, I'm{" "}
          <span className="text-amber-300 italic font-light">sakujitsu</span>
          <br />
          <span className="text-white/70 text-xl md:text-2xl font-light">
            A passionate creator
          </span>
        </h2>

        <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed text-white/80">
          <p>
            私はフロントエンドエンジニアとして5年以上の経験を持ち、
            優れたデジタル体験の創造に情熱を注いでいます。
          </p>
          <p>
            クリーンなコード、思慮深いデザイン、そして意味のある
            インタラクションの力を信じています。
          </p>
        </div>
      </motion.div>

      {/* Quote */}
      <motion.div
        className="relative mt-4 md:mt-6"
        {...commonAnimations.fadeInLeft}
        transition={{ ...commonAnimations.fadeInLeft.transition, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="absolute -left-2 md:-left-3 top-0 text-2xl md:text-3xl text-amber-300/20 font-serif">
          "
        </div>
        <blockquote className="text-sm md:text-base italic text-amber-100 pl-4 md:pl-6 leading-relaxed">
          Great design is not just about how it looks, but how it works and
          makes people feel.
        </blockquote>
      </motion.div>
    </div>
  );
};

export default ProfileSection;
