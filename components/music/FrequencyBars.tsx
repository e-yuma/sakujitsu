import { motion } from "framer-motion";
import React from "react";

const FrequencyBars: React.FC = () => {
  return (
    <div className="flex items-end space-x-1 md:flex">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="w-2 bg-gradient-to-t from-violet-500 to-purple-400 rounded-full"
          style={{ height: `${20 + i * 8}px` }}
          animate={{
            scaleY: [1, 0.3, 1, 0.6, 1],
            opacity: [0.7, 1, 0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FrequencyBars;
