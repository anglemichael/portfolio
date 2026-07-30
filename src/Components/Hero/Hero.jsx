import "./Hero.css";

function Hero() {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 17
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <section className="hero-section" id="hero">

      <div className="hero-content">

        <div className="hero-text">

          <h1>
            {greeting}, I'm <span className="highlight">Angel Biju 😊👀</span>
          </h1>

          <p className="tagline">
            I'm a passionate Full-Stack Web Developer based in Mysuru,
            currently learning React, Node.js and Cybersecurity.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>

            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>

          </div>

        </div>

        <div className="hero-image">

          <img
            src="/Profile.jpg"
            alt="Angel Biju"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;