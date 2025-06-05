import React from "react";
import "../styles/Project.css";
import Whyral from "../assets/whyral.png";
import Nxtkisan from "../assets/nxtkisan.png";
import Archmart from "../assets/archmart.png";
import MERN from "../assets/mernEngineers.png";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import AnimatedButton from "../components/AnimatedButton";

const projectsData = [
   {
    id: 1,
    title: "Whyral.ai",
    description:
      "AI-powered MERN stack web app for content creators.",
    github: "https://github.com/DineshPawar7/koshank-portfolio",
    live: "https://koshank-testing.netlify.app/",
    img: Whyral,
  },
  {
    id: 2,
    title: "Nxtkisan",
    description:
      "NxtKisan is an AI-powered platform for Indian farmers (Under Development)",
    github: "https://github.com/DineshPawar7/nxtkisan-client",
    live: "https://nxtkisan.vercel.app/",
    img: Nxtkisan,
  },
  {
    id: 3,
    title: "ArchitectureMart",
    description:
      "Home Architecture Plans Selling Website for modern and custom designs",
    github: "https://github.com/DineshPawar7/architectureMart",
    live: "https://architecture-mart07.vercel.app",
    img: Archmart,
  },

  {
    id: 4,
    title: "MERN Engineers",
    description: "A personal agency website to showcase my freelance portfolio",
    github: "https://github.com/DineshPawar7/MernEnginners",
    live: "https://mernengineers.netlify.app",
    img: MERN,
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-heading">
        <span className="projects-heading-main">PROFESSIONAL</span>
        <span className="projects-heading-sub">PROJECTS</span>
      </div>

      <div className="projects-container">
        {projectsData.map((project) => (
          <div key={project.id} className="projects-card">
            <img
              src={project.img || "https://via.placeholder.com/150"}
              alt={project.title}
              className="projects-card-image"
            />
            <h3 className="projects-card-title">{project.title}</h3>
            <p className="projects-card-description">{project.description}</p>
            <div className="see-work-btn">
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
    </section>
  );
};

export default Projects;
