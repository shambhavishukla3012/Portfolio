import React from 'react';
import { extracurricularActivities } from '../../data/extracurricularsData';
import './Extracurriculars.css';

const Extracurriculars = () => {
  return (
    <section id = "extracurriculars" className="extracurriculars">
      <h2>Extracurricular Activities</h2>
      <div className="polaroid-gallery">
        {extracurricularActivities.map((activity) => (
          <div key={activity.id} className="polaroid">
            <div className="polaroid-content">
              <img src={activity.image} alt={activity.title} />
              <div className="caption">
                <h3>{activity.title}</h3>
                <p className="year">{activity.year}</p>
                <p>{activity.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Extracurriculars;