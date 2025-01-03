import React from "react";
import NavBar from "../nav/NavBar";
import Intro from "./Intro/Intro";
import "./Hero.css";

const HeroSection = () => {
  return (
    <>
      <div id="hero" className="hero">
        <NavBar />
        <Intro />
       
      </div>
    </>
  );
};

export default HeroSection;
