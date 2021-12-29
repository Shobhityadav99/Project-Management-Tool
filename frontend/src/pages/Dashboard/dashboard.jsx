import React from "react";
import { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { ProjectCard } from "../../components/ProjectCard";
import axios from 'axios';
import "./dashboard.css";

export const Dashboard = () => {
  let projects=[];
  useEffect(() => {
    const data = axios.get("http://localhost:5000"+window.location.pathname)
      .then(response => {
        console.log(response);
      })
      .catch(err =>{
        console.log(err);
      }); 
      projects = data.projects;
  },[]);
  return (
    <React.Fragment>
      <Navbar />
      <div className="dashboard-container">
        <div className="dashboard-leftpane">
          <div className="dashboard-sidebar">
            <div className="dashboard-sidebar-label">My Profile</div>
            <div className="dashboard-sidebar-label">All Projects</div>
            <div className="dashboard-sidebar-label">Deadlines</div>
            <div className="dashboard-sidebar-label">Messages</div>
            <div className="dashboard-sidebar-label">Notifications</div>
            <div className="dashboard-sidebar-label">Settings</div>
            <div className="dashboard-sidebar-label">Logout</div>
          </div>
          <div className="dashboard-sideline"></div>
        </div>
        <div className="dashboard-project-blocks">
          {/* <label className="dashboard-project-blocks-label">Recents</label>
          <ProjectCard /> */}
          <label className="dashboard-project-blocks-label">All Projects</label>
          <ProjectCard projects={projects}/>
        </div>
      </div>
    </React.Fragment>
  );
};
