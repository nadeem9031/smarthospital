
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Hospital Information */}
        <div className="footer-section">
          <h2>🏥 SmartCare Hospital</h2>
          <p>
            Your health is our priority. We provide quality
            healthcare services with experienced doctors
            and modern medical facilities.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="/appointment">Book Appointment</a></li>
            <li><a href="#developers">Our Team</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li>Cardiology</li>
            <li>Neurology</li>
            <li>Orthopedics</li>
            <li>Dental Care</li>
            <li>Eye Care</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section" id="contact">
          <h3>Contact Us</h3>
          <p>📍 Lucknow, Uttar Pradesh, India</p>
          <p>📞 +91 9876543210</p>
          <p>✉️ smartcare@gmail.com</p>
          <p>🕒 24/7 Emergency Services</p>
        </div>


      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} SmartCare Hospital.
          All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;
