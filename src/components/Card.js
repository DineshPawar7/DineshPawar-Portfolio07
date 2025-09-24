import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/Card.css';
import Logo from '../assets/logo.png';
import { AiOutlineYoutube } from "react-icons/ai";


const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img src={Logo} alt="Your Name" className="card-image" />
        <h2 className="card-name">Dinesh Pawar</h2>
        <p className="card-description">
          An experienced Full Stack Web Developer skilled in the MERN stack, building scalable and efficient solutions.
        </p>
        
        <div className="card-footer">
          <a href='/contact'>
          <button className="btn-letstalk">Let's Connect</button>
          </a> 
          
          <div className="social-icons">
            <a href="https://www.instagram.com/dineshpawar07_/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/dineshpawar07/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
            <a href="https://www.youtube.com/@DineshPawar_.07" target="_blank" rel="noopener noreferrer" className="social-icon"><AiOutlineYoutube /></a>
            <a href="mailto:dineshpawarr07@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaEnvelope /></a>
          </div>
        </div>
      </div>
    </div> 
  );
};
export default Card;