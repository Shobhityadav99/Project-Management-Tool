import React from "react";
import "./Login.css";
import loginImage from "../../resources/loginImage.png";
const Login = () => {
  return ( <>
    <div className="navbar">
        <div className="navbar-center-item1">Tutorials</div>
        <div className="navbar-center-item2">Documentation</div>
        <div className="navbar-center-item3">About Us</div>
      </div>
        <div className="login-page">
      <div className="login-image-container">
        <img src={loginImage} className="login-image"/>
      </div>
      <div className="login-container">
      <div className="choose-container">
        <div className="choose-1 active">Login</div>
        <div className="choose-2">Register</div>
      </div>
      <div className="login-input-container">
        <div className="username">
          <label className="label">Username:</label>
          <input className="input" />
          <label className="label">Password:</label>
          <input type="password" className="input" />
        </div>
        <div className="forgot-password">
          <a href="/">Forgot Password</a>
        </div>
        <button className="submit-button">Login</button>
      </div>
      </div>
    </div>
    </>
  );
};

export default Login;
