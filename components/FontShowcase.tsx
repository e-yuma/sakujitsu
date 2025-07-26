import React from "react";

const FontShowcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Main Title */}
        <div className="text-center space-y-4">
          <h1 className="font-display text-6xl md:text-8xl font-black tracking-display">
            SAKUJITSU
          </h1>
          <p className="font-sans text-lg tracking-magazine text-white/80">
            雑誌風日本語フォント・デモンストレーション
          </p>
        </div>

        {/* Font Examples Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Noto Sans JP */}
          <div className="space-y-6 p-8 bg-white/5 rounded-2xl border border-white/10">
            <div className="space-y-2">
              <h2 className="font-display text-3xl font-bold text-blue-300">
                Noto Sans JP
              </h2>
              <p className="text-sm text-white/60">
                雑誌で最も使用される日本語フォント
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-sans text-2xl font-bold">
                クリエイティブ・ポートフォリオ
              </h3>
              <p className="font-sans text-base leading-relaxed text-white/90">
                私はフロントエンドエンジニアとして5年以上の経験を持ち、
                優れたデジタル体験の創造に情熱を注いでいます。
                クリーンなコード、思慮深いデザイン、そして意味のある
                インタラクションの力を信じています。
              </p>
              <p className="font-sans text-sm tracking-wide text-blue-200">
                MODERN TYPOGRAPHY FOR WEB DESIGN
              </p>
            </div>
          </div>

          {/* Noto Serif JP */}
          <div className="space-y-6 p-8 bg-white/5 rounded-2xl border border-white/10">
            <div className="space-y-2">
              <h2 className="font-display text-3xl font-bold text-amber-300">
                Noto Serif JP
              </h2>
              <p className="text-sm text-white/60">エレガントなセリフ体</p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold">
                視覚的物語の創造
              </h3>
              <p className="font-serif text-base leading-relaxed text-white/90">
                探求し続ける視覚的表現の可能性。一瞬一瞬を切り取り、
                物語を紡ぐ。どこかの誰かが忘れていった、記憶の欠片。
                無数のデータとしてデジタルに沈殿した、感情の残響。
              </p>
              <blockquote className="font-serif text-lg italic text-amber-100 pl-6 border-l-2 border-amber-300">
                "Great design is not just about how it looks, but how it works
                and how it makes people feel."
              </blockquote>
            </div>
          </div>

          {/* M PLUS 1 */}
          <div className="space-y-6 p-8 bg-white/5 rounded-2xl border border-white/10">
            <div className="space-y-2">
              <h2 className="font-display text-3xl font-bold text-purple-300">
                M PLUS 1
              </h2>
              <p className="text-sm text-white/60">
                モダンで幾何学的なデザイン
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold">
                テクノロジー × デザイン
              </h3>
              <p className="font-display text-base leading-relaxed text-white/90">
                それは、夢で見たはずの風景。 JavaScript / TypeScript / React /
                Next.js Vue.js / Node.js / Python / GraphQL
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Tailwind"].map((tech) => (
                  <span
                    key={tech}
                    className="font-display px-3 py-1 bg-purple-500/20 rounded-full text-sm font-medium text-purple-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Zen Kaku Gothic New */}
          <div className="space-y-6 p-8 bg-white/5 rounded-2xl border border-white/10">
            <div className="space-y-2">
              <h2 className="font-display text-3xl font-bold text-green-300">
                Zen Kaku Gothic New
              </h2>
              <p className="text-sm text-white/60">
                角ゴシック・現代的な雑誌スタイル
              </p>
            </div>

            <div className="space-y-4">
              <h3
                className="text-2xl font-bold"
                style={{ fontFamily: '"Zen Kaku Gothic New", sans-serif' }}
              >
                プロジェクト実績
              </h3>
              <div
                className="space-y-3"
                style={{ fontFamily: '"Zen Kaku Gothic New", sans-serif' }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-white/90">E-Commerce Platform</span>
                  <span className="text-sm text-green-300">2024</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/90">Task Management App</span>
                  <span className="text-sm text-green-300">2024</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/90">Design System</span>
                  <span className="text-sm text-green-300">2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Typography Scale Demo */}
        <div className="text-center space-y-8 p-12 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-3xl border border-violet-300/20">
          <h2 className="font-display text-4xl font-bold text-violet-200">
            タイポグラフィ・スケール
          </h2>

          <div className="space-y-6">
            <h1 className="font-display text-8xl font-black tracking-display text-white">
              見出し1
            </h1>
            <h2 className="font-display text-6xl font-bold tracking-tight text-white/90">
              見出し2
            </h2>
            <h3 className="font-display text-4xl font-bold text-white/80">
              見出し3
            </h3>
            <h4 className="font-sans text-2xl font-semibold text-white/70">
              見出し4
            </h4>
            <p className="font-sans text-lg leading-relaxed text-white/60 max-w-2xl mx-auto">
              本文テキスト - 読みやすさとデザイン性を両立した、
              雑誌品質の日本語タイポグラフィシステム
            </p>
            <p className="font-sans text-sm tracking-magazine text-white/50">
              CAPTION TEXT - MAGAZINE STYLE JAPANESE TYPOGRAPHY
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FontShowcase;
