import { motion } from "framer-motion";
import { ExternalLink, Music as MusicIcon, Play, Volume2 } from "lucide-react";
import React from "react";
import PageNumber from "./PageNumber";

interface Track {
  id: number;
  title: string;
  artist: string;
  youtubeUrl: string;
  thumbnail: string;
  description: string;
  genre: string;
  duration: string;
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
    genre: "Lo-Fi",
    duration: "3:42",
  },
  {
    id: 2,
    title: "Creative Inspiration",
    artist: "Ambient Sounds",
    youtubeUrl: "https://www.youtube.com/watch?v=5qap5aO4i9A",
    thumbnail:
      "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Inspiring melodies for creative work",
    genre: "Ambient",
    duration: "4:15",
  },
  {
    id: 3,
    title: "Focus Mode",
    artist: "Study Music",
    youtubeUrl: "https://www.youtube.com/watch?v=lTRiuFIWV54",
    thumbnail:
      "https://images.pexels.com/photos/1370545/pexels-photo-1370545.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Deep focus music for productivity",
    genre: "Instrumental",
    duration: "5:28",
  },
];

const Music: React.FC = () => {
  return (
    <section
      id="music"
      className="h-full relative bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 text-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_60%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(159,122,234,0.1),transparent_60%)]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-r from-violet-500/5 to-fuchsia-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Musical Notes - hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <motion.div
          className="absolute top-20 left-20 text-violet-300/20 text-6xl"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          ♪
        </motion.div>
        <motion.div
          className="absolute top-40 right-32 text-purple-300/20 text-4xl"
          animate={{ y: [10, -10, 10] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          ♫
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-1/3 text-indigo-300/20 text-5xl"
          animate={{ y: [-15, 15, -15] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          ♩
        </motion.div>
      </div>

      <div className="relative z-10 h-full flex flex-col p-4 md:p-8">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8 md:mb-16">
          <div>
            <div className="flex items-center mb-4 md:mb-6">
              <motion.div
                className="w-8 md:w-12 h-8 md:h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center mr-4 md:mr-6"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Volume2 className="w-4 md:w-6 h-4 md:h-6 text-white" />
              </motion.div>
              <span className="text-xs md:text-sm tracking-[0.3em] md:tracking-[0.4em] text-white/60 font-light">
                SOUNDTRACK
              </span>
            </div>

            <h1 className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-none mb-2 md:mb-4">
              MUSIC
            </h1>
            <p className="text-lg md:text-xl text-violet-200/80 tracking-wide font-light">
              & Inspiration
            </p>
          </div>

          {/* Top right frequency bars */}
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
        </div>

        {/* Main Content */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Left Side - Featured Track */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="mb-6 md:mb-8">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-8 md:w-12 h-px bg-violet-400/60 mr-3 md:mr-4"></div>
                <span className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] text-white/60">
                  NOW PLAYING
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6">
                The soundtracks that
                <br />
                <span className="text-violet-300 italic font-light">
                  fuel my creativity
                </span>
              </h2>
            </div>

            {/* Featured Track Card */}
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
                    src={tracks[0].thumbnail}
                    alt={tracks[0].title}
                    className="w-full h-48 md:h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

                  {/* Play Button */}
                  <motion.a
                    href={tracks[0].youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-12 md:w-16 h-12 md:h-16 bg-violet-500/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="w-6 md:w-8 h-6 md:h-8 text-white ml-1" />
                    </div>
                  </motion.a>
                </div>

                <div className="w-full md:w-1/2 p-4 md:p-8">
                  <div className="flex justify-between items-start mb-3 md:mb-4">
                    <span className="text-xs tracking-wider text-violet-300 font-medium">
                      {tracks[0].genre.toUpperCase()}
                    </span>
                    <span className="text-xs text-white/60">
                      {tracks[0].duration}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    {tracks[0].title}
                  </h3>
                  <p className="text-violet-200/80 font-medium mb-3 md:mb-4">
                    {tracks[0].artist}
                  </p>
                  <p className="text-sm text-white/70 leading-relaxed mb-4 md:mb-6">
                    {tracks[0].description}
                  </p>

                  <motion.a
                    href={tracks[0].youtubeUrl}
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
          </div>

          {/* Right Side - Track List */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-violet-200">
                PLAYLIST
              </h3>
            </div>

            <div className="space-y-3 md:space-y-4">
              {tracks.slice(1).map((track, index) => (
                <motion.div
                  key={track.id}
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
                    <p className="text-xs md:text-sm text-white/60 mb-1">
                      {track.artist}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-violet-300">
                        {track.genre}
                      </span>
                      <span className="text-xs text-white/40">
                        {track.duration}
                      </span>
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
              ))}
            </div>

            {/* Music Philosophy */}
            <div className="mt-6 md:mt-12 p-4 md:p-6 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-xl border border-violet-300/20">
              <h4 className="text-sm font-semibold mb-3 text-violet-200 tracking-wider">
                MUSIC PHILOSOPHY
              </h4>
              <blockquote className="text-sm italic text-white/80 leading-relaxed">
                "音楽は創造性の源泉。コードを書く時も、デザインを考える時も、
                適切な音楽が心の奥底からインスピレーションを引き出してくれる。"
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <PageNumber pageNumber="04" position="bottom-right" />
    </section>
  );
};

export default Music;
