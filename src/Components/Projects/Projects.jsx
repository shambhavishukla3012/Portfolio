// src/components/Projects/Projects.jsx

import React, { useState } from 'react';
import { projectsData } from '../../data/projectsData';
import './Projects.css';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 === projectsData.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="carousel">
        <button className="carousel-button prev" onClick={prevSlide}>&lt;</button>
        <div className="carousel-content">
          {projectsData.map((project, index) => (
            <div 
              key={project.id}
              className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            >
              <h3>{project.title}</h3>
              <p className="period">{project.period}</p>
              <p className="description">{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-button next" onClick={nextSlide}>&gt;</button>
      </div>
    </section>
  );
};

export default Projects;