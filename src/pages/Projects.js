import React from "react";
import "../styles/Project.css";
import Whyral from "../assets/whyral.png";
import invitewow from "../assets/inviteWOW.png";
import Archmart from "../assets/archmart.png";
import MERN from "../assets/mernEngineers.png";
import CRM from "../assets/crm.png";

import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import AnimatedButton from "../components/AnimatedButton";

const projectsData = [
   {
    id: 1,
    title: "Whyral.ai",
    description:
      "AI-powered MERN stack web app for content creators.",
    github: "https://github.com/DineshPawar7/whyral.ai",
    live: "https://whyral-ai.vercel.app/",
    img: Whyral,
  },
  {
    id: 2,
    title: "InviteWOW",
    description:
      "Pre-built customizable templates for every occasion",
    github: "https://github.com/DineshPawar7/invitewow",
    live: "https://github.com/DineshPawar7/invitewow",
    img: invitewow,
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
  {
    id: 5,
    title: "CRM Project (Freelance)",
    description: "Build an entire CMS frontend for the client",
    img: CRM,
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
