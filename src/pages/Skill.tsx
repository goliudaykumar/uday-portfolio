import "../styles/skill.css";

export default function Skills() {
  return (
    <section className="page">
      {/* Section Header */}
      <h2 className="section-title">Technical Skills</h2>
      <p className="section-subtitle">
        Technologies and tools I use to design, build, and deploy applications
      </p>

      <div className="skills-wrapper">
        {/* Frontend */}
        <div className="skill-section">
          <h3>🎨 Frontend</h3>
          <div className="skill-grid">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>Bootstrap</span>
            <span>JavaScript</span>
            <span>React.js</span>
          </div>
        </div>

        {/* Backend */}
        <div className="skill-section">
          <h3>⚙️ Backend</h3>
          <div className="skill-grid">
            <span>Golang</span>
            <span>PHP</span>
            <span>Node.js</span>
            <span>REST APIs</span>
            <span>JWT Authentication</span>
          </div>
        </div>

        {/* Database & DevOps */}
        <div className="skill-section">
          <h3>🗄️ Database & DevOps</h3>
          <div className="skill-grid">
            <span>PostgreSQL</span>
            <span>MySQL</span>
            <span>Docker</span>
            <span>Kubernetes</span>
            <span>AWS</span>
          </div>
        </div>

        {/* Tools */}
        <div className="skill-section">
          <h3>🛠️ Tools & Platforms</h3>
          <div className="skill-grid">
            <span>WordPress</span>
            <span>Figma</span>
            <span>Apache Superset</span>
          </div>
        </div>
      </div>
    </section>
  );
}
