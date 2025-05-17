import { SpeedInsights } from "@vercel/speed-insights/react";
import "./App.css";
import { LandingPage, SplashScreen } from "./modules";
import { useEffect, useState } from "react";

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
