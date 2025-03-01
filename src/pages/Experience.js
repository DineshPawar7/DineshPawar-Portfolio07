import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "../styles/Experience.css"; // Import CSS

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Web Developer (Intern)",
      description:
        "Developed a responsive company website for Koshank with API integration, ensuring a seamless user experience. Also contributed to client projects, collaborating with the team on various web development tasks.",
      period: "Feb 2025 - Present",
    },
    {
      title: "Freelancer and Self-Learner",
      description:
        "Self-taught Full Stack Web Developer, delivering innovative solutions through freelancing and continuous learning.",
      period: "July 2023 - Present",
    },
  ];

  return (
    <div className="experience-section">
      <h2 className="experience-heading">
        Professional <span>Experience</span>
      </h2>

      <div className="experience-container">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

const ExperienceCard = ({ title, description, period }) => {
  return (
    <div className="experience-card">
      <div className="arrow-container">
        <FaArrowRightLong className="arrow" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="period">{period}</p>
    </div>
  );
};

export default Experience;
