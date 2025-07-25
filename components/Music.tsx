import { motion } from "framer-motion";
import { ExternalLink, Music as MusicIcon, Play } from "lucide-react";
import React from "react";

interface Track {
  id: number;
  title: string;
  artist: string;
  youtubeUrl: string;
  thumbnail: string;
  description: string;
}

const tracks: Track[] = [
  {
    id: 1,
    title: "Coding Flow",
    artist: "Lo-Fi Beats",
    youtubeUrl: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
    thumbnail:
      "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Perfect background music for coding sessions",
  },
  {
    id: 2,
    title: "Creative Inspiration",
    artist: "Ambient Sounds",
    youtubeUrl: "https://www.youtube.com/watch?v=5qap5aO4i9A",
    thumbnail:
      "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Inspiring melodies for creative work",
  },
  {
    id: 3,
    title: "Focus Mode",
    artist: "Study Music",
    youtubeUrl: "https://www.youtube.com/watch?v=lTRiuFIWV54",
    thumbnail:
      "https://images.pexels.com/photos/1370545/pexels-photo-1370545.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Deep focus music for productivity",
  },
];

const Music: React.FC = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.42, 0, 0.58, 1] as const,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeInOut" as const,
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="music"
      className="py-20 px-6 bg-gradient-to-b from-white to-[#FAF8F5] h-full"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#E8D5C4] to-[#D4B896] rounded-full blur-lg opacity-30"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative w-16 h-16 bg-gradient-to-r from-[#E8D5C4] to-[#D4B896] rounded-full flex items-center justify-center">
                <MusicIcon className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Music & Inspiration
          </h2>
          <p className="text-lg text-[#C4A484] max-w-2xl mx-auto">
            The soundtracks that fuel my creativity and coding sessions
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tracks.map((track) => (
            <motion.div
              key={track.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#F0EBE3]"
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={track.thumbnail}
                  alt={track.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Play Button Overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                >
                  <motion.a
                    href={track.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </motion.a>
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#3D352E]">
                  {track.title}
                </h3>
                <p className="text-[#C4A484] font-medium mb-3">
                  {track.artist}
                </p>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {track.description}
                </p>

                <motion.a
                  href={track.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#C4A484] hover:text-[#A1887F] font-medium transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <span>Listen on YouTube</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Music;
