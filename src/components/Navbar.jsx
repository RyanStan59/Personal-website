import React from 'react';
import ConnectFab from './ConnectFab';

function Navbar({
  scrollToSection,
  welcomeRef,
  skillsRef,
  projectsRef,
  contactRef,
  activeSection,
}) {
  const [open, setOpen] = React.useState(false);

  const navTo = (ref, id) => (e) => {
    e.preventDefault();
    setOpen(false);
    scrollToSection(ref, id);
  };

  return (
    <header className="siteHeader">
      <nav className="container nav">
        <a className="brand" href="#welcome" onClick={navTo(welcomeRef, 'welcome')}>
          <span className="brandDot" aria-hidden="true" />
          <span className="brandText">Ryan Stanisci</span>
        </a>

        <button
          className="navBurger"
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <div className={`navLinks ${open ? 'isOpen' : ''}`}>
          <a
            href="#welcome"
            className={`navLink ${activeSection === 'welcome' ? 'isActive' : ''}`}
            onClick={navTo(welcomeRef, 'welcome')}
          >
            Welcome
          </a>
          <a
            href="#skills"
            className={`navLink ${activeSection === 'skills' ? 'isActive' : ''}`}
            onClick={navTo(skillsRef, 'skills')}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={`navLink ${activeSection === 'projects' ? 'isActive' : ''}`}
            onClick={navTo(projectsRef, 'projects')}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={`navLink ${activeSection === 'contact' ? 'isActive' : ''}`}
            onClick={navTo(contactRef, 'contact')}
          >
            Contact
          </a>

          <div className="navDivider" aria-hidden="true" />

          <ConnectFab className="button button--primary navConnect" label="Connect With Me" />

          <a
            className="navIcon"
            href={`${process.env.PUBLIC_URL}/images/Ryan_s_Resume (1).pdf`}
            target="_blank"
            rel="noopener noreferrer"
            title="Resume"
          >
            <i className="fa-solid fa-file-pdf" aria-hidden="true" />
            <span className="srOnly">Resume</span>
          </a>
          <a
            className="navIcon"
            href="https://github.com/RyanStan59"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <i className="fa-brands fa-github" aria-hidden="true" />
            <span className="srOnly">GitHub</span>
          </a>
          <a
            className="navIcon"
            href="https://linkedin.com/in/ryan-stanisci"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <i className="fa-brands fa-linkedin" aria-hidden="true" />
            <span className="srOnly">LinkedIn</span>
          </a>
          <a className="navIcon" href="mailto:ryanstanisci@gmail.com" title="Email">
            <i className="fa-solid fa-envelope" aria-hidden="true" />
            <span className="srOnly">Email</span>
          </a>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;

