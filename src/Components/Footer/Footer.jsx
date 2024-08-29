import React from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedin, FaGithub, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media-wall">
        <a href="https://linkedin.com/in/shambhavishukla844/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/shambhavishukla3012/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="mailto:shambhavishukla844@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
        <a href="mailto:shuklsha@iu.edu" target="_blank" rel="noopener noreferrer"><PiMicrosoftOutlookLogoFill /></a>
        {/* <a href="https://www.instagram.com/shambhavi__shukla/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a> */}
      </div>
      <div className="location">
        <FaMapMarkerAlt />
        <span>Indianapolis, IN, USA</span>
      </div>
    </footer>
  );
};

export default Footer;