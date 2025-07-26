import { motion } from "framer-motion";
import { Volume2 } from "lucide-react";
import React from "react";
import { tracks } from "../data/tracks";
import FrequencyBars from "./music/FrequencyBars";
import FloatingNotes from "./music/FloatingNotes";
import MusicPhilosophy from "./music/MusicPhilosophy";
import PlaylistItem from "./music/PlaylistItem";
import TrackCard from "./music/TrackCard";
import PageNumber from "./PageNumber";

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

      {/* Floating Musical Notes */}
      <FloatingNotes />

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

            <h1 className="font-display text-4xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-display leading-none mb-2 md:mb-4">
              MUSIC
            </h1>
            <p className="text-lg md:text-xl text-violet-200/80 tracking-wide font-light">
              & Inspiration
            </p>
          </div>

          {/* Top right frequency bars */}
          <FrequencyBars />
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
            <TrackCard track={tracks[0]} />
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
                <PlaylistItem key={track.id} track={track} index={index} />
              ))}
            </div>

            {/* Music Philosophy */}
            <MusicPhilosophy />
          </div>
        </div>
      </div>

      <PageNumber pageNumber="04" position="bottom-right" />
    </section>
  );
};

export default Music;
