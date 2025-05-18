import { SpeedInsights } from "@vercel/speed-insights/react";
import { useEffect, useState } from "react";
import { LandingPage, SplashScreen } from "./modules";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-white">
      <SpeedInsights />
      {showSplash ? <SplashScreen /> : <LandingPage />}
    </div>
  );
}

export default App;
