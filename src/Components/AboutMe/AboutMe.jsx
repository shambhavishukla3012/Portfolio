import React, { useState } from 'react';
import { aboutMeData } from '../../data/aboutMeData';
import './AboutMe.css';

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <section id="about" className="about-me">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-tabs">
          {Object.keys(aboutMeData).map((tab) => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {aboutMeData[tab].title}
            </button>
          ))}
        </div>
        <div className="tab-content">
          <h3>{aboutMeData[activeTab].title}</h3>
          <p>{aboutMeData[activeTab].content}</p>
        </div>
        <div className="about-image">
          <img src="https://raw.githubusercontent.com/shambhavishukla3012/Portfolio/main/src/assets/about_me.jpg" alt="Shambhavi Arvind Shukla" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;