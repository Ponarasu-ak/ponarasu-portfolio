import { useState, useEffect } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Modal } from "../../../components";
import {
  InsightsCard,
  NavBar,
  ProfileSection,
  ProjectsSlider,
} from "../../container";

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<"profile" | "projects">(
    "profile"
  );

  const openModal = (content: "profile" | "projects") => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  useEffect(() => {
    // Lock scroll when modal is closed, unlock when open
    document.body.style.overflow = isModalOpen ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <div className="w-full min-h-screen   sm:overflow-auto bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white p-3 relative">
      {/* Background image */}
      {/* <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-5"></div> */}

      {/* Main content */}
      <div className="relative z-10 flex flex-col h-full ">
        {/* <NavBar /> */}

        <main className="flex items-center justify-center ">
          <div className="transform w-[70%] h-[70%]  grid grid-cols-1 lg:grid-cols-2 gap-4">
            <ProfileSection openModal={() => openModal("profile")} />

            <div className="grid grid-rows-1 gap-4">
              <InsightsCard />
              <div
                onClick={() => openModal("projects")}
                className="bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden shadow-xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer flex flex-col h-48"
              >
                <ProjectsSlider />
              </div>
            </div>
          </div>
        </main>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content={modalContent}
      />
    </div>
  );
};

export { LandingPage };
