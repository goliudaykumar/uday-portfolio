import "../styles/page.css";

export default function About() {
  return (
    <section className="page">
      {/* Section Header */}
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">
        Full Stack Developer focused on clean UI, scalable systems, and real-world impact
      </p>

      {/* Intro */}
      <p className="lead">
        I am a Full Stack Developer with 2+ years of experience building scalable,
        user-centric web applications for enterprise and government projects.
        I combine strong UI/UX design skills with solid frontend and backend development.
      </p>

      {/* About Cards */}
      <div className="about-grid">
        <div className="about-card">
          <h3>👨‍💻 Who I Am</h3>
          <p>
            I am a UI-driven Full Stack Developer who enjoys transforming complex
            requirements into simple, intuitive user experiences.
            In my current role, all projects use my UI designs from concept to production.
          </p>
        </div>

        <div className="about-card">
          <h3>⚙️ What I Do</h3>
          <p>
            I design interfaces in Figma, develop modern React.js applications,
            build scalable backend APIs using Golang and PHP,
            and deploy applications using Docker, Kubernetes, and AWS.
          </p>
        </div>

        <div className="about-card">
          <h3>🏢 Industry Experience</h3>
          <p>
            I have worked on enterprise and government platforms including
            BSNL telecom onboarding systems, POS solutions,
            hostel management systems, and business web applications.
          </p>
        </div>
      </div>
    </section>
  );
}
