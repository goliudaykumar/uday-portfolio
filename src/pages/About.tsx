import "../styles/page.css";

export default function About() {
  return (
    <section className="page">
      <h2>About Me</h2>

      <p className="lead">
        Full Stack Developer with 2+ years of experience building scalable,
        user-centric web applications for enterprise and government projects.
      </p>

      <div className="about-grid">
        <div className="about-card">
          <h3>Who I Am</h3>
          <p>
            I specialize in UI-driven development, combining clean design with
            robust frontend and backend systems. In my current role, all
            projects use my UI designs from concept to production.
          </p>
        </div>

        <div className="about-card">
          <h3>What I Do</h3>
          <p>
            I work across the full stack — designing interfaces in Figma,
            developing React frontends, building Golang APIs, and deploying
            applications using Docker, Kubernetes, and AWS.
          </p>
        </div>

        <div className="about-card">
          <h3>Industry Experience</h3>
          <p>
            I have worked on enterprise and government platforms including
            telecom onboarding systems, POS solutions, and hostel management
            systems.
          </p>
        </div>
      </div>
    </section>
  );
}
