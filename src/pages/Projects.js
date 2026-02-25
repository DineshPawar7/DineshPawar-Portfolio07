import React from "react";
import Archmart from "../assets/archmart.png";
import MERN from "../assets/mernEngineers.png";
import Grohubz from "../assets/grohubz.png";
import Qcom from "../assets/qcom.png";

import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import AnimatedButton from "../components/AnimatedButton";

const projectsData = [
  {
    id: 1,
    title: "Grohubz.com",
    description:
      "Instagram DM automation platform for lead capture and engagement workflows",
    github: "https://github.com/DineshPawar7/grohubz.com",
    live: "https://grohubz.com",
    img: Grohubz,
  },
  {
    id: 2,
    title: "QCom.ai",
    description:
      "AI-powered SaaS platform for automated e-commerce competitor monitoring and insights",
    github: "https://github.com/DineshPawar7/Qcom.ai",
    live: "https://qcom-ai.netlify.app",
    img: Qcom,
  },
  {
    id: 3,
    title: "MERN Engineers",
    description:
      "A personal agency website to showcase my freelance portfolio and services",
    github: "https://github.com/DineshPawar7/MernEnginners",
    live: "https://mernengineers.netlify.app",
    img: MERN,
  },
  
];

const Projects = () => {
  return (
    <section className="animate-[fadeIn_1.2s_ease-in-out] mt-[50px] px-4">
      {/* Heading Section */}
      <div className="text-[clamp(2.5rem,10vw,75px)] font-black uppercase text-white flex flex-col mb-[50px]">
        <span className="leading-[1.2]">PROFESSIONAL</span>
        <span className="text-[var(--primary-color)] text-[clamp(2.5rem,10vw,75px)] block leading-[0.5]">
          PROJECTS
        </span>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] max-w-[1000px] mx-auto">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-[var(--card-bg-color)] rounded-[10px] h-[390px] leading-tight text-center transition-all duration-300 hover:scale-[1.03] shadow-[0_4px_8px_rgba(0,0,0,0.1)]"
          >
            <img
              src={project.img || "https://via.placeholder.com/150"}
              alt={project.title}
              className="w-[99%] h-[60%] object-cover rounded-[8px] mb-[6px] mx-auto"
            />
            
            <h3 className="text-[clamp(1.1rem,4vw,1.5rem)] font-bold text-white mb-0">
              {project.title}
            </h3>
            
            <p className="text-[clamp(0.85rem,3vw,1rem)] text-[#d5d5d5] mb-5 mt-1 px-2">
              {project.description}
            </p>
            
            <div className="flex gap-[15px] justify-center mt-[15px]">
              {project.live && (
                <AnimatedButton
                  label="Live"
                  icon={<FaExternalLinkAlt className="icon" />}
                  href={project.live}
                />
              )}
              {project.github && (
                <AnimatedButton
                  label="Code"
                  icon={<FaGithub className="icon" />}
                  href={project.github}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Add keyframe animation to your global CSS or tailwind.config.js */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;