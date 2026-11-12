
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Nav.css";

function Navbar({ onBookAppointment, onLogin }) {

  const navigate = useNavigate();
  const location = useLocation();

  const [section, setSection] = useState("");

  const goToSection = (id) => {
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth"
      });
    } else {
      setSection(id);
      navigate("/");
    }
  };

  useEffect(() => {
    if (location.pathname === "/" && section) {
      const timer = setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({
          behavior: "smooth"
        });
        setSection("");
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [location.pathname, section]);

  return (
    <>
      <div className="top-header">
        <div className="top-left">
          <span>📞 +91 9031307086</span>
          <span>✉ info@smartcare.com</span>
          <span>📍 Lucknow, India</span>
        </div>

        <div className="top-right">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <span>Twitter</span>
          <a href="https://in.linkedin.com/" target="_blank" rel="noopener noreferrer">Linkedin</a>
          <span>YouTube</span>
        </div>
      </div>

      <header className="navbar">

        <div
          className="logo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <h2>SmartCare</h2>
          <p>H O S P I T A L</p>
        </div>

        <nav className="nav-links">
          <a href="/" onClick={(e) => {
            e.preventDefault();
            goToSection("home");
          }}>Home</a>

          <a href="/#about" onClick={(e) => {
            e.preventDefault();
            goToSection("about");
          }}>About</a>

          <a href="/#doctors" onClick={(e) => {
            e.preventDefault();
            goToSection("doctors");
          }}>Doctors</a>

          <a href="/#departments" onClick={(e) => {
            e.preventDefault();
            goToSection("departments");
          }}>Departments</a>

          <a href="/#services" onClick={(e) => {
            e.preventDefault();
            goToSection("services");
          }}>Services</a>

          <a href="/#contact" onClick={(e) => {
            e.preventDefault();
            goToSection("contact");
          }}>Contact</a>
        </nav>

        <div className="nav-buttons">
          <button
            className="login-btn"
            onClick={onLogin}
          >
            Login
          </button>

          <button
            className="appointment-btn"
            onClick={onBookAppointment}
          >
            Book Appointment
          </button>
        </div>

      </header>
    </>
  );
}

export default Navbar;
