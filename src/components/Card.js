import React from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Import social media icons
import '../styles/Card.css';
import Logo from '../assets/logo.png';

const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img src={Logo} alt="Your Name" className="card-image" />
        <h2 className="card-name">Dinesh Pawar</h2>
        <p className="card-description">
          An experienced Full Stack Web Developer skilled in the MERN stack, building scalable and efficient solutions.
        </p>
        
        {/* Container for button and icons fixed at bottom */}
        <div className="card-footer">
          <button className="btn-letstalk">Let's Connect</button>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
            <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" className="social-icon"><FaWhatsapp /></a>
            <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaEnvelope /></a>
          </div>
        </div>
      </div>
    </div> 
  );
};
export default Card;