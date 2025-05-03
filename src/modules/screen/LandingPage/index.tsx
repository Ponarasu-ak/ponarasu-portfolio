import { useState } from "react";
import { MoveOut, SiteIcon } from "../../../assets";
import { Modal } from "../../../components";
import { NavBar } from "../../container";

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col  h-screen w-full ">
      <NavBar />
      <div className="h-full w-full flex justify-center items-center flex-wrap">
        <div className="h-[90%]  w-[70%] flex gap-4">
          <div className="bg-white/15 backdrop-blur-3xl border border-white/10 text-white shadow-2xl w-[45%] h-full p-4">
            <div className="flex justify-between items-center">
              <SiteIcon fillColour="#fff" height={30} width={30} />
              <div onClick={()=>setIsModalOpen(true)} className="cursor-pointer">
                <MoveOut fillColour="#fff" />
              </div>
            </div>
          </div>
          <div className=" w-[55%] h-full flex flex-col gap-4">
            <div className="h-[50%] w-full bg-white/15 backdrop-blur-3xl border border-white/10 text-white shadow-2xl "></div>
            <div className="h-[50%] w-full bg-white/15 backdrop-blur-3xl border border-white/10 text-white shadow-2xl "></div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export { LandingPage };
