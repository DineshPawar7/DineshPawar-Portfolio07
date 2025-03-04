import React from 'react';
import '../styles/Header.css'
import { Link } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { IoFolderOpenOutline } from "react-icons/io5";
import { RiBrain2Line } from "react-icons/ri";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { MdWorkOutline } from "react-icons/md";
import { CiMail } from "react-icons/ci";



const Header = () => {
  return (
    <header className="header">

      <div className="icon-container">
      <Link to="/" className="icon-link">
          <AiOutlineHome className="icon" />
        </Link>
        <Link to="/projects" className="icon-link">
          <IoFolderOpenOutline className="icon" />
        </Link>
        <Link to="/SkillsAndTools" className="icon-link">
          <RiBrain2Line className="icon" />
        </Link>
        <Link to="/experience" className="icon-link">
          <MdWorkOutline className="icon" />
        </Link>
        <Link to="/youtube" className="icon-link">
          <TbBrandYoutubeKids className="icon" />
        </Link>
        <Link to="/contact" className="icon-link">
          <CiMail className="icon" />
        </Link>
        
      </div>
      
    </header>
    
  );
};

export default Header;
