import React from "react";
import "../styles/Home.css";
import { TbArrowRightCircle } from "react-icons/tb";
import Projects from "./Projects";
import Experience from "./Experience";
import SkillsAndTools from '../pages/SkillsAndTools'
import YouTube from "./Youtube";
import Contact from './Contact';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>FULL STACK</h1>
        <h1>WEB <span>DEVELOPER</span></h1>
        <h3>Passionate MERN stack developer with expertise in both frontend and backend, crafting scalable and efficient solutions.</h3>
        
        <div className="home-stats">
          <div className="home-stat-item">
            <h1>+1.8</h1>
            <p>YEARS OF <span className='state-item-home'>HANDS-ON EXPERIENCE</span></p>
          </div>
          <div className="home-stat-item">
            <h1>+04</h1>
            <p>PROJECTS <span className='state-item-home'>COMPLETED</span></p>
          </div>
          <div className="home-stat-item">
            <h1>+01</h1>
            <p>Open Source <span className='state-item-home'>Contribution</span></p>
          </div>
        </div>
        

        <div className='home-buttons'>
          <button className='home-connect-btn'>Let's Connect</button>
          <button className='home-mywork-btn'>My Work <span><TbArrowRightCircle /></span></button>
        </div>
      </div>

      {/* Projects Section yahan add kiya */}
      <Projects />
      <Experience />
      <SkillsAndTools />
      <YouTube />
      <Contact />

    </div>
  );
};

export default Home;
