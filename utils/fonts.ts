// 雑誌風日本語フォント設定

export const magazineFonts = {
  // メインフォント - 雑誌で最も使用される
  primary: {
    name: '"Noto Sans JP", "Zen Kaku Gothic New", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    weights: [300, 400, 500, 600, 700, 900],
    googleFonts: 'Noto+Sans+JP:wght@300;400;500;600;700;900&family=Zen+Kaku+Gothic+New:wght@300;400;500;700;900&family=Inter:wght@300;400;500;600;700;900'
  },
  
  // セリフ体 - エレガントな見出し用
  serif: {
    name: '"Noto Serif JP", "Shippori Mincho", Georgia, serif',
    weights: [300, 400, 500, 600, 700],
    googleFonts: 'Noto+Serif+JP:wght@300;400;500;600;700&family=Shippori+Mincho:wght@400;500;600;700'
  },
  
  // ディスプレイ用 - 大見出し・ロゴ用
  display: {
    name: '"M PLUS 1", "Zen Kaku Gothic New", "Noto Sans JP", sans-serif',
    weights: [400, 500, 700, 900],
    googleFonts: 'M+PLUS+1:wght@400;500;700;900&family=Zen+Kaku+Gothic+New:wght@400;500;700;900'
  },
  
  // モノスペース - コード・データ表示用
  mono: {
    name: '"JetBrains Mono", "Noto Sans Mono CJK JP", "SF Mono", Monaco, Consolas, monospace',
    weights: [400, 500, 600],
    googleFonts: 'JetBrains+Mono:wght@400;500;600'
  }
};

// Google Fonts URL生成
export const getGoogleFontsUrl = () => {
  const allFonts = [
    magazineFonts.primary.googleFonts,
    magazineFonts.serif.googleFonts,
    magazineFonts.display.googleFonts,
    magazineFonts.mono.googleFonts
  ].join('&family=');
  
  return `https://fonts.googleapis.com/css2?family=${allFonts}&display=swap`;
};

// CSS変数生成
export const fontVariables = {
  '--font-primary': magazineFonts.primary.name,
  '--font-serif': magazineFonts.serif.name,
  '--font-display': magazineFonts.display.name,
  '--font-mono': magazineFonts.mono.name,
};

// Tailwind CSS拡張用フォント設定
export const tailwindFontFamily = {
  sans: magazineFonts.primary.name.split(', '),
  serif: magazineFonts.serif.name.split(', '),
  display: magazineFonts.display.name.split(', '),
  mono: magazineFonts.mono.name.split(', '),
}; 