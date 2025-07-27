# ドラッグ機能 Hooks

このディレクトリには、アプリケーション全体で使用されるドラッグ機能の共通 hooks が含まれています。

## 利用可能な Hooks

### `useSimpleDrag`

シンプルなドラッグ機能を提供する hook です。個別のコンポーネントで使用されます。

```typescript
import { useSimpleDrag } from "@/hooks";

const MyComponent = () => {
  const { x, y, bind } = useSimpleDrag({
    bounds: { left: -100, right: 100, top: -100, bottom: 100 },
    tension: 300,
    friction: 30,
    rubberband: true,
  });

  return (
    <animated.div style={{ x, y }} {...bind()}>
      {/* ドラッグ可能なコンテンツ */}
    </animated.div>
  );
};
```

**オプション:**

- `bounds`: ドラッグ可能な範囲を指定
- `tension`: アニメーションの張力
- `friction`: アニメーションの摩擦
- `rubberband`: 境界での伸縮効果

### `useSwipeNavigation`

セクション間のスワイプナビゲーション機能を提供する hook です。

```typescript
import { useSwipeNavigation, useWindowSize } from "@/hooks";

const App = () => {
  const { windowWidth, windowHeight } = useWindowSize();

  const { x, currentSection, moveToSection, bind } = useSwipeNavigation({
    sectionsCount: 4,
    windowWidth,
    windowHeight,
    onSectionChange: (index) => {
      console.log(`セクション ${index} に移動`);
    },
  });

  return (
    <animated.div style={{ x }} {...bind()}>
      {/* スワイプ可能なセクション */}
    </animated.div>
  );
};
```

**オプション:**

- `sectionsCount`: セクションの総数
- `windowWidth`: ウィンドウの幅
- `windowHeight`: ウィンドウの高さ
- `onSectionChange`: セクション変更時のコールバック

### `useWindowSize`

ウィンドウサイズの管理を提供する hook です。

```typescript
import { useWindowSize } from "@/hooks";

const MyComponent = () => {
  const { windowWidth, windowHeight } = useWindowSize();

  return (
    <div>
      ウィンドウサイズ: {windowWidth} x {windowHeight}
    </div>
  );
};
```

## 使用例

### 個別コンポーネントでのドラッグ

```typescript
// components/Hero.tsx
import { useSimpleDrag } from "@/hooks";

const Hero = () => {
  const { x, y, bind } = useSimpleDrag();

  return (
    <animated.div style={{ x, y }} {...bind()}>
      {/* ドラッグ可能なヒーローセクション */}
    </animated.div>
  );
};
```

### メインアプリケーションでのスワイプナビゲーション

```typescript
// app/page.tsx
import { useSwipeNavigation, useWindowSize } from "@/hooks";

export default function Home() {
  const { windowWidth, windowHeight } = useWindowSize();

  const { x, currentSection, moveToSection, bind } = useSwipeNavigation({
    sectionsCount: sections.length,
    windowWidth,
    windowHeight,
  });

  return (
    <animated.div style={{ x }} {...bind()}>
      {sections.map((section) => (
        <section.component key={section.id} />
      ))}
    </animated.div>
  );
}
```

## 利点

1. **コードの再利用性**: 同じドラッグ機能を複数のコンポーネントで使用可能
2. **保守性**: ドラッグ機能のロジックが一箇所に集約されている
3. **一貫性**: アプリケーション全体で統一されたドラッグ体験
4. **型安全性**: TypeScript による型チェック
5. **カスタマイズ性**: 各コンポーネントのニーズに応じてオプションを調整可能
