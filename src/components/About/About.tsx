import React from 'react';
import "./about.css";

const About = () => {
  return (
    <section id="about" className="about-container">
      <h2 className="about-heading">About Me</h2>
      <p className="about-text">
        Hello! I'm a university student with a passion for AI-based development, 
        problem-solving, and achieving financial freedom. I am proficient in 
        <strong> React, React Native, Python and DSA.</strong>  
      </p>
      <p className="about-text">
        My journey involves building scalable websites and apps powered by AI, 
        crafting automated trading strategies, and becoming a proficient communicator. 
        Currently, my short-term goal is to achieve financial freedom by excelling in 
        these domains within the next six months.
      </p>
      <p className="about-text">
        I'm always excited to collaborate on innovative projects and take on new challenges. 
        Feel free to <a href="#contact" className="about-link">reach out</a>!
      </p>
    </section>
  );
};

export default About;
