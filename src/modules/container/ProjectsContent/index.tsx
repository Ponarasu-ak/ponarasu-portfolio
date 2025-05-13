import React from "react";

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

  return <div className=""></div>;
};
export { ProjectsContent };
