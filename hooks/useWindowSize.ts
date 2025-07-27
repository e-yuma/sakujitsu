import { useState, useEffect } from "react";

export const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    updateWindowSize();
    window.addEventListener("resize", updateWindowSize);
    window.addEventListener("orientationchange", updateWindowSize);

    return () => {
      window.removeEventListener("resize", updateWindowSize);
      window.removeEventListener("orientationchange", updateWindowSize);
    };
  }, []);

  return {
    windowWidth,
    windowHeight,
  };
}; 