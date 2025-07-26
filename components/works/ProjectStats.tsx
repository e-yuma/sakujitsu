import { motion } from "framer-motion";
import React from "react";
import { commonAnimations } from "../../utils/animations";

interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: "24+", label: "PROJECTS COMPLETED" },
  { value: "2024", label: "YEAR ACTIVE" },
];

const ProjectStats: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-6 md:gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          {...commonAnimations.fadeInUp}
          transition={{
            ...commonAnimations.fadeInUp.transition,
            delay: index * 0.2,
          }}
        >
          <h4 className="text-2xl md:text-3xl font-bold text-white mb-1">
            {stat.value}
          </h4>
          <p className="text-xs md:text-sm text-white/60 tracking-wide">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectStats;
