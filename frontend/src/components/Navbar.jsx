import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <i className="fa-solid fa-bars navbar-container-hamburgericon"></i>
        <div className="navbar-left-vl"></div>
        <Link to="/login">
          <div className="navbar-left-text">Project Manager</div>
        </Link>
      </div>
      <div className="navbar-center">
        <div className="navbar-center-item1 active">Dashboard</div>
        <div className="navbar-center-item2">Map</div>
        <div className="navbar-center-item3">Chronology</div>
        <div className="navbar-center-item4">Dashboard</div>
      </div>
      <div className="navbar-right">
        <i className="fas fa-bell"></i>
        <i class="fas fa-user-circle navbar-right-usericon"></i>
        <div className="navbar-right-user">Nishchay</div>
        <i className="fas fa-chevron-down navbar-right-downicon"></i>
      </div>
    </div>
  );
};
