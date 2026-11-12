
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

  const exploreServices = () => {
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section className="hero">
      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-content">

          <span className="hero-tag">
            Welcome to SmartCare Hospital
          </span>

          <h1>
            We Provide The Best
            <span> Medical Services</span>
            For Your Health
          </h1>

          <p>
            Your health is our priority. Get expert medical care,
            experienced doctors, and modern healthcare facilities
            all in one place.
          </p>

          <div className="hero-buttons">

            <button
              className="hero-btn primary-btn"
              onClick={() => navigate("/appointment")}
            >
              Book Appointment →
            </button>

            <button
              className="hero-btn secondary-btn"
              onClick={exploreServices}
            >
              Explore Services →
            </button>

          </div>

          <div className="hero-info">

            <div>
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>

            <div>
              <h3>50+</h3>
              <p>Expert Doctors</p>
            </div>

            <div>
              <h3>10K+</h3>
              <p>Happy Patients</p>
            </div>

          </div>

        </div>

        {/* Right Image */}
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800"
            alt="Doctor"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
