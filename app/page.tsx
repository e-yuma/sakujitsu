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

  return (
    <div className="h-screen overflow-hidden relative bg-black">
      {/* インジケーター - 上端におしゃれに配置 */}
      <div className="fixed top-0 left-0 right-0 z-50 p-4">
        <div className="flex justify-center">
          <div className="flex space-x-2 bg-black/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
            {sections.map((_, index) => (
              <button
                key={index}
                onClick={() => moveToSection(index)}
                className={`w-8 h-1 rounded-full transition-all duration-300 hover:scale-110 ${
                  index === currentSection
                    ? "bg-white shadow-sm"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
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
          touchAction: "pan-y pinch-zoom",
          overscrollBehavior: "none",
        }}
      >
        {sections.map((section) => {
          const Component = section.component;
          return (
            <div
              key={section.id}
              className="w-screen h-full flex-shrink-0"
              style={{ touchAction: "none" }}
            >
              <Component />
            </div>
          );
        })}
      </animated.div>
    </div>
  );
}
