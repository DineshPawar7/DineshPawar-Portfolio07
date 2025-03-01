import React from "react";
import "../styles/Project.css";
import Koshank from '../assets/koshank.png';
import AI from '../assets/AI1.png';
import Archmart from '../assets/archmart.png';
import TTS from '../assets/tts.png';

const projectsData = [
  { id: 1, title: "Koshank Portfolio", description: "Koshank Official Website", src: "https://koshank-testing.netlify.app/", img: Koshank },
  { id: 2, title: "AI Text to Speech", description: "AI-Powered Voice Synthesis", src: "https://github.com/DineshPawar7/Text-to-Speech-App", img: TTS },
  { id: 3, title: "ArchitectureMart", description: "Home Architecture Plans Selling Website", src: "https://github.com/DineshPawar7/architectureMart", img: Archmart },
  { id: 4, title: "Project X", description: "Upcoming AI Project", src: "/", img: AI },
];

const Projects = () => {
  return (
    <section className="projects-section">
      {/* Heading */}
      <div className="projects-heading">
        <span className="projects-heading-main">PROFESSIONAL</span>
        <span className="projects-heading-sub">PROJECTS</span>
      </div>

      {/* Project Cards */}
      <div className="projects-container">
        {projectsData.map((project) => (
          <div key={project.id} className="projects-card">
            <img src={project.img || "https://via.placeholder.com/150"} alt={project.title} className="projects-card-image" />
            <h3 className="projects-card-title">{project.title}</h3>
            <p className="projects-card-description">{project.description}</p>
            {project.src && (
              <a href={project.src} target="_blank" rel="noopener noreferrer">
                <button className="see-work-button">See Work</button>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
