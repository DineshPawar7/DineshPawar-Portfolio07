import React from "react";
import MERN from "../assets/mernEngineers.png";
import Grohubz from "../assets/grohubz.png";

import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import AnimatedButton from "../components/AnimatedButton";

const projectsData = [
  // {
  //   id: 1,
  //   title: "Grohubz.com (SAAS)",
  //   description:
  //     "Instagram DM automation platform for lead capture and engagement workflows.",
  //   github: "https://github.com/DineshPawar7/grohubz.com",
  //   live: "https://grohubz.com",
  //   img: Grohubz,
  // },
  {
    id: 1,
    title: "MERN Engineers (Agency Website)",
    description:
      "Freelance portfolio with pixel-perfect UI from Figma design.",
    github: "https://github.com/DineshPawar7/MernEnginners",
    live: "https://mernengineers.netlify.app",
    img: MERN,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full mx-auto text-white px-2 overflow-hidden">
      {/* Heading Section - Standardized with other components */}
      <h2 className="text-[clamp(2.2rem,8vw,60px)] font-bold mb-6 md:mb-16 text-white leading-tight text-center md:text-left uppercase">
        Professional <span className="text-primary block md:inline">Projects</span>
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1100px] mx-auto">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="group relative bg-[#1a1a1a] border border-white/10 rounded-[1rem] overflow-hidden transition-all duration-500 ease-in-out hover:border-primary/40 flex flex-col h-full shadow-2xl"
          >
            {/* Image Container with Inner Zoom */}
            <div className="relative h-[240px] w-full overflow-hidden">
              <img
                src={project.img || "https://via.placeholder.com/150"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
              />
           
            </div>
            
            {/* Content Section */}
            <div className="p-8 flex flex-col flex-grow text-center md:text-left">
              <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-500">
                {project.title}
              </h3>
              
              <p className="text-[#b0b0b0] mt-3 mb-8 leading-relaxed text-sm md:text-base flex-grow">
                {project.description}
              </p>
              
              {/* Buttons Container */}
              <div className="flex gap-4 justify-center md:justify-start items-center">
                {project.live && (
                  <AnimatedButton
                    label="Live"
                    icon={<FaExternalLinkAlt className="text-sm" />}
                    href={project.live}
                  />
                )}
                {project.github && (
                  <div className="group/btn">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-2 text-white/60 hover:text-white transition-all duration-300 text-sm font-semibold uppercase tracking-widest"
                    >
                      <FaGithub className="text-xl" />
                      <span>Code</span>
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Subtle background glow effect */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-700"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;