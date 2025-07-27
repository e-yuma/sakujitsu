"use client";

import { useEffect } from "react";

// パフォーマンス監視用の型定義
interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Core Web Vitals監視
    if (typeof window !== "undefined" && "PerformanceObserver" in window) {
      // LCP (Largest Contentful Paint)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log("LCP:", lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });

      // FID (First Input Delay)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fidEntry = entry as PerformanceEventTiming;
          console.log("FID:", fidEntry.processingStart - fidEntry.startTime);
        });
      });
      fidObserver.observe({ entryTypes: ["first-input"] });

      // CLS (Cumulative Layout Shift)
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const clsEntry = entry as LayoutShift;
          if (!clsEntry.hadRecentInput) {
            clsValue += clsEntry.value;
          }
        });
        console.log("CLS:", clsValue);
      });
      clsObserver.observe({ entryTypes: ["layout-shift"] });

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  return null;
};

export default PerformanceMonitor;
