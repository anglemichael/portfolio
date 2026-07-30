import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">

      <div className="about-header">
        <h2>About Me</h2>
        <p className="about-subtitle">
          Get to know a little more about me.
        </p>
      </div>

      <div className="about-content">

        <p className="about-intro">
          Hello! I'm <span>Angel Biju</span>, an aspiring
          <strong> Full-Stack Web Developer</strong> from Mysuru, India. I
          enjoy building modern, responsive, and user-friendly web
          applications while continuously improving my skills.
        </p>

        <div className="about-cards">

          <div className="about-card">
            <h3>💻 Web Development</h3>

            <p>
              I build responsive websites using HTML, CSS, JavaScript,
              React, and I'm currently learning Node.js to become a
              full-stack developer.
            </p>
          </div>

          <div className="about-card">
            <h3>🔐 Cybersecurity</h3>

            <p>
              Besides web development, I'm also exploring cybersecurity
              and learning how to create secure and reliable applications.
            </p>
          </div>

          <div className="about-card">
            <h3>🚀 My Goal</h3>

            <p>
              My goal is to become a software engineer capable of building
              scalable, secure, and impactful applications while constantly
              learning new technologies.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;