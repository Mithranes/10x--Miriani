import React, { useState, useContext } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { AuthContext } from "../Auth/AuthContext.jsx";
import "./Navbar.scss";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const scrollOrNavigate = (section) => {
    if (location.pathname === "/") {
      return (
        <ScrollLink
          to={section}
          smooth={true}
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </ScrollLink>
      );
    } else {
      return (
        <RouterLink to="/" onClick={() => setMenuOpen(false)}>
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </RouterLink>
      );
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <RouterLink to="/" onClick={() => setMenuOpen(false)}>
            Vitruvian Studio
          </RouterLink>
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>{scrollOrNavigate("home")}</li>
          <li>{scrollOrNavigate("about")}</li>
          <li>{scrollOrNavigate("projects")}</li>
          <li>{scrollOrNavigate("team")}</li>
          <li>{scrollOrNavigate("blog")}</li>
          <li>{scrollOrNavigate("contact")}</li>

          {user ? (
            <>
              <li>
                <RouterLink to="/profile" onClick={() => setMenuOpen(false)}>
                  My Profile
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/services" onClick={() => setMenuOpen(false)} className="services-btn">
                  Services
                </RouterLink>
              </li>
              <li>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <RouterLink to="/login" className="login-btn" onClick={() => setMenuOpen(false)}>
                  Login
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/register" className="register-btn" onClick={() => setMenuOpen(false)}>
                  Register
                </RouterLink>
              </li>
            </>
          )}
        </ul>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
