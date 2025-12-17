import "../styles/projects.css";

export default function Projects() {
  return (
    <section className="page">
      {/* Section Header */}
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">
        Enterprise, government, and real-world applications I designed and
        developed as a Full Stack Developer
      </p>

      <div className="project-grid">
        {/* BIVS */}
        <div className="project-card highlight">
          <h3>BIVS – Biometric Identity Verification System</h3>
          <p className="project-role">Full Stack Developer</p>

          <p className="project-desc">
            Developed a secure biometric-based identity verification system used
            for validating customer identities through biometric data and
            backend verification workflows.
          </p>

          <p className="project-tech">
            <strong>Tech:</strong> React.js, Golang, PostgreSQL, REST APIs, JWT, , Apache Superset, Grafana
          </p>
        </div>

        {/* POS Onboarding */}
        <div className="project-card highlight">
          <h3>POS Onboarding System</h3>
          <p className="project-role">Full Stack Developer</p>

          <p className="project-desc">
            Built a telecom onboarding platform for capturing DKYC and EKYC
            submissions through POS devices, enabling secure customer data
            validation and workflow processing.
          </p>

          <p className="project-tech">
            <strong>Tech:</strong> React.js, Golang, PostgreSQL, JWT, REST APIs
          </p>
        </div>

        {/* CSC Portal */}
        <div className="project-card highlight">
          <h3>CSC Portal – Verification Officer Dashboard</h3>
          <p className="project-role">Full Stack Developer</p>

          <p className="project-desc">
            Developed a role-based CSC portal where verification officers review,
            validate, accept, or reject DKYC and EKYC submissions with detailed
            form validation and audit tracking.
          </p>

          <p className="project-tech">
            <strong>Tech:</strong> React.js, Golang, PostgreSQL, JWT, RBAC
          </p>
        </div>

        {/* IONLEDGER */}
        <div className="project-card highlight">
          <h3>IONLEDGER Platform – Battery Passport System</h3>
          <p className="project-role">Full Stack Developer</p>

          <p className="project-desc">
            Developed a battery passport platform for EV batteries, displaying
            complete static and dynamic battery data using a unique Battery
            Passport ID, enabling traceability and lifecycle monitoring.
          </p>

          <p className="project-tech">
            <strong>Tech:</strong> React.js, Golang, PostgreSQL
          </p>
        </div>

        {/* AIGS Hostel */}
        <div className="project-card highlight">
          <h3>AIGS Hostel Management System</h3>
          <p className="project-role">UI Designer & Full Stack Developer</p>

          <p className="project-desc">
            Designed and developed a complete hostel management platform to
            manage residents, payments, visitors, staff, complaints, and admin
            workflows using a modern card-based dashboard UI.
          </p>

          <p className="project-tech">
            <strong>Tech:</strong> React.js, Golang, PostgreSQL, Docker, AWS
          </p>


        </div>

        {/* Freelance / WordPress */}
        <div className="project-card highlight">
          <h3>Business & Portfolio Websites</h3>
          <p className="project-role">Freelance Full Stack Developer</p>

          <p className="project-desc">
            Designed and delivered multiple business and portfolio websites with
            custom WordPress themes, responsive UI, SEO optimization, and
            performance enhancements.
          </p>

          <p className="project-tech">
            <strong>Tech:</strong> WordPress, PHP, MySQL, SEO Tools
          </p>
        </div>
      </div>
    </section>
  );
}
