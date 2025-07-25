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
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const [{ x }, api] = useSpring(() => ({
    x: 0,
    config: { tension: 200, friction: 25, mass: 0.8 },
  }));

  // セクション移動の共通関数
  const moveToSection = useCallback(
    (index: number) => {
      if (
        index >= 0 &&
        index < sections.length &&
        index !== currentSection &&
        !isDragging
      ) {
        setCurrentSection(index);
        api.start({
          x: -index * windowWidth,
          config: { tension: 200, friction: 25, mass: 0.8 },
        });
      }
    },
    [currentSection, windowWidth, api, isDragging]
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

  // キーボードナビゲーション
  useEffect(() => {
    if (windowWidth === 0) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        moveToSection(currentSection - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        moveToSection(currentSection + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSection, moveToSection, windowWidth]);

  // 初期位置設定
  useEffect(() => {
    if (windowWidth > 0) {
      api.start({ x: -currentSection * windowWidth, immediate: true });
    }
  }, [windowWidth, api, currentSection]);

  const bind = useDrag(
    ({
      active,
      movement: [mx],
      direction: [xDir],
      velocity: [vx],
      tap,
      first,
      last,
      event,
    }) => {
      if (windowWidth === 0) return;

      // タップの場合は処理しない
      if (tap) return;

      // ドラッグ開始時の設定
      if (first) {
        setIsDragging(true);

        // 全ページのポインタイベントを無効化
        document.body.style.pointerEvents = "none";
        document.body.style.userSelect = "none";
        document.body.style.cursor = "grabbing";
        document.body.style.overflow = "hidden";

        // コンテナのみポインタイベントを有効化
        if (containerRef.current) {
          containerRef.current.style.pointerEvents = "auto";
        }

        // イベントの伝播を停止
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
      }

      // ドラッグ終了時の復元
      if (last) {
        setTimeout(() => {
          setIsDragging(false);

          // 全ての設定を元に戻す
          document.body.style.pointerEvents = "auto";
          document.body.style.userSelect = "auto";
          document.body.style.cursor = "auto";
          document.body.style.overflow = "auto";

          if (containerRef.current) {
            containerRef.current.style.pointerEvents = "auto";
          }
        }, 50); // 少し遅延させて確実に処理
      }

      // PC環境での感度調整
      const swipeThreshold = windowWidth * 0.15;
      const velocityThreshold = 0.4;

      if (active) {
        // ドラッグ中は完全に追従
        const targetX = mx - currentSection * windowWidth;
        api.start({
          x: targetX,
          immediate: true,
        });
      } else {
        // ドラッグ終了時の判定
        const shouldSwipe =
          Math.abs(mx) > swipeThreshold || Math.abs(vx) > velocityThreshold;
        let newSection = currentSection;

        if (shouldSwipe) {
          if (xDir > 0 && currentSection > 0) {
            newSection = currentSection - 1;
          } else if (xDir < 0 && currentSection < sections.length - 1) {
            newSection = currentSection + 1;
          }
        }

        // セクション移動またはリセット
        setCurrentSection(newSection);
        api.start({
          x: -newSection * windowWidth,
          config: {
            tension: 200,
            friction: 25,
            mass: 0.8,
          },
        });
      }
    },
    {
      axis: "x",
      bounds:
        windowWidth > 0
          ? {
              left: -(sections.length - 1) * windowWidth - windowWidth * 0.3,
              right: windowWidth * 0.3,
            }
          : { left: 0, right: 0 },
      rubberband: 0.2,
      filterTaps: true,
      preventScroll: true,
      pointer: {
        touch: true,
        mouse: true,
        capture: true, // ポインタキャプチャを有効化
      },
      threshold: 2,
      swipe: {
        distance: windowWidth * 0.15,
        velocity: 0.4,
      },
    }
  );

  // ホイールスクロールでの移動（PC向け）
  useEffect(() => {
    if (windowWidth === 0) return;

    let wheelTimeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      if (isDragging) return; // ドラッグ中はホイール無効

      // 横スクロールまたはShift+縦スクロールで移動
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey) {
        e.preventDefault();

        clearTimeout(wheelTimeout);
        wheelTimeout = setTimeout(() => {
          if (e.deltaX > 0 || (e.shiftKey && e.deltaY > 0)) {
            moveToSection(currentSection + 1);
          } else if (e.deltaX < 0 || (e.shiftKey && e.deltaY < 0)) {
            moveToSection(currentSection - 1);
          }
        }, 100);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(wheelTimeout);
    };
  }, [currentSection, moveToSection, windowWidth, isDragging]);

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
      {/* スワイプインジケーター */}
      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 flex space-x-3">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => moveToSection(index)}
            disabled={isDragging}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 disabled:pointer-events-none ${
              index === currentSection
                ? "bg-white shadow-lg"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* スワイプ可能なコンテナ */}
      <animated.div
        ref={containerRef}
        {...bind()}
        className={`flex h-full touch-pan-y select-none will-change-transform transition-all duration-100 ${
          isDragging ? "cursor-grabbing scale-[0.99]" : "cursor-grab scale-100"
        }`}
        style={{
          x,
          width: `${sections.length * 100}vw`,
        }}
        onDragStart={(e: React.DragEvent<HTMLDivElement>) => e.preventDefault()} // ブラウザのデフォルトドラッグを無効化
      >
        {sections.map((section, index) => {
          const Component = section.component;
          return (
            <div
              key={section.id}
              className={`w-screen h-full flex-shrink-0 transition-all duration-200 ${
                isDragging
                  ? "pointer-events-none select-none"
                  : "pointer-events-auto"
              }`}
              onDragStart={(e: React.DragEvent<HTMLDivElement>) =>
                e.preventDefault()
              }
            >
              <Component />
            </div>
          );
        })}
      </animated.div>

      {/* セクション名表示 */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div
          className={`bg-black/60 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 shadow-lg transition-all duration-200 ${
            isDragging ? "scale-95 opacity-80" : "scale-100 opacity-100"
          }`}
        >
          <span className="text-white text-sm font-medium tracking-wider">
            {sections[currentSection].name}
          </span>
        </div>
      </div>

      {/* ナビゲーションヒント */}
      <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-40 text-white/50 text-xs text-center">
        <p>
          ← → キー・ドラッグ・Shift+スクロールで移動 ({currentSection + 1}/
          {sections.length})
        </p>
      </div>
    </div>
  );
}
