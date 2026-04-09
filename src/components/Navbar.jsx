import React from 'react';

function Navbar({
  scrollToSection,
  welcomeRef,
  skillsRef,
  projectsRef,
  contactRef,
  activeSection,
  theme,
  onToggleTheme,
}) {
  const [open, setOpen] = React.useState(false);

  const navTo = (ref) => (e) => {
    e.preventDefault();
    setOpen(false);
    scrollToSection(ref);
  };

  return (
    <header className="siteHeader">
      <nav className="container nav">
        <a className="brand" href="#welcome" onClick={navTo(welcomeRef)}>
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
            onClick={navTo(welcomeRef)}
          >
            Welcome
          </a>
          <a
            href="#skills"
            className={`navLink ${activeSection === 'skills' ? 'isActive' : ''}`}
            onClick={navTo(skillsRef)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={`navLink ${activeSection === 'projects' ? 'isActive' : ''}`}
            onClick={navTo(projectsRef)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={`navLink ${activeSection === 'contact' ? 'isActive' : ''}`}
            onClick={navTo(contactRef)}
          >
            Contact
          </a>

          <div className="navDivider" aria-hidden="true" />

          <a
            className="navIcon"
            href={`${process.env.PUBLIC_URL}/images/Most_Updated_Ryan_s_Resume.pdf`}
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

          <button
            className="navIcon"
            type="button"
            onClick={onToggleTheme}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            <i
              className={theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}
              aria-hidden="true"
            />
            <span className="srOnly">Toggle theme</span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

