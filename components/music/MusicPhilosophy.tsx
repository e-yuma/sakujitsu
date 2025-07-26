import React from "react";

const MusicPhilosophy: React.FC = () => {
  return (
    <div className="mt-6 md:mt-12 p-4 md:p-6 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-xl border border-violet-300/20">
      <h4 className="text-sm font-semibold mb-3 text-violet-200 tracking-wider">
        MUSIC PHILOSOPHY
      </h4>
      <blockquote className="text-sm italic text-white/80 leading-relaxed">
        "音楽は創造性の源泉。コードを書く時も、デザインを考える時も、
        適切な音楽が心の奥底からインスピレーションを引き出してくれる。"
      </blockquote>
    </div>
  );
};

export default MusicPhilosophy;
