import React from "react";
import { ExternalLink, Github } from "lucide-react";

const ProjectsContent: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description:
        "A comprehensive admin dashboard built with React and Material UI. Features include real-time sales analytics, inventory management, and customer insights.",
      image:
        "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "Material UI", "Chart.js", "Firebase"],
      links: {
        live: "#",
        github: "#",
      },
    },
    {
      id: 2,
      title: "Weather Application",
      description:
        "A real-time weather forecasting application with location-based services. Users can save favorite locations and get detailed weather insights including hourly and 7-day forecasts.",
      image:
        "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["JavaScript", "Weather API", "CSS", "Responsive Design"],
      links: {
        live: "#",
        github: "#",
      },
    },
    {
      id: 3,
      title: "Task Management System",
      description:
        "A Kanban-style project management tool inspired by Trello. Features include drag-and-drop task organization, team collaboration, and deadline notifications.",
      image:
        "https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      links: {
        live: "#",
        github: "#",
      },
    },
    {
      id: 4,
      title: "Fitness Tracker",
      description:
        "A mobile-first web application for tracking workouts and nutrition. Includes progress visualization and goal setting features.",
      image:
        "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React Native", "Redux", "Express", "MongoDB"],
      links: {
        live: "#",
        github: "#",
      },
    },
  ];

  return (
    <div className="p-4 flex ">
      <p className="text-white/80 mb-6">
        Here's a selection of my recent projects, showcasing my skills in
        front-end development, UI/UX design, and problem-solving. Each project
        represents a unique challenge tackled with modern technologies and best
        practices.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-1 ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-xl overflow-hidden border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            </div>

            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-medium text-white">
                  {project.title}
                </h4>
                <div className="flex space-x-2">
                  <a
                    href={project.links.github}
                    className="p-1.5 rounded-full bg-white/10 hover:bg-blue-500/20 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="text-white" />
                  </a>
                  <a
                    href={project.links.live}
                    className="p-1.5 rounded-full bg-white/10 hover:bg-blue-500/20 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="text-white" />
                  </a>
                </div>
              </div>

              <p className="text-white/70 text-sm mb-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-0.5 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export { ProjectsContent };
