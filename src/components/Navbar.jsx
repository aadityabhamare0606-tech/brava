import { useState } from "react";
import { FiMenu, FiPhoneCall, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";

const navItems = [
  { label: "Home", target: "home" },
  { label: "Services", target: "services" },
  { label: "Plans", target: "pricing" },
  { label: "Reviews", target: "reviews" },
  { label: "Contact", target: "contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleNavigate = (target) => {
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar container" id="top">
      <button
        type="button"
        className="logo"
        onClick={() => handleNavigate("home")}
      >
        <img src={logo} alt="SkyTech" className="logo-image" />
      </button>

      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        {navItems.map((item) => (
          <li key={item.target} onClick={() => handleNavigate(item.target)}>
            {item.label}
          </li>
        ))}
      </ul>

      <div className="nav-call-query">
        <span className="nav-call-icon" aria-hidden="true">
          <FiPhoneCall />
        </span>
        <div className="nav-call-content">
          <p>Call For Query</p>
          <a href="tel:+917020737903">+91 70207 37903</a>
        </div>
      </div>

      <button
        type="button"
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </button>
    </nav>
  );
};

export default Navbar;
