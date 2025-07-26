/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Noto Sans JP"',
          '"Zen Kaku Gothic New"',
          '"Inter"',
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
        serif: ['"Noto Serif JP"', '"Shippori Mincho"', "Georgia", "serif"],
        display: [
          '"M PLUS 1"',
          '"Zen Kaku Gothic New"',
          '"Noto Sans JP"',
          "sans-serif",
        ],
        mono: [
          '"JetBrains Mono"',
          '"Noto Sans Mono CJK JP"',
          '"SF Mono"',
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      fontSize: {
        // 雑誌風レスポンシブタイポグラフィ
        xs: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.025em" }],
        sm: ["0.875rem", { lineHeight: "1.6", letterSpacing: "0.025em" }],
        base: ["1rem", { lineHeight: "1.7", letterSpacing: "0.025em" }],
        lg: ["1.125rem", { lineHeight: "1.7", letterSpacing: "0" }],
        xl: ["1.25rem", { lineHeight: "1.6", letterSpacing: "-0.025em" }],
        "2xl": ["1.5rem", { lineHeight: "1.5", letterSpacing: "-0.025em" }],
        "3xl": ["1.875rem", { lineHeight: "1.4", letterSpacing: "-0.05em" }],
        "4xl": ["2.25rem", { lineHeight: "1.3", letterSpacing: "-0.05em" }],
        "5xl": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.05em" }],
        "6xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.05em" }],
        "7xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.075em" }],
        "8xl": ["6rem", { lineHeight: "1", letterSpacing: "-0.075em" }],
        "9xl": ["8rem", { lineHeight: "1", letterSpacing: "-0.075em" }],
      },
      letterSpacing: {
        tighter: "-0.075em",
        tight: "-0.05em",
        normal: "0",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
        magazine: "0.025em", // 雑誌風レタースペーシング
        display: "-0.05em", // ディスプレイ用
      },
    },
  },
  plugins: [],
};
