import React, { useContext, useState } from "react";
import "./Register.css";
import registerImage from "../../resources/loginImage.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const authSubmitHandler = async (event) => {
    event.preventDefault();
    const receivedData = {name: name, email: email, password: password};
      axios.post('http://localhost:5000/user/register', receivedData)
      .then(response => {
        console.log(response);
        navigate(`/user/dashboard/${response.data.user.id}`);
      })
      .catch (err => {
      console.log(err);
    });
  };
  return (
    <>
      <div className="register-navbar">
        <div className="register-navbar-center-item1">Tutorials</div>
        <div className="register-navbar-center-item2">Documentation</div>
        <div className="register-navbar-center-item3">About Us</div>
      </div>
      <div className="register-page">
        <div className="register-image-container">
          <img src={registerImage} alt="" className="register-image" />
        </div>
        <div className="register-container">
          <div className="register-choose-container">
            <Link to="/login" style={{ textDecoration: "none" }}>
              <div className="choose-01">Login</div>
            </Link>
            <div className="choose-02 active">Register</div>
          </div>
          <form onSubmit={authSubmitHandler}>
          <div className="register-input-container">
            <div className="register-username">
              <label className="register-label">Name:</label>
              <input
                type="text"
                className="register-input"
                id="name"
                value={name}
                onChange={nameHandler}
              />
              <label className="register-label">Email:</label>
              <input
                type="text"
                className="register-input"
                id="email"
                value={email}
                onChange={emailHandler}
              />
              <label className="register-label">Password:</label>
              <input
                type="password"
                className="register-input"
                id="password"
                value={password}
                onChange={passwordHandler}
              />
              <label className="register-label">Confirm Password:</label>
              <input type="password" className="register-input" />
            </div>
              <button type="submit" className="register-submit-button">Register</button>
          </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
