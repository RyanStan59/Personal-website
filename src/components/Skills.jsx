function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="pictures-container">
        <div className="picture">
          <img src={`${process.env.PUBLIC_URL}/images/python_18894.webp`} alt="Python logo" />
        </div>
        <div className="picture">
          <img src={`${process.env.PUBLIC_URL}/images/file_type_html_icon_130541.webp`} alt="HTML logo" />
        </div>
        <div className="picture">
          <img src={`${process.env.PUBLIC_URL}/images/github_original_wordmark_logo_icon_146506.webp`} alt="GitHub logo" />
        </div>
        <div className="picture">
          <img src={`${process.env.PUBLIC_URL}/images/java_original_wordmark_logo_icon_146459.webp`} alt="Java logo" />
        </div>
        <div className="picture">
          <img src={`${process.env.PUBLIC_URL}/images/c_icon_132529.webp`} alt="C logo" />
        </div>
        <div className="picture">
          <img src={`${process.env.PUBLIC_URL}/images/docker_original_wordmark_logo_icon_146557.webp`} alt="Docker logo" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
