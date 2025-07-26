import { motion } from "framer-motion";
import { Play } from "lucide-react";
import React from "react";
import { Track } from "../../types";

interface PlaylistItemProps {
  track: Track;
  index: number;
}

const PlaylistItem: React.FC<PlaylistItemProps> = ({ track, index }) => {
  return (
    <motion.div
      className="group flex items-center p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-violet-300/30 hover:bg-violet-500/10 transition-all duration-300"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="w-12 md:w-16 h-12 md:h-16 rounded-lg overflow-hidden mr-3 md:mr-4 flex-shrink-0">
        <img
          src={track.thumbnail}
          alt={track.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1">
        <h4 className="font-semibold text-white group-hover:text-violet-200 transition-colors text-sm md:text-base">
          {track.title}
        </h4>
        <p className="text-xs md:text-sm text-white/60 mb-1">{track.artist}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-violet-300">{track.genre}</span>
          <span className="text-xs text-white/40">{track.duration}</span>
        </div>
      </div>

      <motion.a
        href={track.youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2 md:ml-4"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-8 md:w-10 h-8 md:h-10 bg-violet-500/20 rounded-full flex items-center justify-center">
          <Play className="w-3 md:w-4 h-3 md:h-4 text-violet-300 ml-0.5" />
        </div>
      </motion.a>
    </motion.div>
  );
};

export default PlaylistItem;
