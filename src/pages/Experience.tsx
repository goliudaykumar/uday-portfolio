// Experience.tsx
import { motion } from "framer-motion";
import "../styles/experience.css";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Smart Falcon LLP",
    period: "Feb 2025 – Present",
    points: [
      "Designed UI/UX wireframes and dashboards for enterprise applications",
      "Developed scalable React.js frontend applications",
      "Built Golang backend services and RESTful APIs",
      "Implemented JWT-based authentication and role-based access control",
      "Deployed applications using Docker, Kubernetes, and AWS",
      "Worked on BIVS, POS Onboarding, CSC Portal, and AIGS Hostel Management System",
    ],
  },
  {
    role: "Software Engineer",
    company: "ABACUS INFOCOM Pvt Ltd",
    period: "Aug 2024 – Jan 2025",
    points: [
      "Designed and deployed websites and web applications as a Full Stack Developer",
      "Worked across UI/UX design, frontend, backend, and project deployment",
      "Developed and customized WordPress themes and plugins",
      "Managed website deployment, performance optimization, security, and maintenance",
      "Ensured responsive design across desktop, tablet, and mobile devices",
      "Maintained development documentation, code standards, and user guides",
    ],
  },
  {
    role: "PHP Developer (Freelancer)",
    company: "MAGNEQ Services",
    period: "Feb 2024 – Aug 2024",
    points: [
      "Developed and maintained dynamic web applications using PHP",
      "Designed and managed MySQL databases with complex queries",
      "Contributed to both frontend and backend development tasks",
      "Collaborated with senior developers to understand and implement project requirements",
      "Improved application performance by following PHP best practices",
      "Continuously learned PHP frameworks and coding standards",
    ],
  },
  {
    role: "Full Stack Web Development Intern",
    company: "LTE Techsoft",
    period: "May 2023 – Dec 2023",
    points: [
      "Assisted in designing and developing dynamic web applications",
      "Built responsive user interfaces using HTML, CSS, JavaScript, and React.js",
      "Worked on both frontend and backend components",
      "Wrote clean, maintainable, and reusable code",
    ],
  },
];

export default function Experience() {
  return (
    <section className="page">
      <h2>Experience</h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-card"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>{exp.role}</h3>
            <span className="company">
              {exp.company} · {exp.period}
            </span>

            <ul>
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
