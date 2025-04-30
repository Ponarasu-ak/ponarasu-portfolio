import { SpeedInsights } from "@vercel/speed-insights/react";
import "./App.css";
import { SiteIcon, SiteIconWithText } from "./assets";

function App() {
  return (
    <>
      <SpeedInsights />

      <div className=""  >
        <SiteIcon  /> ponarasu <SiteIconWithText height={40} width={100}   />
      </div>
    </>
  );
}

export default App;
