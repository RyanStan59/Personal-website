function PersonalInfo() {
  return (
    <section className="personalinfo">
      {/* Heading above the image */}
      <h2 className="intro-text">Hi, I'm Ryan</h2>

      <div className="picture">
        <img src={`${process.env.PUBLIC_URL}/images/IMG_0881.webp`} alt="Ryan's headshot" />
      </div>
      
      <div className="paragraph">
        <p>
          I am a computer science student at Montclair State University. I'm a
          senior and I'm currently looking for a summer internship this year to
          advance my career and develop new skills in a work environment.
        </p>
        <p>
          In my free time, I like to play video games, play sports with friends,
          and spend time with my family.
        </p>
      </div>
    </section>
  );
}

export default PersonalInfo;
