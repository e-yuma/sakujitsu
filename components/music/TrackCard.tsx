import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import React from "react";
import { Track } from "../../types";

interface TrackCardProps {
  track: Track;
}

const TrackCard: React.FC<TrackCardProps> = ({ track }) => {
  return (
    <motion.div
      className="relative bg-black/40 backdrop-blur-sm rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 relative">
          <img
            src={track.thumbnail}
            alt={track.title}
            className="w-full h-40 md:h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

          {/* Play Button */}
          <motion.a
            href={track.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 md:w-12 h-10 md:h-12 bg-violet-500/90 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Play className="w-5 md:w-6 h-5 md:h-6 text-white ml-1" />
            </div>
          </motion.a>
        </div>

        <div className="w-full md:w-1/2 p-4 md:p-8">
          <div className="flex justify-between items-start mb-3 md:mb-4">
            <span className="text-xs tracking-wider text-violet-300 font-medium">
              {track.genre.toUpperCase()}
            </span>
            <span className="text-xs text-white/60">{track.duration}</span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold mb-2">{track.title}</h3>
          <p className="text-violet-200/80 font-medium mb-3 md:mb-4">
            {track.artist}
          </p>
          <p className="text-sm text-white/70 leading-relaxed mb-4 md:mb-6">
            {track.description}
          </p>

          <motion.a
            href={track.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-violet-300 hover:text-violet-200 font-medium transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            <span>Listen on YouTube</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default TrackCard;
