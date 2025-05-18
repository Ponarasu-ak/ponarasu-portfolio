import { useState } from "react";
import { About, Bio, Contact, Experience } from "../../container";
import { WorkedOn } from "../../container/WorkedOn";

const LandingPage = () => {
  const [contact, setContact] = useState(false);
  return (
    <div
      className="lg:flex h-screen screen-control overflow-scroll text-white min-h-screen px-4 md:px-16"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <style>
        {`
        ::-webkit-scrollbar {
        display: none;
        }
        .screen-control{
         max-width: 1280px;
         margin: 0 auto;
        }
      `}
      </style>
      <div className=" w-full lg:w-[45%] lg:h-full lg:py-28 lg:pl-6 mt-28 lg:mt-0 ">
        {/* {bio} */}
        <Bio />
      </div>
      <div className="w-full lg:w-[50%] h-full lg:overflow-auto py-28 ">
        <div className="md:col-span-2 flex flex-col gap-16 lg:gap-28">
          {/* about */}
          <About />
          {/* experience */}
          <Experience />
          {/* worked on  */}
          <WorkedOn />
          {/* final touch */}
          <div className=" text-sm lg:text-md mb-16 lg:mb-0 text-white/60 font-medium">
            Sketched in <span className="text-white">Figma</span> and coded in{" "}
            <span className="text-white">Visual Studio </span>. Built with{" "}
            <span className="text-white">React </span>
            Vite and <span className="text-white">Tailwind</span>, Launched into
            the internet by <span className="text-white">Vercel</span>. Dressed
            to impress in <span className="text-white">Inter</span>.
          </div>
        </div>
      </div>
      <Contact setIsContactVisible={setContact} isContactVisible={contact} />
    </div>
  );
};

export { LandingPage };
