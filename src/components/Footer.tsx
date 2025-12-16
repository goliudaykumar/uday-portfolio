// Footer.tsx
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Uday Kumar. All rights reserved.</p>

      <div className="footer-links">
        <a
          href="https://github.com/goliudaykumar"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="www.linkedin.com/in/uday-kumar-goli-60241b305"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a href="mailto:goliudaykumar01@gmail.com">
          Email
        </a>
      </div>
    </footer>
  );
}
