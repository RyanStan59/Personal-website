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
  const [theme, setTheme] = useState('dark');

  const sections = useMemo(
    () => [
      { id: 'welcome', ref: welcomeRef },
      { id: 'skills', ref: skillsRef },
      { id: 'projects', ref: projectsRef },
      { id: 'contact', ref: contactRef },
    ],
    []
  );

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
      return;
    }

    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

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

  return (
    <div className="app">
      <Navbar
        scrollToSection={scrollToSection}
        welcomeRef={welcomeRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      />

      {/* Personal Info Section (Welcome Section) */}
      <section ref={welcomeRef} id="welcome" className="section section--hero">
        <PersonalInfo onContactClick={() => scrollToSection(contactRef)} />
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} id="skills" className="section">
        <Skills />
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} id="projects" className="section">
        <Projects />
      </section>

      {/* Info Section */}
      <section ref={contactRef} id="contact" className="section section--footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
