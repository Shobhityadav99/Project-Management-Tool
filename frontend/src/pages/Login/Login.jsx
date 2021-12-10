import React from "react";
import "./Login.css";
import loginImage from "../../resources/loginImage.png";
import {Link} from 'react-router-dom';
const Login = () => {
  return ( <>
    <div className="login-navbar">
        <div className="login-navbar-center-item1">Tutorials</div>
        <div className="login-navbar-center-item2">Documentation</div>
        <div className="login-navbar-center-item3">About Us</div>
      </div>
        <div className="login-page">
      <div className="login-image-container">
        <img src={loginImage} alt="" className="login-image"/>
      </div>
      <div className="login-container">
      <div className="choose-container">
        <div className="login-choose-1">Login</div>
        <div className="login-choose-2">Register</div>
      </div>
      <div className="login-input-container">
        <div className="login-username">
          <label className="login-label">Username:</label>
          <input className="login-input" />
          <label className="login-label">Password:</label>
          <input type="password" className="login-input" />
        </div>
        <div className="login-forgot-password">
          <a href="/">Forgot Password</a>
        </div>
        <Link to="/project">
          <button className="login-submit-button">Login</button>
        </Link>
      </div>
      </div>
    </div>
    </>
  );
};

export default Login;
