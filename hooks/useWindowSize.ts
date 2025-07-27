import { useState, useEffect, useCallback } from "react";

export const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const updateWindowSize = useCallback(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    updateWindowSize();
    
    // デバウンス付きリサイズハンドラー
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateWindowSize, 100);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("orientationchange", updateWindowSize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", updateWindowSize);
      clearTimeout(timeoutId);
    };
  }, [updateWindowSize]);

  return {
    windowWidth,
    windowHeight,
  };
}; 