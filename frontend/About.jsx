
import React from "react";
import "./About.css";

function About() {
  const stats = [
    { number: "50+", label: "Expert Doctors", icon: "👨‍⚕️" },
    { number: "15K+", label: "Happy Patients", icon: "❤️" },
    { number: "20+", label: "Departments", icon: "🏥" },
    { number: "24/7", label: "Emergency Care", icon: "⏰" }
  ];

  const features = [
    "Experienced Doctors",
    "Advanced Technology",
    "24/7 Emergency Support",
    "Patient-Centered Care"
  ];

  return (
    <section className="about-section" id="about">

      <div className="about-container">

        {/* Left Image */}
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=85"
            alt="Modern SmartCare Hospital"
          />

          <div className="experience-box">
            <h2>15+</h2>
            <p>Years of Excellence</p>
          </div>
        </div>

        {/* Right Content */}
        <div className="about-content">

          <span className="about-label">
            ABOUT SMARTCARE
          </span>

          <h1>
            Your Health Is Our
            <span> Top Priority</span>
          </h1>

          <p className="about-description">
            SmartCare Hospital is committed to providing
            quality healthcare with modern medical technology,
            experienced doctors and compassionate care.
          </p>

          <p className="about-description">
            Our mission is to make healthcare accessible,
            affordable and comfortable for every patient.
          </p>

          <div className="about-features">
            {features.map((feature, index) => (
              <div className="feature-item" key={index}>
                <span>✓</span>
                {feature}
              </div>
            ))}
          </div>


        </div>

      </div>

   

      

    </section>
  );
}

export default About;
