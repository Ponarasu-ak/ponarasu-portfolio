import { NavBar } from "../../container";

const LandingPage = () => {
  return (
    <div className="flex flex-col  h-screen w-full ">
      <NavBar />
      <div className="h-full w-full flex justify-center items-center flex-wrap">
        <div className="h-[90%]  w-[70%] flex gap-4">
          <div className="bg-[#F9FFFC] w-[45%] h-full  ">
          </div>
          <div className=" w-[55%] h-full flex flex-col gap-4">
            <div className="h-[50%] w-full bg-[#B3D4FC] "></div>
            <div className="h-[50%] w-full bg-pink-300  "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LandingPage };
