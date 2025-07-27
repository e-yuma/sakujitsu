import { useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

interface UseDragOptions {
  bounds?: {
    left: number;
    right: number;
    top: number;
    bottom: number;
  };
  tension?: number;
  friction?: number;
  rubberband?: boolean;
}

export const useSimpleDrag = (options: UseDragOptions = {}) => {
  const {
    bounds = { left: -100, right: 100, top: -100, bottom: 100 },
    tension = 300,
    friction = 30,
    rubberband = true,
  } = options;

  const [{ x, y }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    config: { tension, friction },
  }));

  const bind = useDrag(
    ({ active, movement: [mx, my], last }) => {
      if (active) {
        // ドラッグ中は追従
        api.start({
          x: mx,
          y: my,
          immediate: true,
        });
      } else if (last) {
        // ドラッグ終了時は元の位置に戻る
        api.start({
          x: 0,
          y: 0,
          config: { tension, friction },
        });
      }
    },
    {
      bounds,
      rubberband,
    }
  );

  return {
    x,
    y,
    bind,
  };
}; 