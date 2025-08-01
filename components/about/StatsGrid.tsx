import { motion } from "framer-motion";
import React from "react";
import { statistics } from "../../data/skills";
import { createStaggerAnimation } from "../../utils/animations";

const StatsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-3 md:gap-6 mt-4 md:mt-8">
      {statistics.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="text-center"
          {...createStaggerAnimation(index * 0.1)}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-black text-amber-300 mb-1">
            {stat.value}
          </h3>
          <p className="text-xs text-white/60 tracking-wide">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsGrid;
