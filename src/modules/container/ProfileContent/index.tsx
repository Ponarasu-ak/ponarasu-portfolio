import React from "react";
import { Calendar, Code, FileText, GraduationCap, Mail } from "lucide-react";

const ProfileContent: React.FC = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="rounded-xl overflow-hidden mb-4">
            <img
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
              alt="Ponarasu"
              className="w-full aspect-square object-cover"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-blue-400" />
              <a
                href="mailto:ponarasu@example.com"
                className="text-white hover:text-blue-300 transition-colors"
              >
                ponarasu@example.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Calendar size={18} className="text-blue-400" />
              <span className="text-white/80">Available for hire</span>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "JavaScript",
                  "React",
                  "TypeScript",
                  "Tailwind CSS",
                  "Node.js",
                  "Next.js",
                  "Git",
                  "Figma",
                  "REST API",
                ].map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Front-End Developer
          </h3>

          <p className="text-white/80 mb-6 leading-relaxed">
            I'm a passionate front-end developer with a focus on creating
            intuitive and engaging user interfaces. With a strong foundation in
            modern JavaScript frameworks and responsive design principles, I
            bring ideas to life through clean, efficient, and maintainable code.
          </p>

          <h4 className="text-xl font-medium text-white mb-3 flex items-center">
            <Code size={20} className="text-blue-400 mr-2" />
            Experience
          </h4>

          <div className="space-y-5 mb-6">
            <div className="p-4 bg-white/5 rounded-lg border border-white/20">
              <div className="flex justify-between mb-1">
                <h5 className="font-medium text-white">
                  Senior Front-End Developer
                </h5>
                <span className="text-blue-300 text-sm">2022 - Present</span>
              </div>
              <div className="text-white/60 text-sm mb-2">
                TechCorp Solutions
              </div>
              <p className="text-white/80 text-sm">
                Led front-end development for various client projects,
                implementing modern UI frameworks and optimizing performance.
              </p>
            </div>

            <div className="p-4 bg-white/5 rounded-lg border border-white/20">
              <div className="flex justify-between mb-1">
                <h5 className="font-medium text-white">Junior Developer</h5>
                <span className="text-blue-300 text-sm">2020 - 2022</span>
              </div>
              <div className="text-white/60 text-sm mb-2">
                WebSolutions Inc.
              </div>
              <p className="text-white/80 text-sm">
                Built and maintained web applications using React and Vue.js,
                collaborated with design team to implement responsive UIs.
              </p>
            </div>
          </div>

          <h4 className="text-xl font-medium text-white mb-3 flex items-center">
            <GraduationCap size={20} className="text-blue-400 mr-2" />
            Education
          </h4>

          <div className="p-4 bg-white/5 rounded-lg border border-white/20 mb-6">
            <div className="flex justify-between mb-1">
              <h5 className="font-medium text-white">B.Sc. Computer Science</h5>
              <span className="text-blue-300 text-sm">2016 - 2020</span>
            </div>
            <div className="text-white/60 text-sm">
              University of Technology
            </div>
          </div>

          <h4 className="text-xl font-medium text-white mb-3 flex items-center">
            <FileText size={20} className="text-blue-400 mr-2" />
            About Me
          </h4>

          <p className="text-white/80 leading-relaxed">
            When I'm not coding, you can find me exploring hiking trails, diving
            into the latest tech articles, or experimenting with photography.
            I'm passionate about continuous learning and regularly participate
            in hackathons and tech meetups to stay connected with the developer
            community.
          </p>
        </div>
      </div>
    </div>
  );
};

export { ProfileContent };
