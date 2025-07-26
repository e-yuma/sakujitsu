import { motion } from "framer-motion";
import React from "react";
import PageNumber from "./PageNumber";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Node.js",
  "Python",
  "GraphQL",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Figma",
  "Adobe Creative Suite",
  "Framer Motion",
  "Three.js",
];

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="h-full relative bg-gradient-to-br from-zinc-900 via-gray-900 to-black text-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-48 md:w-72 h-48 md:h-72 bg-gradient-to-br from-amber-500/10 to-orange-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-16 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-tr from-amber-400/5 to-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-48 md:w-64 h-48 md:h-64 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col p-4 md:p-8">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8 md:mb-16">
          <div>
            <div className="flex items-center mb-3 md:mb-4">
              <div className="w-8 md:w-16 h-px bg-amber-400/60 mr-4 md:mr-6"></div>
              <span className="text-xs md:text-sm tracking-[0.3em] md:tracking-[0.4em] text-white/60 font-light">
                PROFILE
              </span>
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-none mb-2 md:mb-4">
              ABOUT
            </h1>
            <p className="text-base md:text-lg text-amber-200/80 tracking-wide font-light">
              Creative Frontend Engineer
            </p>
          </div>

          {/* Top right year */}
          <div className="text-right">
            <p className="text-3xl md:text-6xl font-black text-white/10 leading-none">
              2024
            </p>
            <p className="text-xs tracking-widest text-white/40 mt-1 md:mt-2">
              EST. 2019
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Profile Text */}
            <div className="space-y-4 md:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 md:mb-8">
                  Hello, I'm{" "}
                  <span className="text-amber-300 italic font-light">
                    sakujitsu
                  </span>
                  <br />
                  <span className="text-white/70 text-xl md:text-2xl font-light">
                    A passionate creator
                  </span>
                </h2>

                <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed text-white/80">
                  <p>
                    私はフロントエンドエンジニアとして5年以上の経験を持ち、
                    優れたデジタル体験の創造に情熱を注いでいます。
                  </p>
                  <p>
                    クリーンなコード、思慮深いデザイン、そして意味のある
                    インタラクションの力を信じています。
                  </p>
                </div>
              </motion.div>

              {/* Quote */}
              <motion.div
                className="relative mt-8 md:mt-12"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-3 md:-left-4 top-0 text-4xl md:text-6xl text-amber-300/20 font-serif">
                  "
                </div>
                <blockquote className="text-lg md:text-xl italic text-amber-100 pl-6 md:pl-8 leading-relaxed">
                  Great design is not just about how it looks,
                  <br className="hidden md:block" />
                  but how it works and how it makes people feel.
                </blockquote>
              </motion.div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-16">
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-black text-amber-300 mb-1 md:mb-2">
                  5+
                </h3>
                <p className="text-xs md:text-sm text-white/60 tracking-wide">
                  YEARS EXP
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-black text-amber-300 mb-1 md:mb-2">
                  50+
                </h3>
                <p className="text-xs md:text-sm text-white/60 tracking-wide">
                  PROJECTS
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-black text-amber-300 mb-1 md:mb-2">
                  ∞
                </h3>
                <p className="text-xs md:text-sm text-white/60 tracking-wide">
                  CREATIVITY
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Avatar & Skills */}
          <div className="lg:col-span-5 flex flex-col items-center justify-start pt-4 md:pt-8">
            {/* Avatar Section */}
            <motion.div
              className="relative mb-8 md:mb-12"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-3 md:-inset-4 bg-gradient-to-r from-amber-500/20 via-orange-400/20 to-yellow-500/20 rounded-full blur-xl"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <div className="relative w-32 md:w-40 h-32 md:h-40 rounded-full overflow-hidden border-4 border-amber-300/30 shadow-2xl">
                  <img
                    src="/assets/icon.png"
                    alt="昨日(sakujitsu)"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Skills Section */}
            <div className="w-full">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-amber-200 tracking-wide">
                TECH STACK
              </h3>
              <div className="grid grid-cols-2 gap-2 md:gap-3">
                {skills.slice(0, 12).map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="bg-white/5 backdrop-blur-sm px-3 py-2 rounded-lg text-sm font-medium border border-white/10 hover:border-amber-300/30 hover:bg-amber-300/5 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>

              {/* Currently Learning */}
              <div className="mt-6 md:mt-8 p-4 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl border border-amber-300/20">
                <h4 className="text-sm font-semibold mb-3 text-amber-200 tracking-wider">
                  CURRENTLY EXPLORING
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["WebGL", "AI/ML", "Rust", "Web3"].map((item) => (
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
          </div>
        </div>
      </div>

      <PageNumber pageNumber="03" position="bottom-right" />
    </section>
  );
};

export default About;
