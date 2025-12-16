import "../styles/home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Hi, I’m Uday Kumar 👋</h1>
        <p>
          UI Designer & React Developer crafting clean, modern, and scalable
          web experiences.
        </p>

        <div className="home-buttons">
          <a href="/resume.pdf" target="_blank"  rel="noopener noreferrer" className="btn primary">
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
