import React from "react";
import { Navbar } from "../../components/Navbar";
import axios from "axios";
import "./dashboard.css";
import { useEffect, useState } from "react";
import { ProjectCard } from "../../components/ProjectCard";
import LoadingSpinner from "../../shared/LoadingSpinner";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [projects,setProjects]= useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      await axios
      .get("http://localhost:5000" + window.location.pathname)
      .then((response) => {
        response.data.projects.map((m) => {
          projects.push(m);
          return setProjects(projects);
        });
      })
      .catch((err) => {
        console.log(err);
      });
    };
    fetchProjects();
  }, []);
  if (projects.length > 0) setIsLoading(false);
  console.log(projects);
  
  const userId = window.location.pathname.split("/").pop();
  return (
    <React.Fragment>
      <Navbar />
      <div className="dashboard-container">
        <div className="dashboard-leftpane">
          <div className="dashboard-sidebar">
            <div className="dashboard-sidebar-label" onClick={() => navigate(`/user/account/updateProfile/${userId}`)}>My Profile</div>
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
          <label className="dashboard-project-blocks-label">All Projects</label>
          {isLoading && (
            <div className="center">
              <LoadingSpinner />
            </div>
          )}
          {!isLoading && projects && <ProjectCard projects={projects} />}
        </div>
      </div>
    </React.Fragment>
  );
};