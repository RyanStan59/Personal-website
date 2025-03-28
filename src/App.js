import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import PersonalInfo from './components/PersonalInfo';
import './styles.css';

function App() {
  const welcomeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar
        scrollToSection={scrollToSection}
        welcomeRef={welcomeRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
      />

      {/* Personal Info Section (Welcome Section) */}
      <section ref={welcomeRef}>
        <PersonalInfo />
      </section>

      {/* Skills Section */}
      <section ref={skillsRef}>
        <Skills />
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} id="Projects">
        <h2>Projects</h2>
        {/* Add content here */}
      </section>

      {/* Info Section */}
      <section id="Info">
        <h2>More Info</h2>
        {/* Add content here */}
      </section>
    </div>
  );
}

export default App;
