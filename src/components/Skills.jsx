const skills = [
  { name: 'Python', img: 'python_18894.webp' },
  { name: 'Git', img: 'github_original_wordmark_logo_icon_146506.webp' },
  { name: 'Java', img: 'java_original_wordmark_logo_icon_146459.webp' },
  { name: 'Docker', img: 'docker_original_wordmark_logo_icon_146557.webp' },
];

function Skills() {
  return (
    <div className="container">
      <div className="sectionHeader">
        <h2>Skills</h2>
        <p className="muted">Tools and languages I’m comfortable with.</p>
      </div>

      <div className="grid grid--skills">
        {skills.map((s) => (
          <div key={s.name} className="card card--skill">
            <img
              src={`${process.env.PUBLIC_URL}/images/${s.img}`}
              alt={`${s.name} logo`}
              className="skillLogo"
              loading="lazy"
            />
            <div className="skillMeta">
              <p className="skillName">{s.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
