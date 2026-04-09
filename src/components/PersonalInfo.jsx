function PersonalInfo({ onContactClick }) {
  return (
    <div className="container hero">
      <div className="heroText">
        <p className="eyebrow">Computer Science • Montclair State University</p>
        <h1>
          Hi, I’m <span className="gradientText">Ryan</span>.
        </h1>
        <p className="lead">
          I’m a senior CS student currently looking for a summer internship to
          grow as a developer and build impactful software.
        </p>
        <p className="muted">
          Outside of coding, I like video games, sports with friends, and
          spending time with my family.
        </p>

        <div className="heroActions">
          <a
            className="button button--primary"
            href="https://github.com/RyanStan59"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub
          </a>
          <button className="button button--ghost" onClick={onContactClick}>
            Contact
          </button>
          <a
            className="button button--ghost"
            href={`${process.env.PUBLIC_URL}/images/Most_Updated_Ryan_s_Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>

      <div className="heroMedia" aria-hidden="true">
        <div className="avatarWrap">
          <img
            src={`${process.env.PUBLIC_URL}/images/IMG_0881.webp`}
            alt="Ryan's headshot"
            className="avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
