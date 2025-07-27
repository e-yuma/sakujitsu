import { useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { useState, useEffect, useCallback } from "react";

interface UseSwipeNavigationOptions {
  sectionsCount: number;
  windowWidth: number;
  windowHeight: number;
  onSectionChange?: (index: number) => void;
}

export const useSwipeNavigation = ({
  sectionsCount,
  windowWidth,
  windowHeight,
  onSectionChange,
}: UseSwipeNavigationOptions) => {
  const [currentSection, setCurrentSection] = useState(0);

  const [{ x }, api] = useSpring(() => ({
    x: 0,
    config: { tension: 120, friction: 28, mass: 0.6, clamp: false },
  }));

  // セクション移動の共通関数
  const moveToSection = useCallback(
    (index: number) => {
      if (index >= 0 && index < sectionsCount) {
        setCurrentSection(index);
        onSectionChange?.(index);
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
    [sectionsCount, windowWidth, api, onSectionChange]
  );

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
    ({ active, movement: [mx], velocity: [vx], last, event, first }) => {
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
        if (currentSection === sectionsCount - 1 && mx < 0) {
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
          } else if (mx < 0 && currentSection < sectionsCount - 1) {
            newSection = currentSection + 1;
            shouldMove = true;
          }
        }

        if (shouldMove) {
          // セクション移動時：現在のドラッグ位置から滑らかにスライド
          const targetX = -newSection * windowWidth;

          // より自然なアニメーション設定
          setCurrentSection(newSection);
          onSectionChange?.(newSection);

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
      preventScroll: false,
      rubberband: true, // 自然な伸縮感
      pointer: {
        touch: true,
        mouse: true,
        capture: false,
      },
      threshold: 10,
    }
  );

  return {
    x,
    currentSection,
    moveToSection,
    bind,
  };
}; 