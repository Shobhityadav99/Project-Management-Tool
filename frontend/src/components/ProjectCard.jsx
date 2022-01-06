import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../css/ProjectCard.css";

export const ProjectCard = props => {
  const navigate=useNavigate();
  const projects = props.projects;
  return (
    <>
      <div className="project-card-container">
        {projects.map((d) => {
          return (
            <div className="project-square-container">
              <label onClick={navigate(`/project/:${d.id}`)}>{d.title}</label>
            </div>
          );
        })}
      </div>
    </>
  );
};
