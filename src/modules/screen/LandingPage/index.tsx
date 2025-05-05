import { useState } from "react";
import { ArrowRight, Git, Linkdin, Twitter } from "../../../assets";
import { profilePic } from "../../../assets/images";
import { Modal, SimpleSlider } from "../../../components";
import { NavBar } from "../../container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col  h-screen w-full ">
      <NavBar />
      <div className="h-full w-full flex items-center justify-center ">
        <div className="h-[90%] w-[90%] md:w-[80%] lg:w-[60%] grid grid-cols-1 lg:grid-cols-2 gap-4 ">
          <div className="text-white border border-white/20 flex flex-col gap-4 justify-between">
            <div
              className="relative cursor-pointer"
              style={{
                opacity: 0.9,
                height: "100%",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset",
              }}
              onClick={() => setIsModalOpen(true)}
            >
              <img
                src={profilePic}
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.9)",
                }}
              />
              <div className="absolute bottom-0 bg-gradient-to-t  from-black via-black/80 to-transparent flex flex-col gap-3 w-full p-4 ">
                <div className="flex justify-between items-center text-white text-lg font-semibold">
                  <span>Ponarasu / Front-End Developer</span>
                  <ArrowRight fillColour="#fff" />
                </div>
                <div className="h-px bg-white/20" />
                <div className="flex gap-6 pt-3">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkdin fillColour="#fff" height={20} width={20} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter fillColour="#fff" height={20} width={20} />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Git fillColour="#fff" height={20} width={20} />
                  </a>
                </div>
              </div>
            </div>
            {/* <div
          style={{ height: "10%" }}
          className="bg-white/15 backdrop-blur-3xl border border-white/10 shadow-2xl p-2 overflow-hidden relative"
        >
          <style>
            {`
          @keyframes scrollHorizontal {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
            `}
          </style>
          <div
            style={{
          animation: "scrollHorizontal 20s linear infinite",
          whiteSpace: "nowrap",
          display: "flex",
          gap: "2rem",
            }}
            className="absolute inset-0 items-center text-white"
          >
            <div style={{ display: "flex", gap: "2rem" }}>
              {["JavaScript", "React", "CSS", "HTML", "Node.js", "Tailwind"].map((skill, idx) => (
                <div
                  key={idx}
                  className="text-sm px-4 py-1 bg-white/10 border border-white/20 rounded-full shadow"
                >
                  {skill}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: "2rem" }}>
              {["JavaScript", "React", "CSS", "HTML", "Node.js", "Tailwind"].map((skill, idx) => (
                <div
                  key={`duplicate-${idx}`}
                  className="text-sm px-4 py-1 bg-white/10 border border-white/20 rounded-full shadow"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div> */}
            
          </div>
          <div className="grid grid-rows-1 gap-4 ">
            <div className="bg-white/15 backdrop-blur-3xl border border-white/10 text-white ">
              Insights 
            </div>
            <div
              style={{}}
              className="bg-white/15 backdrop-blur-3xl border border-white/10 text-white  "
            >
              <SimpleSlider />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="text-end pb-2 cursor-pointer">
      ✨
      </div> */}
      {/* <div className="text-white text-center mt-6 text-sm">
        Sketched in Figma, built in VS Code, styled with Tailwind, powered by Vite, and launched with Vercel.
      </div> */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export { LandingPage };
