import { useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Git, Linkdin, Twitter } from "../../../assets";
import { profilePic } from "../../../assets/images";
import { Modal, SimpleSlider } from "../../../components";
import { NavBar } from "../../container";
import { ProjectsContent } from "../../container/ProjectsContent";

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<"profile" | "projects">(
    "profile"
  );

  return (
    <div className="flex flex-col h-screen w-full bg-gradient-to-br from-black via-gray-900 to-blue-900 px-6">
      <NavBar />
      <div className="flex flex-1 items-center justify-center">
        <div className="flex flex-col lg:flex-row h-[90%] w-[90%] md:w-[80%] lg:w-[70%] gap-6">
          {/* Profile Section */}
          <div
            className="flex-1 relative text-white border border-white/20 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            onClick={() => {
              setIsModalOpen(true);
              setModalContent("profile");
            }}
          >
            <img
              src={profilePic}
              alt="Profile"
              className="h-full w-full object-cover filter brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 flex flex-col justify-end">
              <h1 className="text-2xl font-bold">Ponarasu</h1>
              <p className="text-sm text-gray-300">Front-End Developer</p>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <Linkdin fillColour="#fff" height={24} width={24} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <Twitter fillColour="#fff" height={24} width={24} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <Git fillColour="#fff" height={24} width={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Projects and Contact Section */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Projects Section */}
            <div
              className="flex-1 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              onClick={() => {
                setIsModalOpen(true);
                setModalContent("projects");
              }}
            >
              <ProjectsContent />
              {/* <SimpleSlider /> */}
            </div>

            {/* Contact Section */}
            {/* <div className="flex-1 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-lg font-semibold text-white">Contact</h2>
              <form className="flex flex-col gap-4 mt-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content={modalContent}
      />
    </div>
  );
};

export { LandingPage };
