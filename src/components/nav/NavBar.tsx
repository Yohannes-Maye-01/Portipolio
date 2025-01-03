import React, { useState } from "react";

import "./NavBar.css";
const NavBar = () => {
  return (
    
      <nav className="navCon" >
        <div className="logo">yohannes.</div>

        <ul className="navLinks">
          <li>
            <a href="#hero" className="homeLink">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="projectsLink">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="aboutLink">
              About
            </a>
          </li>
          
          <li>
            <a href="#contact" className="contactLink">
              Contact
            </a>
          </li>
          <button className="cv"> Dawnload CV</button>
        </ul>
      </nav>
 
  );
};

export default NavBar;
