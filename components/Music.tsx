"use client";

import { motion } from "framer-motion";
import { Volume2 } from "lucide-react";
import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { tracks } from "../data/tracks";
import FrequencyBars from "./music/FrequencyBars";
import FloatingNotes from "./music/FloatingNotes";
import MusicPhilosophy from "./music/MusicPhilosophy";
import PlaylistItem from "./music/PlaylistItem";
import TrackCard from "./music/TrackCard";
import PageNumber from "./PageNumber";

const Music: React.FC = () => {
  const [{ x, y }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    config: { tension: 300, friction: 30 },
  }));

  const bind = useDrag(
    ({ active, movement: [mx, my], last }) => {
      if (active) {
        // ドラッグ中は追従
        api.start({
          x: mx,
          y: my,
          immediate: true,
        });
      } else if (last) {
        // ドラッグ終了時は元の位置に戻る
        api.start({
          x: 0,
          y: 0,
          config: { tension: 300, friction: 30 },
        });
      }
    },
    {
      bounds: { left: -100, right: 100, top: -100, bottom: 100 },
      rubberband: true,
    }
  );

  return (
    <section
      id="music"
      className="relative bg-black text-white overflow-hidden p-4 md:p-6"
      style={{ height: "100dvh" }}
    >
      <animated.div
        className="relative w-full h-full rounded-3xl md:rounded-4xl overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 cursor-grab active:cursor-grabbing"
        style={{ x, y }}
        {...bind()}
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_60%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(159,122,234,0.1),transparent_60%)]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-r from-violet-500/5 to-fuchsia-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Floating Musical Notes */}
        <FloatingNotes />

        <div className="relative z-10 h-full flex flex-col p-4 md:p-6 pt-safe pb-safe">
          {/* Header Section */}
          <div className="flex justify-between items-start mb-4 md:mb-8 mt-2 md:mt-0">
            <div>
              <div className="flex items-center mb-2 md:mb-3">
                <motion.div
                  className="w-6 md:w-8 h-6 md:h-8 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center mr-3 md:mr-4"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Volume2 className="w-3 md:w-4 h-3 md:h-4 text-white" />
                </motion.div>
                <span className="text-xs tracking-[0.3em] text-white/60 font-light">
                  SOUNDTRACK
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-display leading-none mb-1 md:mb-2">
                MUSIC
              </h1>
              <p className="text-sm md:text-base text-violet-200/80 tracking-wide font-light">
                & Inspiration
              </p>
            </div>

            {/* Top right frequency bars */}
            <FrequencyBars />
          </div>

          {/* Main Content */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8">
            {/* Left Side - Featured Track */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="mb-3 md:mb-6">
                <div className="flex items-center mb-2 md:mb-3">
                  <div className="w-6 md:w-8 h-px bg-violet-400/60 mr-2 md:mr-3"></div>
                  <span className="text-xs tracking-[0.2em] text-white/60">
                    NOW PLAYING
                  </span>
                </div>
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold leading-tight mb-2 md:mb-3">
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
              <div className="mb-3 md:mb-4">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-violet-200">
                  PLAYLIST
                </h3>
              </div>

              <div className="space-y-2 md:space-y-4">
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
      </animated.div>
    </section>
  );
};

export default Music;
