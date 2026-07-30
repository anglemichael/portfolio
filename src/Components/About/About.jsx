import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">

      <h2>About Me</h2>

      <div className="about-container">

        <div className="about-image">
          <img
            src="/Profile2.jpg"
            alt="Angel Biju"
          />
        </div>

        <div className="about-content">

          <h3>Hello, I'm Angel Biju 👋</h3>

          <p>
            I am an aspiring <strong>Full-Stack Web Developer</strong> based
            in Mysuru, India. I enjoy building responsive and modern web
            applications using HTML, CSS, JavaScript, React, and Node.js.
          </p>

          <p>
            Besides web development, I am also exploring
            <strong> Cybersecurity</strong>. I enjoy solving problems,
            learning new technologies, and creating projects that improve my
            programming skills.
          </p>

          <p>
            My goal is to become a skilled software engineer who can build
            secure, scalable, and user-friendly applications while constantly
            learning and improving.
          </p>

          <a href="#contact" className="about-btn">
            Let's Connect
          </a>

        </div>

      </div>

    </section>
  );
}

export default About;