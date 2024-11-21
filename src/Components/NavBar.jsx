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
            src="../../public/edwin-logo.png"
            alt=""
          />
        </a>
        <ul className={`nav-list ${isMenuOpen ? "open" : ""}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
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
