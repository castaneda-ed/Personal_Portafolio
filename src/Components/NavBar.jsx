import { useState } from "react";
import "../styles/NavBar.css";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <header>
      <nav className="navbar">
        <a href="/" className="navbar-brand">
          <img
            className="navbar-brand"
            src="https://www.dropbox.com/scl/fi/45sc05ir5ra8ylgh4p80d/edwin-logo.jpg?rlkey=to2djmfikvfc6tuu9pndbmq2f&st=gvpcdare&dl=1"
            alt=""
          />
        </a>
        <ul className={`nav-list ${isMenuOpen ? "open" : ""}`}>
          <a href="/" onClick={toggleMenu}>
            <li>Home </li>
          </a>

          <a href="#about" onClick={toggleMenu}>
            <li>About </li>
          </a>

          <a href="#portfolio" onClick={toggleMenu}>
            <li>Portfolio</li>
          </a>

          <a href="#contact" onClick={toggleMenu}>
            <li>Contact</li>
          </a>
        </ul>
        <button
          className="navbar-toggler"
          aria-label="Toggle navigation menu"
          onClick={toggleMenu}
        >
          {!isMenuOpen ? (
            <>
              <span className="toggler-icon"></span>
              <span className="toggler-icon"></span>
              <span className="toggler-icon"></span>
            </>
          ) : (
            <>
              <span className="close-nav"></span>
              <span className="close-nav"></span>
            </>
          )}
        </button>
      </nav>
    </header>
  );
}
