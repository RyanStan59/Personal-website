function PersonalInfo({ onContactClick }) {
  return (
    <div className="container hero">
      <div className="heroText">
        <p className="eyebrow">Computer Science Graduate • Montclair State University</p>
        <h1>
          Hi, I&apos;m <span className="gradientText">Ryan</span>.
        </h1>
        <p className="lead">
          I&apos;m a Computer Science graduate currently looking for an opportunity to
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
          <button className="button button--ghost" type="button" onClick={onContactClick}>
            Contact
          </button>
          <a
            className="button button--ghost"
            href={`${process.env.PUBLIC_URL}/images/Ryan_s_Resume (5).pdf`}
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
