
import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    alert("Login form submitted successfully!");
  };

  return (
    <div className="login-page">

      <div className="login-container">

        <div className="login-left">
          <h1>🏥 SmartCare Hospital</h1>
          <h2>Your Health, Our Priority</h2>
          <p>
            Providing quality healthcare services with
            advanced technology and experienced doctors.
          </p>
        </div>

        <div className="login-right">

          <h2>Welcome Back!</h2>
          <p className="login-subtitle">
            Login to your account
          </p>

          <form onSubmit={handleLogin}>

            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <div className="password-box">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span onClick={() =>
                  setShowPassword(!showPassword)
                }>
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>
            </div>

            <div className="forgot-password">
              <a href="/forgot-password">Forgot Password?</a>
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>

          </form>

          <p className="register-text">
            Don't have an account?
            <a href="/register"> Register Now</a>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;
