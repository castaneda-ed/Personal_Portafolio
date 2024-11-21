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
          <a href="#">
            <li>Home </li>
          </a>

          <a href="#">
            {" "}
            <li>About </li>
          </a>

          <a href="#">
            {" "}
            <li>Portfolio</li>
          </a>

          <a href="#">
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
