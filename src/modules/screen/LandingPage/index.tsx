import { useState } from "react";
import { profilePic } from "../../../assets/images";
import { Modal } from "../../../components";
import { NavBar } from "../../container";

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col  h-screen w-full ">
      <NavBar />
      <div className="h-full w-full flex justify-center items-center flex-wrap">
        <div className="h-[90%]  w-[70%] flex gap-4">
          <div className=" text-white shadow-2xl w-[45%] h-full flex flex-col gap-4 justify-between">
            <div style={{ opacity: 0.8, height: "90%" }}>
              <img
                src={profilePic}
                alt=""
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{height:"10%"}} className="bg-white/15 backdrop-blur-3xl border border-white/10 shadow-2xl flex items-center p-2 ">
             known skills
            </div>
            {/* <div className="flex justify-between items-center">
              <SiteIcon fillColour="#fff" height={30} width={30} />
              <div
                onClick={() => setIsModalOpen(true)}
                className="cursor-pointer"
              >
                <ExandOut fillColour="#fff" />
              </div>
            </div> */}
          </div>
          <div className=" w-[55%] h-full flex flex-col gap-4">
            <div className="h-[50%] w-full bg-white/15 backdrop-blur-3xl border border-white/10 text-white shadow-2xl p-2">
            Insights
            </div>
            <div className="h-[50%] w-full bg-white/15 backdrop-blur-3xl border p-2 border-white/10 text-white shadow-2xl ">
            projects
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export { LandingPage };
