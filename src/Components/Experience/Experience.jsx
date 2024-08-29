import React from 'react';
import { experienceData } from '../../data/experienceData';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2>Professional Experience</h2>
      <div className="timeline">
        {experienceData.map((exp, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <p className="company">{exp.company}</p>
              <p className="period">{exp.period}</p>
              <p className="description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;