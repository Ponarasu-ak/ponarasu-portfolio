import { SpeedInsights } from "@vercel/speed-insights/react";
import "./App.css";
import { LandingPage } from "./modules";

function App() {
  return (
    <>
      <SpeedInsights />

      <div className="">
        <LandingPage />
      </div>
    </>
  );
}

export default App;
