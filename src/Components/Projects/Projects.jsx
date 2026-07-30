import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Weather App",
      image: "/weather.png",
      description: "Real-time weather dashboard using the OpenWeather API.",
      tech: ["React", "API"],
      live: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Portfolio Website",
      image: "/portfolio.png",
      description:
        "A responsive personal portfolio built using React and Vite.",
      tech: ["React", "CSS", "JavaScript"],
      live: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Calculator",
      image: "/calculator.jpg",
      description:
        "A calculator built using HTML, CSS, and JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "#",
      github: "#",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tags">
                {project.tech.map((item, index) => (
                  <span className="tag" key={index}>
                    {item}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  // href={project.live}
                  className="btn btn-primary"
                  // target="_blank"
                  // rel="noopener noreferrer"
                >
                  Live Demo
                </a>

                <a
                  // href={project.github}
                  className="btn btn-secondary"
                  // target="_blank"
                  // rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;