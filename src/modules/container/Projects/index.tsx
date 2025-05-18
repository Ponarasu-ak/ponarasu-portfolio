import { ArrowUpRight } from "lucide-react";

interface ProjectsCardprops {
  data: any;
  key: any;
}

const ProjectsCard: React.FC<ProjectsCardprops> = ({ data, key }) => {
  const { title, description, image, link } = data;

  return (
    <div
      key={key}
      onClick={() => window.open(`${link}`, "_blank")}
      className="p-3 w-full lg:flex gap-4 bg-white/5 rounded-lg border border-white/20 hover:border-white/40 cursor-pointer transition-colors duration-300"
    >
      <div className="flex items-center lg:w-[40%]  justify-center">
        <img style={{ objectFit: "fill" }} src={image} alt="image" />
      </div>
      <div className="lg:w-[60%] mt-6 lg:mt-0 ">
        <div className="flex justify-between mb-3">
          <h5 className="font-medium text-lg text-white">{title}</h5>
          <a
            href={"#"}
            className="p-1.5 rounded-full bg-white/10 hover:bg-blue-500/20 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ArrowUpRight size={18} className="text-white" />
          </a>
        </div>

        <p className="text-white/80 text-sm mb-0">{description}</p>
      </div>
    </div>
  );
};

export { ProjectsCard };
