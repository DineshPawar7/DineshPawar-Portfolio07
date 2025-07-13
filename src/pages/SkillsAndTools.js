import React from "react";
import "../styles/SkillsAndTools.css";


import { FaReact, FaNodeJs, FaFigma, FaGitAlt, FaDocker, FaGithub, FaAngular, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiTypescript, SiPostman, SiExpress, SiNextdotjs, SiRedis, SiTailwindcss, SiGraphql, SiRedux } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skillData = {
  "Languages & Markup": [
    { name: "JavaScript (ES6+)", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
  ],
  "Frameworks & Libraries": [
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Angular", icon: <FaAngular /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  ],
  "Databases & APIs": [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "GraphQL", icon: <SiGraphql /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Redis", icon: <SiRedis /> },
  ],
  "Tools & Platforms": [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "VS Code", icon: <VscVscode /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "Docker", icon: <FaDocker /> },
  ],
};

const SkillsAndTools = () => {
  return (
    <section id="skills" className="skillset-container">
      <h1 className="skillset-heading">
        TOOLS & <span className="highlight-text">TECHNOLOGIES</span>
      </h1>
     

      <div className="skill-categories-grid">
        {Object.entries(skillData).map(([category, items]) => (
          <div className="skill-category-section" key={category}>
            <h3 className="category-title">{category}</h3>
            <div className="icon-grid">
              {items.map((item) => (
                <div className="item-card" key={item.name}>
                  <div className="icon">{item.icon}</div>
                  <p className="label">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsAndTools;