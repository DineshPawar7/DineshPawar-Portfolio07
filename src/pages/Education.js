import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "../styles/Education.css";

const Education = () => {
  const educationData = [
    {
      title: "B.Tech in Computer Science and Engineering",
      institution: "Hi-Tech Institute of Technology, Aurangabad",
      description:
        "B.Tech in Computer Science with ongoing academic focus on full stack web development, AI integration, and contemporary software practices.",
      period: "2021 - 2025",
    },
    {
      title: "Full Stack Web Development",
      institution: "Internshaala Trainings",
      description:
        "Completed comprehensive training covering front-end and back-end technologies, including real-world projects and hands-on development with React, Node.js Express.js, JavaScript and MongoDB.",
      period: "2023 - 2024",
    },
  ];

  return (
    <div className="education-section">
      <h2 className="education-heading">
        EDUCATIONAL <span>BACKGROUND</span>
      </h2>

      <div className="education-container">
        {educationData.map((edu, index) => (
          <EducationCard key={index} {...edu} />
        ))}
      </div>
    </div>
  );
};

const EducationCard = ({ title, institution, description, period }) => {
  return (
    <div className="education-card">
      <div className="arrow-container">
        <FaArrowRightLong className="arrow" />
      </div>
      <h3>{title}</h3>
      <h2 className="institution-name">{institution}</h2>
      <p>{description}</p>
      <p className="period">{period}</p>
    </div>
  );
};

export default Education;
