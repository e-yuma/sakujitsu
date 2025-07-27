import { Variants } from 'framer-motion';

// 共通アニメーション設定（パフォーマンス最適化版）
export const commonAnimations = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  
  fadeInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  
  fadeInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.4, ease: "easeOut" }
  },
  
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
  },
  
  slideInLeft: {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
  }
} as const;

// アニメーション設定ファクトリー
export const createStaggerAnimation = (delay: number = 0.1) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" }
});

export const createRotationAnimation = (duration: number = 8) => ({
  duration,
  repeat: Infinity,
  ease: "linear",
});

export const createFloatingAnimation = (duration: number = 4, delay: number = 0) => ({
  duration,
  repeat: Infinity,
  ease: "easeInOut",
  delay,
});

// ユーティリティ関数
export const getViewportConfig = (once: boolean = true) => ({
  once,
  margin: "-50px 0px"
});

// 共通のトランジション設定
export const transitions = {
  smooth: { duration: 0.3, ease: "easeOut" },
  bouncy: { type: "spring", stiffness: 400, damping: 17 },
  slow: { duration: 0.6, ease: "easeInOut" }
} as const; 