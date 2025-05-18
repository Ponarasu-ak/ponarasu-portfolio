import { ContactIcon } from "lucide-react";
import React from "react";

const About: React.FC = () => {
  return (
    <div className="text-white/65 flex flex-col gap-6 text-md lg:text-lg leading-relaxed ">
      <h3 className="text-xl flex gap-3 items-center font-semibold text-white m-0">
        <ContactIcon className="w-6 h-6 text-sky-500" />
        About
      </h3>
      <div className="leading-relaxed ">
        I’m a developer passionate about crafting accessible, pixel-perfect user
        interfaces that blend thoughtful design. My favorite work lies at the
        intersection of design and development, creating experiences and build
        for performance and usability
      </div>
      <div>
        Currently, I'm a Front-End Developer at{" "}
        <span
          onClick={() => window.open("https://www.leorainfotech.in/", "_blank")}
          className="text-white cursor-pointer text-md"
        >
          Leora Infotech
        </span>
        , specializing in accessibility. I help design, build, and maintain UI
        components that power{" "}
        <span
          onClick={() => window.open("https://aiinterview.space/", "_blank")}
          className="text-white cursor-pointer text-md"
        >
          AI Interview Space{" "}
        </span>{" "}
        and
        <span
          onClick={() => window.open("https://screening.space/", "_blank")}
          className="text-white cursor-pointer text-md"
        >
          {" "}
          Screening Space
        </span>{" "}
        frontend, ensuring our platform adheres to web accessibility standards
        and best practices to deliver inclusive, high-quality user experiences.
      </div>
      <div>
        I stay up-to-date with the latest front-end technologies and industry
        trends to keep my work sharp and forward-thinking. Outside of coding,
        you’ll often find me playing football.
      </div>
    </div>
  );
};

export { About };
