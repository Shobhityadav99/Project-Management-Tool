import React from "react";
import { Navbar } from "../../components/Navbar";
import "./profile.css";
import profileImage from "../../resources/pfp.jpg";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="innerDiv">
        <h1 className="profile_settings"> Settings</h1>
        <h3 className="profile"> Profile</h3>
        <p className="para_profile"> Update your personal details here..</p>
        <hr></hr>
      </div>
      <div className="username_profile">
        <h5>Username</h5>
        <div className="username_profile_input">
          <input
            className="username_input"
            type="text"
            placeholder="username"
          ></input>
        </div>
      </div>
      <hr className="website_hr"></hr>
      <div className="profile_website">
        <h5>Email</h5>
        <div className="username_email_input">
          <input
            className="email_input"
            type="text"
            placeholder="email"
          ></input>
        </div>
      </div>
      <hr className="website_hr"></hr>
      <div className="profile_photo">
        <h5 className="profile_update">
          {" "}
          Your Photo
          <span className="para_profile_update">
            <br></br>This will be displayed on your Profile
          </span>
        </h5>
        <div className="profile-image-container">
          <img src={profileImage} alt="#" className="myaccount-profile-image" />
        </div>
        <div className="update_button_div">
          <Button variant="primary" className="btn btn-sm update_button">
            Update{" "}
          </Button>
        </div>
      </div>
      <hr className="website_hr"></hr>
      <div className="profile_bio">
        <h5 className="profile_update_bio">
          {" "}
          Your bio
          <span className="para_profile_update_bio">
            <br></br>Write a Short Introduction
          </span>
        </h5>
        <textarea className="profile_textarea_bio">describe...</textarea>
      </div>
      <hr className="website_hr"></hr>

      <h5 className="password-change-label">Change Password:</h5>

      <div className="current_div">
        <h6 className="profile-current-password-label">
          Enter current password:
        </h6>

        <input type="password" className="profile-current-password" />
      </div>

      <div className="new_div">
        <h6 className="profile-new-password-heading">Enter new password:</h6>
        <br />
        <input type="password" className="profile-new-password" />
      </div>

      <div className="retype_div">
        <h6 className="profile-retype-password-heading">
          Retype new password:
        </h6>
        <br />
        <input type="password" className="profile-retype-password" />
      </div>
      <br />
      <br />
      <Button variant="primary" className="btn btn-sm password_button">
        Update Password
      </Button>
    </div>
  );
};
