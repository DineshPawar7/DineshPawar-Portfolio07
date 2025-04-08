import React, { useRef } from "react";
import "../styles/Home.css";
import { TbArrowRightCircle } from "react-icons/tb";
import Projects from "./Projects";
import Experience from "./Experience";
import SkillsAndTools from "../pages/SkillsAndTools";
import YouTube from "./Youtube";
import Contact from "./Contact";
import Education from "./Education";

const Home = () => {
  const contactRef = useRef(null);
  const ProjectsRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToProjects = () => {
    if (ProjectsRef.current) {
      ProjectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>FULL STACK</h1>
        <h1>
          WEB <span>DEVELOPER</span>
        </h1>
        <h3>
          Passionate MERN stack developer with expertise in both frontend and
          backend, crafting scalable and efficient solutions.
        </h3>

        <div className="home-stats">
          <div className="home-stat-item">
            <h1>+1.8</h1>
            <p>
              YEARS OF <span className="state-item-home">HANDS-ON EXPERIENCE</span>
            </p>
          </div>
          <div className="home-stat-item">
            <h1>+04</h1>
            <p>
              PROJECTS <span className="state-item-home">COMPLETED</span>
            </p>
          </div>
          <div className="home-stat-item">
            <h1>+01</h1>
            <p>
              Open Source <span className="state-item-home">Contribution</span>
            </p>
          </div>
        </div>

        <div className="home-buttons">
          <button className="home-connect-btn" onClick={scrollToContact}>
            Let's Connect
          </button>
          <button className="home-mywork-btn" onClick={scrollToProjects}>
           See Work <span><TbArrowRightCircle /></span>
          </button>
          
        </div>
      </div>
      <div ref={ProjectsRef}>
        <Projects />
      </div>
      <Experience />
      <Education />
      <SkillsAndTools />
      <YouTube />
      <div ref={contactRef}>
        <Contact />
      </div>
      
    </div>
  );
};

export default Home;
