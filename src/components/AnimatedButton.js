import React from "react";
import "../styles/AnimatedButton.css";

const AnimatedButton = ({ label, icon, href }) => {
  return (
    <a
      href={href} 
      target="_blank"
      rel="noopener noreferrer"
      className="save-btn-wrapper"
    >
      <button className="bookmarkBtn">
        <span className="IconContainer">
          {icon}
        </span>
        <span className="text">{label}</span>
      </button>
    </a>
  );
};

export default AnimatedButton;
