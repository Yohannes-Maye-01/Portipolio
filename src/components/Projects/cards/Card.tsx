import React from 'react';
import './Card.css';


export default function Card({ index, project }) {
  return (
    <div key={index} className="project-card">
      <div className="project-sample-pic">
  <img src={project.img} alt={`${project.title} preview`} />
  <div className="view-more">
    <div>
      <a
        href={project.demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="Demo-project-link"
      >
        <i className="bx bx-show"></i> View Demo
      </a>
    </div>
    <div>
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="GitHub-project-link"
      >
        <i className="bx bxl-github"></i> View GitHub
      </a>
    </div>
  </div>
</div>

      <h3 className="project-title">{project.title}</h3>
      
      <ul className="project-technologies">
        {project.technologies.map((tech, idx) => (
          <li key={idx} className="technology">
            {tech}
          </li>
        ))}
      </ul>

      
     


    </div>
  );
}
