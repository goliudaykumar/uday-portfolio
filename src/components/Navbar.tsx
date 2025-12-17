import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <h2 className="logo">Uday Kumar</h2>

        {/* Desktop Menu */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={() => setOpen(true)}>
          ☰
        </div>
      </div>

      {/* Mobile Side Menu */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="close-btn" onClick={closeMenu}>✕</div>

        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/experience" onClick={closeMenu}>Experience</Link>
        <Link to="/projects" onClick={closeMenu}>Projects</Link>
        <Link to="/skills" onClick={closeMenu}>Skills</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </div>

      {/* Overlay */}
      {open && <div className="overlay" onClick={closeMenu}></div>}
    </header>
  );
}
