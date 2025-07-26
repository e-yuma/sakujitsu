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
        className="relative mt-8 md:mt-12"
        {...commonAnimations.fadeInLeft}
        transition={{ ...commonAnimations.fadeInLeft.transition, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="absolute -left-3 md:-left-4 top-0 text-4xl md:text-6xl text-amber-300/20 font-serif">
          "
        </div>
        <blockquote className="text-lg md:text-xl italic text-amber-100 pl-6 md:pl-8 leading-relaxed">
          Great design is not just about how it looks,
          <br className="hidden md:block" />
          but how it works and how it makes people feel.
        </blockquote>
      </motion.div>
    </div>
  );
};

export default ProfileSection;
