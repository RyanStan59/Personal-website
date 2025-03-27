// src/components/Navbar.jsx
function Navbar() {
    return (
      <nav>
        <div className="left">
          <a href="/">Ryan Stanisci (Web page is still in progress)</a>
        </div>
        <div className="floating-nav">
          <a href="#section3" className="nav-item">Welcome</a>
          <a href="#skills" className="nav-item">Skills</a>
          <a href="#section3" className="nav-item">Projects</a>
        </div>
        <div className="right">
          <a href="https://github.com/RyanStan59" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
            <span> Github</span>
          </a>
          <a href="http://Linkedin.com/in/ryan-stanisci" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
            <span> LinkedIn</span>
          </a>
          <a href="mailto:ryanstanisci@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-envelope"></i>
            <span> Email</span>
          </a>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  