// src/components/Skills.jsx
function Skills() {
    const skillImages = [
      { src: "/images/python_18894.webp", alt: "Python logo" },
      { src: "/images/file_type_html_icon_130541.webp", alt: "HTML logo" },
      { src: "/images/github_original_wordmark_logo_icon_146506.webp", alt: "GitHub logo" },
      { src: "/images/java_original_wordmark_logo_icon_146459.webp", alt: "Java logo" },
      { src: "/images/c_icon_132529.webp", alt: "C logo" },
      { src: "/images/docker_original_wordmark_logo_icon_146557.webp", alt: "Docker logo" },
    ];
  
    return (
      <section id="skills" className="skills-section">
        <h2>Skills</h2>
        <div className="cells">
          {skillImages.map((skill, index) => (
            <div key={index} className="cell">
              <img src={skill.src} alt={skill.alt} />
              <span></span>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Skills;