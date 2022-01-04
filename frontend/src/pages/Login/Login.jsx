import React, { useState } from "react";
import "./Login.css";
import loginImage from "../../resources/loginImage.png";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  
  const authSubmitHandler = async (event) => {
    event.preventDefault();
    const receivedData = {email: email, password: password};
      axios.post('http://localhost:5000/user/login', receivedData)
      .then(response => {
        console.log(response);
        navigate(`/user/dashboard/${response.data.user.id}`);
      })
      .catch(err =>{
        console.log(err);
      }); 
  };

  return (
    <>
      <div className="login-navbar">
        <div className="login-navbar-center-item1">Tutorials</div>
        <div className="login-navbar-center-item2">Documentation</div>
        <div className="login-navbar-center-item3">About Us</div>
      </div>
      <div className="login-page">
        <div className="login-image-container">
          <img src={loginImage} alt="" className="login-image" />
        </div>
        <div className="login-container">
          <div className="login-choose-container">
            <div className="login-choose-1">Login</div>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <div className="login-choose-2">Register</div>
            </Link>
          </div>
          <form onSubmit={authSubmitHandler}>
            <div className="login-input-container">
              <div className="login-username">
                <label className="login-label">Email:</label>
                <input
                  className="login-input"
                  id="email"
                  value={email}
                  onChange={emailHandler}
                />
                <label className="login-label">Password:</label>
                <input
                  type="password"
                  className="login-input"
                  id="password"
                  value={password}
                  onChange={passwordHandler}
                />
              </div>
              <div className="login-forgot-password">
                <a href="/">Forgot Password</a>
              </div>
              <button className="login-submit-button">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
