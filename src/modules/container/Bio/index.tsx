import { Git, Linkdin, Resume, Twitter } from "../../../assets";

const Bio = () => {
  return (
    <div className="flex flex-col gap-6 lg:justify-between h-full">
      <div className="flex flex-col gap-5">
        <div className="text-5xl font-bold">Ponarasu</div>
        <div className="text-lg font-medium text-white/65 relative overflow-hidden">
          <span className=" text-sky-500">Front End Developer</span>
        </div>
        <div className="text-md text-white/65 ">
          I create clean, accessible, and <br />
          pixel-perfect interfaces for the web.
        </div>
      </div>
      <div className="flex mt-4 lg:mt-0 items-center  gap-8">
        <div
          className="cursor-pointer"
          onClick={() => window.open("https://x.com/Naveen_ponarasu", "_blank")}
        >
          <Twitter
            fillColour="#fff"
            height={25}
            width={25}
            onClick={() => {}}
          />
        </div>
        <div
          className="cursor-pointer"
          onClick={() =>
            window.open("https://github.com/Ponarasu-ak", "_blank")
          }
        >
          <Git fillColour="#fff" height={25} width={25} onClick={() => {}} />
        </div>
        <div
          className="cursor-pointer"
          onClick={() =>
            window.open("https://www.linkedin.com/in/ponarasu-ak/", "_blank")
          }
        >
          <Linkdin fillColour="#fff" height={25} width={25} />
        </div>{" "}
        <span className="text-sky-500">|</span>{" "}
        <div
          className="cursor-pointer"
          onClick={() => window.open(Resume, "_blank")}
        >
          Resume
        </div>
      </div>
    </div>
  );
};

export { Bio };
