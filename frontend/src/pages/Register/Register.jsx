import React from "react";
import "./Register.css";
import registerImage from "../../resources/loginImage.png";
import {Link} from 'react-router-dom';
const Register = () => {
  return (
    <>
      <div className="register-navbar">
        <div className="register-navbar-center-item1">Tutorials</div>
        <div className="register-navbar-center-item2">Documentation</div>
        <div className="register-navbar-center-item3">About Us</div>
      </div>
      <div className="register-page">
      <div className="register-image-container">
        <img src={registerImage} alt="" className="register-image"/>
      </div>
      <div className="register-container">
      <div className="register-choose-container">
        <div className="choose-01">Login</div>
        <div className="choose-02 active">Register</div>
      </div>
      <div className="register-input-container">
        <div className="register-username">
          <label className="register-label">Username:</label>
		  <input type="text" className="register-input" />
          <label className="register-label">Email:</label>
          <input  type="text" className="register-input" />
          <label className="register-label">Password:</label>
          <input type="text" className="register-input" />
		  <label className="register-label">Confirm Password:</label>
          <input type="text"  className="register-input" />
        </div>
        <Link to="/project">
        <button className="register-submit-button">Register</button>
        </Link>
      </div>
      </div>
    </div>
    </>
  );
};

export default Register;
