import React, { useState } from 'react';
import { skillsData, categories } from '../../data/skillsData';
import './Skills.css';

const Skills = () => {
  const [filter, setFilter] = useState('All');

  const filteredSkills = filter === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === filter);

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="category-filter">
        {categories.map(category => (
          <button 
            key={category} 
            className={filter === category ? 'active' : ''}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="skill-cloud">
        {filteredSkills.map(skill => (
          <span 
            key={skill.name} 
            className="skill-tag"
            style={{ fontSize: `${Math.random() * (2 - 1) + 1}em` }}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;