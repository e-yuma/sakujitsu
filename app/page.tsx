"use client";

import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { useState, useEffect, useCallback, useRef } from "react";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import About from "@/components/About";
import Music from "@/components/Music";

const sections = [
  { id: "hero", component: Hero, name: "Hero" },
  { id: "works", component: Works, name: "Works" },
  { id: "about", component: About, name: "About" },
  { id: "music", component: Music, name: "Music" },
];

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const [{ x }, api] = useSpring(() => ({
    x: 0,
    config: { tension: 120, friction: 28, mass: 0.6, clamp: false },
  }));

  // セクション移動の共通関数
  const moveToSection = useCallback(
    (index: number) => {
      if (index >= 0 && index < sections.length) {
        setCurrentSection(index);
        api.start({
          x: -index * windowWidth,
          config: {
            tension: 120,
            friction: 28,
            mass: 0.6,
            clamp: false,
          },
        });
      }
    },
    [currentSection, windowWidth, api]
  );

  // ウィンドウサイズの初期化と監視
  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    updateWindowWidth();
    window.addEventListener("resize", updateWindowWidth);

    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  // 初期位置設定
  useEffect(() => {
    if (windowWidth > 0) {
      api.start({
        x: -currentSection * windowWidth,
        immediate: true,
      });
    }
  }, [windowWidth, api, currentSection]);

  // スワイプハンドラー
  const bind = useDrag(
    ({
      active,
      movement: [mx],
      direction: [xDir],
      velocity: [vx],
      last,
      event,
      first,
    }) => {
      if (windowWidth === 0) return;

      // ブラウザのネイティブジェスチャーを防止
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }

      // ドラッグ開始時にページ全体のスクロールとタッチアクションを無効化
      if (first) {
        document.body.style.overscrollBehavior = "none";
        document.body.style.touchAction = "none";
        document.documentElement.style.overscrollBehavior = "none";
        document.documentElement.style.touchAction = "none";
      }

      // ドラッグ終了時に設定を復元
      if (last) {
        setTimeout(() => {
          document.body.style.overscrollBehavior = "auto";
          document.body.style.touchAction = "auto";
          document.documentElement.style.overscrollBehavior = "auto";
          document.documentElement.style.touchAction = "auto";
        }, 100);
      }

      if (active) {
        // ドラッグ中は追従（境界制限付き）
        let targetX = mx - currentSection * windowWidth;

        // 左端での制限（最初のセクション）
        if (currentSection === 0 && mx > 0) {
          targetX = Math.min(mx * 0.15, windowWidth * 0.15);
        }

        // 右端での制限（最後のセクション）
        if (currentSection === sections.length - 1 && mx < 0) {
          targetX =
            -currentSection * windowWidth +
            Math.max(mx * 0.15, -windowWidth * 0.15);
        }

        api.start({
          x: targetX,
          immediate: true, // ドラッグ中は即座に反応
        });
      } else if (last) {
        // より洗練された判定ロジック
        const swipeDistance = Math.abs(mx);
        const swipeVelocity = Math.abs(vx);

        // 速度ベースの閾値調整
        const baseThreshold = windowWidth * 0.15; // 基本閾値を低く
        const velocityThreshold = 0.3; // 速度閾値
        const maxVelocityBonus = windowWidth * 0.1; // 速度による閾値減少

        // 速度に応じて閾値を動的調整
        const dynamicThreshold = Math.max(
          baseThreshold - swipeVelocity * maxVelocityBonus,
          windowWidth * 0.08 // 最小閾値
        );

        let newSection = currentSection;
        let shouldMove = false;

        // より自然な判定
        if (
          swipeDistance > dynamicThreshold ||
          swipeVelocity > velocityThreshold
        ) {
          if (mx > 0 && currentSection > 0) {
            newSection = currentSection - 1;
            shouldMove = true;
          } else if (mx < 0 && currentSection < sections.length - 1) {
            newSection = currentSection + 1;
            shouldMove = true;
          }
        }

        if (shouldMove) {
          // セクション移動時：現在のドラッグ位置から滑らかにスライド
          const targetX = -newSection * windowWidth;

          // より自然なアニメーション設定
          setCurrentSection(newSection);

          api.start({
            x: targetX,
            config: {
              tension: 60, // より緩やかに
              friction: 20, // より滑らかに
              mass: 1.2, // 重めで自然に
              clamp: false,
            },
          });
        } else {
          // 復帰時：弾力のある動き
          api.start({
            x: -currentSection * windowWidth,
            config: {
              tension: 150,
              friction: 28,
              mass: 1.0,
              clamp: true,
            },
          });
        }
      }
    },
    {
      axis: "x",
      filterTaps: true,
      preventScroll: true,
      rubberband: true, // 自然な伸縮感
      pointer: {
        touch: true,
        mouse: true,
        capture: true,
      },
      threshold: 2,
    }
  );

  // 縦スクロールで移動
  useEffect(() => {
    if (windowWidth === 0) return;

    let wheelTimeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 10) {
        e.preventDefault();

        clearTimeout(wheelTimeout);
        wheelTimeout = setTimeout(() => {
          if (e.deltaY > 0) {
            moveToSection(currentSection + 1);
          } else if (e.deltaY < 0) {
            moveToSection(currentSection - 1);
          }
        }, 50);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(wheelTimeout);
    };
  }, [currentSection, moveToSection, windowWidth]);

  // ローディング中の表示
  if (windowWidth === 0) {
    return (
      <div className="h-screen flex items-center justify-center bg-black">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="h-screen overflow-hidden relative bg-black">
      {/* インジケーター */}
      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 flex space-x-3">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => moveToSection(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentSection
                ? "bg-white shadow-lg shadow-white/30"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* 微妙な左端グラデーション（前のセクションがある時） */}
      {currentSection > 0 && (
        <div className="fixed left-0 top-0 w-8 h-full z-30 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-r from-white/5 to-transparent"></div>
        </div>
      )}

      {/* 微妙な右端グラデーション（次のセクションがある時） */}
      {currentSection < sections.length - 1 && (
        <div className="fixed right-0 top-0 w-8 h-full z-30 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-l from-white/5 to-transparent"></div>
        </div>
      )}

      {/* 最初の訪問時のみ：さりげないスワイプヒント */}
      <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none">
        <div className="flex items-center space-x-2 opacity-40">
          <div className="w-6 h-0.5 bg-white/50 rounded-full transform -translate-x-1"></div>
          <div className="w-2 h-2 bg-white/30 rounded-full"></div>
          <div className="w-6 h-0.5 bg-white/50 rounded-full transform translate-x-1"></div>
        </div>
      </div>

      {/* スワイプコンテナ */}
      <animated.div
        ref={containerRef}
        {...bind()}
        className="flex h-full cursor-grab active:cursor-grabbing select-none"
        style={{
          x,
          width: `${sections.length * 100}vw`,
          touchAction: "pan-y pinch-zoom", // 縦スクロールとピンチズームのみ許可
          overscrollBehavior: "none", // オーバースクロール無効
        }}
      >
        {sections.map((section) => {
          const Component = section.component;
          return (
            <div
              key={section.id}
              className="w-screen h-full flex-shrink-0"
              style={{ touchAction: "none" }} // セクション内ではタッチアクション完全無効
            >
              <Component />
            </div>
          );
        })}
      </animated.div>
    </div>
  );
}
