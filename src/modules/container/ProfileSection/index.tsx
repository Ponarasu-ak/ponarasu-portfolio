import React from "react";
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";

type ProfileSectionProps = {
  openModal: () => void;
};

const ProfileSection: React.FC<ProfileSectionProps> = ({ openModal }) => {
  return (
    <div
      className="relative  min-h-[300px] overflow-hidden  border border-white/20 shadow-xl hover:shadow-blue-500/20 transition-all duration-500"
      onClick={openModal}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>

      {/* Profile Image with overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
          alt="Ponarasu"
          className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
          style={{ filter: "brightness(0.8)" }}
        />
      </div>

      {/* Content Container */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-6 transform translate-y-0 transition-transform duration-300">
        <div className="space-y-4">
          {/* Name and Title with View Button */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              Ponarasu <span className="text-blue-400">/</span>{" "}
              <span className="text-white/80 font-normal">
                Front-End Developer
              </span>
            </h2>
            <div className="bg-blue-500/20 backdrop-blur-sm p-2 rounded-full border border-blue-400/30 group-hover:bg-blue-500/30 transition-all duration-300">
              <ArrowUpRight size={20} className="text-blue-300" />
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

          {/* Social Links */}
          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 border border-white/20 rounded-full hover:bg-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <Linkedin size={18} className="text-white" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 border border-white/20 rounded-full hover:bg-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <Twitter size={18} className="text-white" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 border border-white/20 rounded-full hover:bg-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={18} className="text-white" />
            </a>
          </div>

          {/* Skills (Only visible on hover on larger screens) */}
          <div className="overflow-hidden h-0 md:group-hover:h-12 transition-all duration-500 opacity-0 md:group-hover:opacity-100">
            <div className="flex gap-2 flex-wrap">
              {["JavaScript", "React", "TypeScript", "Tailwind", "Node.js"].map(
                (skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 bg-white/10 border border-white/20 rounded-full"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProfileSection };
