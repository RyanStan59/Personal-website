// src/App.jsx
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import PersonalInfo from "./components/PersonalInfo";
import "./styles.css";

function App() {
    return (
      <div>
        {/* Navigation Bar */}
        <nav>
          <div className="left">
            <a href="/">Ryan Stanisci</a>
          </div>
          <div className="right">
            <a href="https://github.com/RyanStan59" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
              <span>Github</span>
            </a>
            <a href="http://Linkedin.com/in/ryan-stanisci" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
            <a href="mailto:ryanstanisci@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-envelope"></i>
              <span>Email</span>
            </a>
          </div>
        </nav>
  
        {/* Floating Navigation */}
        <div className="floating-nav">
          <a href="#section3" className="nav-item">Welcome</a>
          <a href="#skills" className="nav-item">Skills</a>
          <a href="#section3" className="nav-item">Projects</a>
        </div>
  
        {/* Personal Info */}
        <section className="personalinfo">
          <div className="text">
            <h2>Hi, I'm Ryan</h2>
          </div>
          <div className="picture">
            <img src="/images/IMG_0881.webp" alt="Ryan's headshot" />
          </div>
          <div className="paragraph">
            <p>
              I am a computer science student at Montclair State University. I'm a senior and currently looking for a summer internship this year to advance my career and develop new skills in a work environment.
            </p>
          </div>
          <div className="para2">
            <p>
              In my free time, I like to play video games, play sports with friends, and spend time with my family.
            </p>
          </div>
        </section>
  
        {/* Skills Section */}
        <section className="skills-section">
          <h2>Skills</h2>
          <div className="cells">
            <div className="cell">
              <img src="images/python_18894.webp" alt="Python logo" />
            </div>
            <div className="cell">
              <img src="images/file_type_html_icon_130541.webp" alt="HTML logo" />
            </div>
            <div className="cell">
              <img src="images/github_original_wordmark_logo_icon_146506.webp" alt="GitHub logo" />
            </div>
            <div className="cell">
              <img src="images/java_original_wordmark_logo_icon_146459.webp" alt="Java logo" />
            </div>
            <div className="cell">
              <img src="images/c_icon_132529.webp" alt="C logo" />
            </div>
            <div className="cell">
              <img src="images/docker_original_wordmark_logo_icon_146557.webp" alt="Docker logo" />
            </div>
          </div>
        </section>
  
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
  