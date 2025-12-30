import React, { useEffect, useState } from "react";
import "./Header.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>

      <div className="header-left">
        <div className="brand">
          <span className="name">Neha's Portfolio</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`header-center ${menuOpen ? "active" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#contact" className="contact-link" onClick={() => setMenuOpen(false)}>Contact</a>

        <div className="header-right">
          <a
            href="https://github.com/nehavaghasiya1502"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/neha-vaghasiya-106b743a1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
         
          <a
            href="mailto:nehavaghasiya573@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </nav>
      {/* Toggler */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

    </header>
  );
};

export default Header;

