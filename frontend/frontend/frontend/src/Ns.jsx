import React from "react";
import "./Home.css";
import Login from "./Login";
function Ns() {
  return (
    <div className="home">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          🏥 Smart<span>Hospital</span>
        </div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#developers">Team</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="nav-buttons">
          <button className="login-btn">Login</button>

          <button className="appointment-btn" onClick={Login}>
            Book Appointment
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-content">

          <p className="small-title">
            WELCOME TO SMART HOSPITAL
          </p>

          <h1>
            Your Health,
            <br />
            <span>Our Priority</span>
          </h1>

          <p className="hero-text">
            Smart Hospital Management System provides fast, secure and
            convenient healthcare services for patients, doctors and hospitals.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Book Appointment →
            </button>

            <button className="secondary-btn">
              Explore Services
            </button>
          </div>

          <div className="stats">

            <div>
              <h3>50+</h3>
              <p>Doctors</p>
            </div>

            <div>
              <h3>1000+</h3>
              <p>Patients</p>
            </div>

            <div>
              <h3>24/7</h3>
              <p>Support</p>
            </div>

          </div>

        </div>

        <div className="hero-image">

          <div className="doctor-card">
            <div className="doctor-icon">👨‍⚕️</div>

            <h3>Professional Care</h3>

            <p>
              Experienced doctors & modern healthcare
            </p>
          </div>

          <div className="heart">
            ❤️
          </div>

        </div>
      </section>

      {/* Services */}
      <section className="services" id="services">

        <p className="section-title">
          OUR SERVICES
        </p>

        <h2>
          Everything You Need in One Place
        </h2>

        <p className="section-description">
          Manage your healthcare easily with our smart hospital services.
        </p>

        <div className="service-container">

          <div className="service-card">
            <div className="service-icon">👨‍⚕️</div>

            <h3>Find Doctors</h3>

            <p>
              Find experienced doctors and choose the right specialist
              for your healthcare needs.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">📅</div>

            <h3>Appointments</h3>

            <p>
              Book and manage doctor appointments quickly and easily.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🧪</div>

            <h3>Laboratory</h3>

            <p>
              Access laboratory tests and view your medical reports securely.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">💊</div>

            <h3>Pharmacy</h3>

            <p>
              Manage prescriptions and medicines from one convenient place.
            </p>
          </div>

        </div>
      </section>

      {/* About */}
      <section className="about" id="about">

        <div className="about-image">
          🏥
        </div>

        <div className="about-content">

          <p className="section-title">
            ABOUT US
          </p>

          <h2>
            Smart Healthcare for a Better Future
          </h2>

          <p>
            Our Smart Hospital Management System connects patients,
            doctors, administrators and hospital services through one
            secure platform.
          </p>

          <div className="features">

            <p>✓ Secure Patient Records</p>

            <p>✓ Easy Appointment Management</p>

            <p>✓ Doctor & Patient Dashboard</p>

            <p>✓ Digital Medical Reports</p>

          </div>

          <button className="primary-btn">
            Learn More →
          </button>

        </div>
      </section>

      {/* Emergency */}
      <section className="emergency" id="contact">

        <div>
          <h2>
            Need Emergency Help?
          </h2>

          <p>
            Our emergency services are available 24/7.
          </p>
        </div>

        <button>
          📞 Call Emergency
        </button>

      </section>

  
   
    </div>
  );
}

export default Ns;