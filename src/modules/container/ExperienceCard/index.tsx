import React from "react";

interface ExperienceCardProps {
  data?: any;
  key?: any;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ data, key }) => {
  const { title, company, duration, description, skills } = data;
  return (
    <div key={key} className="p-4 bg-white/5 rounded-lg border border-white/20">
      <div className="flex justify-between mb-1">
        <h5 className="font-medium text-white">{title}</h5>
        <span className="text-sky-500 text-sm">{duration}</span>
      </div>
      <div className="text-white/60 text-sm mb-2">{company}</div>
      <p className="text-white/80 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill: any, idx: any) => (
          <span
            key={idx}
            className="text-xs px-3 py-1 bg-sky-600/30 border border-white/20 rounded-full text-white/80"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export { ExperienceCard };
