import React from 'react';
import '../styles/Home.css';
import Card from '../components/Card';
import { TbArrowRightCircle } from "react-icons/tb";


const Home = () => {
  return (
    <div className="home-container">
      <Card />
      <div className="home-content">
        <h1>FULL STACK</h1>
        <h1>WEB <span>DEVELOPER</span></h1>
        <p>Passionate MERN stack developer with expertise in both frontend and backend, crafting scalable and efficient solutions. Experienced in building real-world projects, solving complex challenges, and constantly innovating to create impactful digital experiences.</p>
        <div className="home-stats">
          <div className="home-stat-item">
            <h1>+02</h1>
            <p>YEARS OF <span className='state-item-home'>HANDS-ON EXPERIENCE</span></p>
          </div>
          <div className="home-stat-item">
            <h1>+04</h1>
            <p>PROJECTS <span className='state-item-home'>COMPLETED</span></p>
          </div>
          <div className="home-stat-item">
            <h1>00</h1>
            <p>WORLDWIDE <span className='state-item-home'>CLIENTS</span></p>
          </div>
        </div>
        <div className='home-buttons'>
          <button className='home-connect-btn'>Let's Connect</button>
          <button className='home-mywork-btn'>My Work <span>< TbArrowRightCircle /></span></button>
        </div>
      </div>
    </div>
  );
}

export default Home;
