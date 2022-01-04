import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/ProjectCard.css";

export const ProjectCard = props => {
  const navigate=useNavigate();
  const projects = props.projects;
  console.log(projects);
  return (
    <>
      <div className="project-card-container">
        {/* {projects.map((d) => {
          return (
            <div className="project-square-container">
              <label onClick={navigate(`/project/:${d.id}`)}>{d.title}</label>
            </div>
          );
        })} */}
        {projects.forEach(project => {
          return (
            <div style={{border: "3px solid red"}} className="project-square-container">
              <label onClick={navigate(`/project/:${project._id}`)}>{project.title}</label>
            </div>
          );
        })}
      </div>
    </>
  );
};
