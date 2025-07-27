// 最適化されたフォント設定（パフォーマンス重視）

export const magazineFonts = {
  // メインフォント - 必要最小限のウェイト
  primary: {
    name: '"Noto Sans JP", "Zen Kaku Gothic New", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    weights: [400, 500, 700, 900],
    googleFonts: 'Noto+Sans+JP:wght@400;500;700;900&family=Zen+Kaku+Gothic+New:wght@400;500;700;900'
  },
  
  // ディスプレイ用 - 大見出し・ロゴ用
  display: {
    name: '"M PLUS 1", "Zen Kaku Gothic New", "Noto Sans JP", sans-serif',
    weights: [400, 700, 900],
    googleFonts: 'M+PLUS+1:wght@400;700;900&family=Zen+Kaku+Gothic+New:wght@400;700;900'
  }
};

// Google Fonts URL生成（最適化版）
export const getGoogleFontsUrl = () => {
  const allFonts = [
    magazineFonts.primary.googleFonts,
    magazineFonts.display.googleFonts
  ].join('&family=');
  
  return `https://fonts.googleapis.com/css2?family=${allFonts}&display=swap`;
};

// CSS変数生成
export const fontVariables = {
  '--font-primary': magazineFonts.primary.name,
  '--font-display': magazineFonts.display.name,
};

// Tailwind CSS拡張用フォント設定
export const tailwindFontFamily = {
  sans: magazineFonts.primary.name.split(', '),
  display: magazineFonts.display.name.split(', '),
}; 