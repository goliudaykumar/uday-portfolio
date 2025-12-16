// Projects.tsx
import { Link } from "react-router-dom";
import "../styles/projects.css";

export default function Projects() {
  return (
    <section className="page">
      <h2>Projects</h2>

      <div className="project-grid">
        {/* Hostel Management */}
        <div className="project-card">
          <h3>AIGS Hostel Management System</h3>
          <p className="project-role">UI Designer & Full Stack Developer</p>
          <p>
            Developed a complete hostel management platform to manage residents,
            payments, visitors, staff, and admin workflows with a clean,
            card-based dashboard UI.
          </p>
          <Link to="/case-study">View Case Study →</Link>
        </div>

        {/* Digital Interior Design */}
        <div className="project-card">
          <h3>Digital Interior Design Web Application</h3>
          <p className="project-role">Full Stack Developer</p>
          <p>
            Built a collaborative platform for interior designers and clients
            to manage design projects, visualize layouts, and streamline
            communication.
          </p>
          <p>
            Implemented secure authentication, role-based access (Admin,
            Designer, Client), and responsive UI.
          </p>
          <p>
            <strong>Tech:</strong> React.js, HTML, CSS, Bootstrap, Node.js,
            PHP (Admin), MySQL
          </p>
        </div>

        {/* BSNL POS */}
        <div className="project-card">
          <h3>BSNL POS Onboarding System</h3>
          <p className="project-role">Full Stack Developer</p>
          <p>
            Developed secure telecom onboarding workflows with JWT-based
            authentication, role-based access, and backend API integration
            for POS operations.
          </p>
        </div>

        {/* Ecommerce */}
        <div className="project-card">
          <h3>E-Commerce Website</h3>
          <p className="project-role">Full Stack Developer</p>
          <p>
            Developed a responsive eCommerce platform allowing users to browse
            products, manage carts, and complete secure checkout processes.
          </p>
          <p>
            Built backend features for user accounts, product management,
            and order processing.
          </p>
        </div>

        {/* WordPress */}
        <div className="project-card">
          <h3>Business & Portfolio Websites</h3>
          <p className="project-role">Freelance / Full Stack Developer</p>
          <p>
            Designed and deployed multiple WordPress business and portfolio
            websites with custom themes, responsive layouts, and CMS-based
            content management.
          </p>
          <p>
            Integrated SEO, security, performance optimization plugins, and
            ensured scalability and maintainability.
          </p>
        </div>
      </div>
    </section>
  );
}
