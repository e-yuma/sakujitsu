import { motion } from "framer-motion";
import React from "react";

interface FloatingNote {
  symbol: string;
  className: string;
  duration: number;
  delay: number;
}

const floatingNotes: FloatingNote[] = [
  {
    symbol: "♪",
    className: "absolute top-20 left-20 text-violet-300/20 text-6xl",
    duration: 4,
    delay: 0,
  },
  {
    symbol: "♫",
    className: "absolute top-40 right-32 text-purple-300/20 text-4xl",
    duration: 5,
    delay: 1,
  },
  {
    symbol: "♩",
    className: "absolute bottom-40 left-1/3 text-indigo-300/20 text-5xl",
    duration: 6,
    delay: 2,
  },
];

const FloatingNotes: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
      {floatingNotes.map((note, index) => (
        <motion.div
          key={index}
          className={note.className}
          animate={{ y: [-10, 10, -10] }}
          transition={{
            duration: note.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: note.delay,
          }}
        >
          {note.symbol}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingNotes;
