import React from 'react';
import { educationData } from '../../data/educationData';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <h2>Education Journey</h2>
      <div className="education-grid">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="card-content">
              <h3>{edu.degree}</h3>
              <p className="institution">{edu.institution}</p>
              <p className="period">{edu.period}</p>
            </div>
            <div className="card-hover">
              <p>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;