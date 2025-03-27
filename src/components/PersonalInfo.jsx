// src/components/PersonalInfo.jsx
function PersonalInfo() {
  const personalInfoItems = [
    { src: "/images/IMG_0881.webp", alt: "Ryan's headshot" },
    { content: "I am a computer science student at Montclair State University. I'm a senior and I'm currently looking for a summer internship this year to advance my career and develop new skills in a work environment." },
    { content: "In my free time, I like to play video games, play sports with friends, and spend time with my family." }
  ];

  return (
    <section className="personalinfo">
      {personalInfoItems.map((item, index) => (
        <div key={index} className={item.src ? "picture" : "paragraph"}>
          {item.src ? (
            <img src={item.src} alt={item.alt} />
          ) : (
            <p>{item.content}</p>
          )}
        </div>
      ))}
    </section>
  );
}

export default PersonalInfo;
