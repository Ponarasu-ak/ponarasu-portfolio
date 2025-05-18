import { Code } from "lucide-react";
import React from "react";
import { experienceCard } from "../../../utils/constants";
import { ExperienceCard } from "../ExperienceCard";

const Experience: React.FC = () => {
  return (
    <div>
      <div className="md:col-span-2">
        <h3 className="text-xl flex gap-3 items-center font-semibold text-white mb-4">
          <Code className="w-6 h-6 text-sky-500" /> Expreience
        </h3>

        <p className="text-white/70 mb-6 leading-relaxed text-md lg:text-lg">
          I'm a passionate front-end developer with a focus on creating
          intuitive and engaging user interfaces. With a strong foundation in
          modern JavaScript frameworks and responsive design principles, I bring
          ideas to life through clean, efficient, and maintainable code.
        </p>

        <div className="space-y-5 mb-6">
          {experienceCard.map((data, index) => (
            <ExperienceCard data={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
export { Experience };
