import "../styles/home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home">
      <div className="home-content">
        {/* Main Heading */}
        <h1>
          Hi, I’m <span>Uday Kumar</span> 👋
        </h1>

        {/* Role */}
        <h2 className="home-role">
          UI Designer & Full Stack Developer
        </h2>

        {/* Short Description */}
        <p className="home-desc">
          I design clean user interfaces and build scalable web applications
          using React, Golang, and modern cloud technologies.
        </p>



        {/* CTA Buttons */}
        <div className="home-buttons">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary"
          >
            Download Resume
          </a>

          <Link to="/projects" className="btn secondary">
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
