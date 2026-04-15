import React, { useEffect, useMemo, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import PersonalInfo from './components/PersonalInfo';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './styles.css';

function App() {
  const welcomeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState('welcome');

  const sections = useMemo(
    () => [
      { id: 'welcome', ref: welcomeRef },
      { id: 'skills', ref: skillsRef },
      { id: 'projects', ref: projectsRef },
      { id: 'contact', ref: contactRef },
    ],
    []
  );

  const scrollToSection = (ref, id) => {
    const el = ref?.current ?? (id ? document.getElementById(id) : null);
    if (id) window.location.hash = `#${id}`;
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const nodes = sections
      .map((s) => ({ id: s.id, el: s.ref.current }))
      .filter((s) => s.el);

    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (!visible) return;
        setActiveSection(visible.target.dataset.section);
      },
      { root: null, threshold: [0.2, 0.35, 0.5], rootMargin: '-20% 0px -60% 0px' }
    );

    nodes.forEach((n) => {
      n.el.dataset.section = n.id;
      observer.observe(n.el);
    });

    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'));
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add('isVisible');
          obs.unobserve(e.target);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="app">
      <Navbar
        scrollToSection={scrollToSection}
        welcomeRef={welcomeRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        activeSection={activeSection}
      />

      {/* Personal Info Section (Welcome Section) */}
      <section ref={welcomeRef} id="welcome" className="section section--hero">
        <div className="reveal">
          <PersonalInfo onContactClick={() => scrollToSection(contactRef, 'contact')} />
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} id="skills" className="section">
        <div className="reveal">
          <Skills />
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} id="projects" className="section">
        <div className="reveal">
          <Projects />
        </div>
      </section>

      {/* Info Section */}
      <section ref={contactRef} id="contact" className="section section--footer">
        <Footer />
      </section>

    </div>
  );
}

export default App;
