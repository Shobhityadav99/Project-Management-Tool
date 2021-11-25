import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="login-page">
      <div className="navbar">
        <div className="navbar-center-item1">Tutorials</div>
        <div className="navbar-center-item2">Documentation</div>
        <div className="navbar-center-item3">About Us</div>
      </div>
      <div className="choose-container">
        <div className="choose-1 active">Login</div>
        <div className="choose-2">Register</div>
      </div>
      <div className="login-container">
        <div className="username">
          <label className="label">Username:</label>
          <input className="input" />
          <label className="label">Password:</label>
          <input className="input" />
        </div>
        <div className="forgot-password">
          <a href="/">Forgot Password</a>
        </div>
        <button className="submit-button">Login</button>
      </div>
    </div>
  );
};

export default Login;
