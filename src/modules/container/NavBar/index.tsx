import { useState } from "react";
import { SayHi, SiteIconWithText } from "../../../assets";
import { ContactSideBar } from "../ContactSideBar";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="flex  items-center justify-between">
      <SiteIconWithText fillColour="#fff" height={80} width={120} />
      <div
        className="text-white cursor-pointer flex gap-2 "
        onClick={() => setIsVisible(true)}
      >
        Say Hi <SayHi fillColour="#fff" height={20} width={20}/>
      </div>
      <ContactSideBar isVisible={isVisible} onclose={setIsVisible} />
    </div>
  );
};

export { NavBar };
