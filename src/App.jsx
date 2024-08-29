import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import AboutMe from './Components/AboutMe/AboutMe';
import Education from './Components/Education/Education'
import Experience from './Components/Experience/Experience'
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
// import Extracurriculars from './Components/Extracurriculars/Extracurriculars';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe/>
      <Education />
      <Experience />
      <Skills/>
      <Projects/>
      {/* <Extracurriculars/> */}
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;