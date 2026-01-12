import React, { useEffect, useState } from "react";
import "./Header.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

const Header = ({ brandName, navLinks, socialLinks }) => {
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
          <span className="name">{brandName}</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`header-center ${menuOpen ? "active" : ""}`}>
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className={link.className || ""}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}

        <div className="header-right">
          {socialLinks.github && (
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          )}

          {socialLinks.linkedin && (
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          )}

          {socialLinks.email && (
            <a href={`mailto:${socialLinks.email}`}>
              <FaEnvelope />
            </a>
          )}
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
