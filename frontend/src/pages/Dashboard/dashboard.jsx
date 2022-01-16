import React from "react";
import { Navbar } from "../../components/Navbar";
import axios from "axios";
import "./dashboard.css";
import { useState } from "react";
import { ProjectCard } from "../../components/ProjectCard";
import { useNavigate } from "react-router-dom";
import { Popup } from "../../components/Popup";
import { useEffect } from "react";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [popupBtnState, setPopupBtnState] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000" + window.location.pathname, {
        headers: {
          authorization:
            "Bearer " + localStorage.getItem("authorization-token"),
        },
      })
      .then((response) => {
        setProjects(response.data.projects);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  // If the user isn't logged in, redirect them to login page
  const loginCheck = () => {
    if (localStorage.getItem("authorization-token") == null) navigate("/login");
  };
  loginCheck();
  console.log(projects);
  const userId = window.location.pathname.split("/").pop();
  return (
    <>
      <React.Fragment>
        <Navbar />
        <div className="dashboard-container">
          <div className="dashboard-leftpane">
            <div className="dashboard-sidebar">
              <div
                className="dashboard-sidebar-label"
                onClick={() =>
                  navigate(`/user/account/updateProfile/${userId}`)
                }
              >
                My Profile
              </div>
              <div className="dashboard-sidebar-label">All Projects</div>
              <div className="dashboard-sidebar-label">Deadlines</div>
              <div className="dashboard-sidebar-label">Messages</div>
              <div className="dashboard-sidebar-label">Notifications</div>
              <div className="dashboard-sidebar-label">Settings</div>
              <div
                className="dashboard-sidebar-label"
                onClick={() => {
                  localStorage.clear();
                  navigate(`/login`);
                }}
              >
                Logout
              </div>
            </div>
            <div className="dashboard-sideline"></div>
          </div>
          <div className="dashboard-project-blocks">
            <label className="dashboard-project-blocks-label">
              All Projects
            </label>
            {projects && <ProjectCard projects={projects} />}
            <div
              style={{ border: "3px solid red" }}
              className="project-square-container"
            >
              <button onClick={() => setPopupBtnState(true)}>
                New Project
              </button>
              <Popup
                trigger={popupBtnState}
                setTrigger={setPopupBtnState}
                userid={userId}
              ></Popup>
            </div>
          </div>
        </div>
      </React.Fragment>
    </>
  );
};
