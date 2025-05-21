import { useEffect, useState } from "react";

function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    screenWidth: typeof window !== "undefined" ? window.innerWidth : 0,
    screenHeight: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const updateDimensions = () => {
      setScreenSize({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
      });
    };
    window.addEventListener("resize", updateDimensions);
    updateDimensions();
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return screenSize;
}

export { useScreenSize };
