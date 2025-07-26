import { AnimationConfig, MotionVariants } from '../types';

// 共通アニメーション設定
export const commonAnimations = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  },
  
  fadeInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 }
  },
  
  fadeInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 }
  },
  
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 1 }
  },
  
  slideInLeft: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.6 }
  }
} as const;

// アニメーション設定ファクトリー
export const createStaggerAnimation = (delay: number = 0.1) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay }
});

export const createRotationAnimation = (duration: number = 8): AnimationConfig => ({
  duration,
  repeat: Infinity,
  ease: "linear",
});

export const createFloatingAnimation = (duration: number = 4, delay: number = 0): AnimationConfig => ({
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