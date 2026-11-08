import React, { useState } from "react";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    alert("Login successful!");

    // Go to appointment page
    window.location.href = "/appointment";
  };

  return (
    <div className="login-page">
      <div className="login-box">

        <h1>🏥 Smart Hospital</h1>
        <h2>Patient Login</h2>

        <form onSubmit={handleLogin}>

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>

      </div>
    </div>
  );
}

export default Login;