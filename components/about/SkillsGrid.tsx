import { motion } from "framer-motion";
import React from "react";
import { skills, learningSkills } from "../../data/skills";
import { createStaggerAnimation } from "../../utils/animations";

const SkillsGrid: React.FC = () => {
  // Display first 12 skills
  const displaySkills = skills.slice(0, 12);

  return (
    <div className="w-full">
      <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-amber-200 tracking-wide">
        TECH STACK
      </h3>
      <div className="grid grid-cols-2 gap-2 md:gap-3">
        {displaySkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="bg-white/5 backdrop-blur-sm px-3 py-2 rounded-lg text-sm font-medium border border-white/10 hover:border-amber-300/30 hover:bg-amber-300/5 transition-all duration-300"
            {...createStaggerAnimation(index * 0.05)}
            viewport={{ once: true }}
          >
            {skill.name}
          </motion.div>
        ))}
      </div>

      {/* Currently Learning */}
      <div className="mt-6 md:mt-8 p-4 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl border border-amber-300/20">
        <h4 className="text-sm font-semibold mb-3 text-amber-200 tracking-wider">
          CURRENTLY EXPLORING
        </h4>
        <div className="flex flex-wrap gap-2">
          {learningSkills.map((item) => (
            <span
              key={item}
              className="px-2 py-1 bg-amber-300/20 rounded text-xs font-medium text-amber-100"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsGrid;
