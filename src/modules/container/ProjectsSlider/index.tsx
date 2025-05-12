import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A React-based admin dashboard with analytics.",
    image:
      "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Tailwind", "Chart.js"],
  },
  {
    id: 2,
    title: "Weather App",
    description: "Real-time weather forecasting application.",
    image:
      "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["JavaScript", "API", "CSS"],
  },
  {
    id: 3,
    title: "Task Management",
    description: "A Kanban-style project management tool.",
    image:
      "https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Node.js", "MongoDB"],
  },
];

const ProjectsSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setAutoplay(false);
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setAutoplay(false);
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative h-full">
      {/* <h3 className="text-xl font-medium text-white p-5 border-b border-white/20">
        Recent Projects
      </h3> */}

      <div className="relative h-full overflow-hidden">
        <div
          className="h-full transition-transform duration-500 ease-out flex"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full h-full flex-shrink-0 relative"
            >
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(0.7)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xl font-medium text-white">
                    {project.title}
                  </h4>
                  <ExternalLink size={18} className="text-blue-400" />
                </div>
                <p className="text-white/70 text-sm mb-3">
                  {project.description}
                </p>
                <div className="flex gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white hover:bg-blue-500/30 transition-all"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white hover:bg-blue-500/30 transition-all"
        >
          <ChevronRight size={18} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentSlide(index);
                setAutoplay(false);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index
                  ? "bg-blue-400 w-4"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { ProjectsSlider };
