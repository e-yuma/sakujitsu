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

  const [{ x, scale, shadow, rotateY }, api] = useSpring(() => ({
    x: 0,
    scale: 1,
    shadow: 0.2,
    rotateY: 0,
    config: { tension: 300, friction: 30, mass: 0.8 },
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
          scale: 1,
          shadow: 0.2,
          rotateY: 0,
          config: { tension: 300, friction: 30, mass: 0.8 },
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

  // 初期位置設定
  useEffect(() => {
    if (windowWidth > 0) {
      api.start({
        x: -currentSection * windowWidth,
        scale: 1,
        shadow: 0.2,
        rotateY: 0,
        immediate: true,
      });
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
        }, 50);
      }

      // スワイプ感度を調整（より敏感に）
      const swipeThreshold = windowWidth;
      const velocityThreshold = 0.2;

      if (active) {
        // ドラッグ中のカード効果
        const dragAmount = Math.abs(mx);
        const maxDrag = windowWidth * 0.3;
        const dragProgress = Math.min(dragAmount / maxDrag, 1);

        // ドラッグ時のスケール効果（カードが浮き上がる）
        const scaleValue = 1 + dragProgress * 0.05;

        // 影の強さを増加
        const shadowValue = 0.2 + dragProgress * 0.3;

        // 3D回転効果
        const rotateValue = (mx / windowWidth) * 5;

        // ドラッグ中は完全に追従
        const targetX = mx - currentSection * windowWidth;
        api.start({
          x: targetX,
          scale: scaleValue,
          shadow: shadowValue,
          rotateY: rotateValue,
          immediate: true,
        });
      } else {
        const shouldSwipe =
          Math.abs(mx) > swipeThreshold || Math.abs(vx) > velocityThreshold;
        let newSection = currentSection;
        if (shouldSwipe) {
          if (xDir > 0 && currentSection > 0) {
            moveToSection(currentSection - 1);
            newSection = currentSection - 1;
            console.log("左にスワイプ - 前のセクションへ");
          } else if (xDir < 0 && currentSection < sections.length - 1) {
            moveToSection(currentSection + 1);
            console.log("右にスワイプ - 次のセクションへ");
          }
        }
      }
    },
    {
      axis: "x",
      bounds:
        windowWidth > 0
          ? {
              left: -(sections.length - 1) * windowWidth - windowWidth * 0.2,
              right: windowWidth * 0.2,
            }
          : { left: 0, right: 0 },
      rubberband: 0.1,
      filterTaps: true,
      preventScroll: true,
      pointer: {
        touch: true,
        mouse: true,
        capture: true,
      },
      threshold: 1,
    }
  );

  // ホイールスクロールで移動（PC向け）
  useEffect(() => {
    if (windowWidth === 0) return;
    let wheelTimeout: NodeJS.Timeout;
    const handleWheel = (e: WheelEvent) => {
      if (isDragging) return;
      // 縦スクロールで移動
      if (Math.abs(e.deltaY) > 10) {
        e.preventDefault();
        clearTimeout(wheelTimeout);
        wheelTimeout = setTimeout(() => {
          if (e.deltaY > 0) {
            // 下スクロール = 次のセクション
            moveToSection(currentSection + 1);
          } else if (e.deltaY < 0) {
            // 上スクロール = 前のセクション
            moveToSection(currentSection - 1);
          }
        }, 10);
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
    <div className="h-screen overflow-hidden relative bg-gradient-to-br from-black via-gray-900 to-black">
      {/* スワイプインジケーター */}
      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 flex space-x-3">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              console.log(`インジケータークリック: ${index}`);
              moveToSection(index);
            }}
            disabled={isDragging}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 disabled:pointer-events-none ${
              index === currentSection
                ? "bg-white shadow-lg shadow-white/30"
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
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{
          x,
          scale,
          rotateY: rotateY.to((r) => `${r}deg`),
          width: `${sections.length * 100}vw`,
          filter: shadow.to(
            (s) =>
              `drop-shadow(0 ${s * 40}px ${s * 80}px rgba(0,0,0,${s * 0.8}))`
          ),
          transform: scale.to((s) => `scale(${s})`),
        }}
        onDragStart={(e: React.DragEvent<HTMLDivElement>) => e.preventDefault()}
      >
        {sections.map((section, index) => {
          const Component = section.component;
          const isActive = index === currentSection;

          return (
            <div
              key={section.id}
              className={`w-screen h-full flex-shrink-0 transition-all duration-300 ${
                isDragging
                  ? "pointer-events-none select-none"
                  : "pointer-events-auto"
              } ${isActive ? "brightness-100" : "brightness-75 blur-[1px]"}`}
              style={{
                transform:
                  isDragging && isActive
                    ? "translateZ(20px)"
                    : "translateZ(0px)",
              }}
              onDragStart={(e: React.DragEvent<HTMLDivElement>) =>
                e.preventDefault()
              }
            >
              <div
                className={`h-full w-full rounded-lg overflow-hidden transition-all duration-300 ${
                  isDragging && isActive
                    ? "border border-white/20 shadow-2xl shadow-white/10"
                    : ""
                }`}
              >
                <Component />
              </div>
            </div>
          );
        })}
      </animated.div>

      {/* ナビゲーションヒント */}
      <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-40 text-white/60 text-xs text-center">
        <p className="drop-shadow-lg">
          ドラッグ・縦スクロールで移動 ({currentSection + 1}/{sections.length})
        </p>
      </div>
    </div>
  );
}
