import { Code, ExternalLink, Layers } from "lucide-react";
import { useEffect, useState } from "react";
import { Git, Linkdin, Twitter } from "../../../assets";
import {
  intrvuspaceP,
  sasmicroP,
  screeningspaceP,
} from "../../../assets/images";
import { Resume } from "../../../assets/pdf";
import { Contact, SplashScreen } from "../../container";

const LandingPage = () => {
  const [contact, setContact] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div
      className="lg:flex h-screen overflow-scroll text-white min-h-screen  px-4 md:px-10"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <style>
        {`
        ::-webkit-scrollbar {
        display: none;
        }
      `}
      </style>
      <div className=" w-full lg:w-[45%] lg:h-full lg:py-28 lg:pl-6 mt-28 lg:mt-0 ">
        <div className="flex flex-col gap-6 lg:justify-between h-full">
          <div className="flex flex-col gap-5">
            <div className="text-5xl font-bold">Ponarasu</div>
            <div className="text-lg font-medium text-white/65  ">
              Front End Developer
            </div>
            <div className="text-md text-white/65 ">
              I create clean, accessible, and <br />
              pixel-perfect interfaces for the web.
            </div>
          </div>
          <div className="flex gap-8">
            <Twitter fillColour="#fff" height={25} width={25} />
            <Git fillColour="#fff" height={25} width={25} />
            <Linkdin fillColour="#fff" height={25} width={25} /> /{" "}
            <div
              className="cursor-pointer"
              onClick={() => window.open(Resume, "_blank")}
            >
              Resume
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[50%] h-full lg:overflow-auto py-28 ">
        <div className="md:col-span-2 flex flex-col gap-28">
          <div className="text-white/65 flex flex-col gap-7 text-lg leading-relaxed">
            <div>
              I’m a developer passionate about crafting accessible,
              pixel-perfect user interfaces that blend thoughtful design with
              robust engineering. My favorite work lies at the intersection of
              design and development, creating experiences that not only look
              great but are meticulously built for performance and usability
            </div>
            <div>
              Currently, I'm a Front-End Developer at{" "}
              <span className="text-white cursor-pointer">Leora Infotech</span>,
              specializing in accessibility. I help design, build, and maintain
              UI components that power{" "}
              <span className="text-white cursor-pointer">
                ai-interview.space{" "}
              </span>{" "}
              and
              <span className="text-white cursor-pointer">
                {" "}
                alp.screening.space
              </span>{" "}
              frontend, ensuring our platform adheres to web accessibility
              standards and best practices to deliver inclusive, high-quality
              user experiences.
            </div>
            <div>
              I stay up-to-date with the latest front-end technologies and
              industry trends to keep my work sharp and forward-thinking.
              Outside of coding, you’ll often find me playing football.
            </div>
          </div>
          {/* project */}
          <div>
            <div className="md:col-span-2">
              <h3 className="text-2xl flex gap-3 items-center font-semibold text-white mb-4">
                <Code className="w-6 h-6 text-sky-500" /> Expreience
              </h3>

              <p className="text-white/70 mb-6 leading-relaxed text-lg">
                I'm a passionate front-end developer with a focus on creating
                intuitive and engaging user interfaces. With a strong foundation
                in modern JavaScript frameworks and responsive design
                principles, I bring ideas to life through clean, efficient, and
                maintainable code.
              </p>

              <div className="space-y-5 mb-6">
                <div className="p-4 bg-white/5 rounded-lg border border-white/20">
                  <div className="flex justify-between mb-1">
                    <h5 className="font-medium text-white">
                      Front-End Developer
                    </h5>
                    <span className="text-blue-300 text-sm">
                      2024 - Present
                    </span>
                  </div>
                  <div className="text-white/60 text-sm mb-2">
                    Leora Infotech.
                  </div>
                  <p className="text-white/80 text-sm mb-4">
                    Led front-end development for various client projects,
                    implementing modern UI frameworks and optimizing
                    performance.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "JavaScript",
                      "React",
                      "TypeScript",
                      "Tailwind CSS",
                      "Next.js",
                      "Git",
                      "Figma",
                      "REST API",
                    ].map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-white/5 rounded-lg border border-white/20">
                  <div className="flex justify-between mb-1">
                    <h5 className="font-medium text-white">Intern</h5>
                    <span className="text-blue-300 text-sm">2023 - 2024</span>
                  </div>
                  <div className="text-white/60 text-sm mb-2">
                    Leora Infotech.
                  </div>
                  <p className="text-white/80 text-sm mb-4">
                    Familiar with front-end technologies such as HTML5, CSS,
                    JavaScript, and React.js. Completed projects building
                    responsive web pages and learning modern UI/UX principles.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["JavaScript", "React", "Git"].map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/20">
                  <div className="flex justify-between mb-1">
                    <h5 className="font-medium text-white">Intern</h5>
                    <span className="text-blue-300 text-sm">2023</span>
                  </div>
                  <div className="text-white/60 text-sm mb-2">
                    Cognizant Technology Solutions.
                  </div>
                  <p className="text-white/80 text-sm mb-4">
                    Successfully gained valuable experience in automation
                    testing with a special focus on selenium and java
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["selenium", "java", "Git"].map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* worked on  */}
          <div>
            <div className="md:col-span-2">
              {/* <h3 className="text-2xl font-semibold text-white mb-4">
                Things I've Worked
              </h3> */}
              <h3 className="text-2xl flex gap-3 items-center font-semibold text-white mb-4">
                <Layers className="w-6 h-6 text-sky-500" /> Things I've Worked
              </h3>

              <p className="text-white/70 mb-6 leading-relaxed text-lg">
                I've worked on a range of front-end projects that showcase my
                ability to turn design concepts into fully functional,
                responsive user interfaces. Each project reflects my commitment
                to writing clean, scalable code and delivering seamless user
                experiences using modern JavaScript frameworks and best
                practices.
              </p>

              <div className="space-y-5 flex flex-col gap-2 mb-6">
                <div className="p-4  w-full lg:flex gap-4 bg-white/5 rounded-lg border border-white/20">
                  <div className="flex items-center lg:w-[40%]  justify-center">
                    <img
                      style={{ objectFit: "fill" }}
                      src={intrvuspaceP}
                      alt=""
                    />
                  </div>
                  <div className="lg:w-[60%] ">
                    <div className="flex justify-between mb-3">
                      <h5 className="font-medium text-lg text-white">
                        aiinterview.space
                      </h5>
                      <a
                        href={"#"}
                        className="p-1.5 rounded-full bg-white/10 hover:bg-blue-500/20 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} className="text-white" />
                      </a>
                    </div>

                    <p className="text-white/80 text-sm mb-0">
                      AI Interview Space is an AI-based Interviewing and
                      Reporting solution, that helps you conduct fully automated
                      interviews using AI interviewers and generate multiple
                      comprehensive reports.
                    </p>
                  </div>
                </div>
                <div className="p-4  w-full lg:flex gap-4 bg-white/5 rounded-lg border border-white/20">
                  <div className="flex items-center lg:w-[40%]  justify-center">
                    <img
                      style={{ objectFit: "fill" }}
                      src={screeningspaceP}
                      alt=""
                    />
                  </div>
                  <div className="lg:w-[60%] ">
                    <div className="flex justify-between mb-3">
                      <h5 className="font-medium text-lg text-white">
                        screening.space
                      </h5>
                      <a
                        href={"#"}
                        className="p-1.5 rounded-full bg-white/10 hover:bg-blue-500/20 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} className="text-white" />
                      </a>
                    </div>

                    <p className="text-white/80 text-sm mb-0">
                      Instantly filter out unqualified candidates withAI-Powered
                      resumeparsing and keyword matching. Focus your time on the
                      best-fit candidates.
                    </p>
                  </div>
                </div>
                <div className="p-4  w-full lg:flex gap-4 bg-white/5 rounded-lg border border-white/20">
                  <div className="flex items-center lg:w-[40%]  justify-center">
                    <img style={{ objectFit: "fill" }} src={sasmicroP} alt="" />
                  </div>
                  <div className="lg:w-[60%] ">
                    <div className="flex justify-between mb-3">
                      <h5 className="font-medium text-lg text-white">
                        sasmicro.in
                      </h5>
                      <a
                        href={"#"}
                        className="p-1.5 rounded-full bg-white/10 hover:bg-blue-500/20 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} className="text-white" />
                      </a>
                    </div>

                    <p className="text-white/80 text-sm mb-0">
                      A startup focused on food safety solutions. I contributed
                      to building a responsive, user-friendly platform that
                      offers expert guidance, training, and regulatory support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* final touch */}
          <div className="text-sm font-medium">
            Sketched in Figma and coded in Visual Studio Code. Built with React
            Vite and Tailwind magic , Launched into the internet by Vercel.
            Dressed to impress in Inter.
          </div>
        </div>
      </div>

      <Contact setIsContactVisible={setContact} isContactVisible={contact} />
    </div>
  );
};

export { LandingPage };
