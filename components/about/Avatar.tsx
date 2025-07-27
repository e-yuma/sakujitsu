import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { commonAnimations } from "../../utils/animations";

const Avatar: React.FC = () => {
  return (
    <motion.div
      className="relative mb-8 md:mb-12"
      {...commonAnimations.scaleIn}
      transition={{ ...commonAnimations.scaleIn.transition, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="relative">
        <motion.div
          className="absolute -inset-3 md:-inset-4 bg-gradient-to-r from-amber-500/20 via-orange-400/20 to-yellow-500/20 rounded-full blur-xl"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <div className="relative w-32 md:w-40 h-32 md:h-40 rounded-full overflow-hidden border-4 border-amber-300/30 shadow-2xl">
          <Image
            src="/assets/icon.png"
            alt="昨日(sakujitsu)"
            className="w-full h-full object-cover"
            fill
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Avatar;
