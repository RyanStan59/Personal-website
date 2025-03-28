// src/App.jsx
import React from 'react';
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import PersonalInfo from "./components/PersonalInfo";
import './styles.css';

function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar />  {/* Include Navbar component here */}

      {/* Floating Navigation */}
    
      {/* Personal Info */}
      <PersonalInfo />  {/* Include PersonalInfo component here */}
    
      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <section id="Projects">
        {/* Add content here */}
      </section>

      {/* Info Section */}
      <section id="Info">
        {/* Add content here */}
      </section>
    </div>
  );
}
export default App;
