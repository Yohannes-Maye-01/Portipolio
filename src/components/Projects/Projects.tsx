import React from 'react';
import './Projects.css'; // Add custom styling here
import bg from "../../assets/bg.png"
import Card from './cards/Card';

const projects = [
  {
    title: 'Fuel Management System',
   
    technologies: ['Java', 'MySQL', 'Spring Boot','Java', 'MySQL', 'Spring Boot','Java', 'MySQL', 'Spring Boot'],
    link: '#', // Replace with live demo or repository link
    img:bg
  },
  {
    title: 'Forex Trading Dashboard',
    
    technologies: ['React', 'Node.js', 'Python'],
    link: '#', // Replace with live demo or repository link
    img:bg
  },
  {
    title: 'AI-Powered Portfolio Analyzer',
    
    technologies: ['Python', 'TensorFlow', 'React Native'],
    link: '#', // Replace with live demo or repository link
    img:bg
  },
  {
     title: 'AI-Powered Portfolio Analyzer',
     technologies: ['Python', 'TensorFlow', 'React Native'],
     link: '#', // Replace with live demo or repository link
     img:bg
   },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">


      <h2 className="section-title">Projects</h2>



      <div className="projects-container">


        {projects.map((project, index) => (

         <Card  project={project} index={index}/>
        ))}
      </div>
    </section>
  );
};

export default Projects;
