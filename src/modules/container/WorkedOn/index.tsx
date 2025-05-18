import { Layers } from "lucide-react";
import { workedOn } from "../../../utils/constants";
import { ProjectsCard } from "../Projects";

const WorkedOn = () => {
  return (
    <div>
      <div className="md:col-span-2">
        <h3 className="text-xl flex gap-3 items-center font-semibold text-white mb-4">
          <Layers className="w-6 h-6 text-sky-500" /> Things I've Worked
        </h3>

        <p className="text-white/70 mb-6 text-md lg:text-lg">
          I've worked on a range of front-end projects that showcase my ability
          to turn design concepts into fully functional, responsive user
          interfaces. Each project reflects my commitment to writing clean,
          scalable code and delivering seamless user experiences using modern
          JavaScript frameworks and best practices.
        </p>

        <div className="space-y-5 flex flex-col gap-2 mb-6">
          {workedOn.map((item, index) => (
            <ProjectsCard data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
export { WorkedOn };
