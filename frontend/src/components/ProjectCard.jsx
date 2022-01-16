import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/ProjectCard.css";

export const ProjectCard = (props) => {
  const navigate = useNavigate();
  console.log(props.projects);
  if (!props.projects) {
    return (
      <div className="project-list center">
        <>
          <h2>No projects found. Maybe create one?</h2>
          <button to="/">Create Project</button>
        </>
      </div>
    );
  }
  return (
    <>
      <div className="project-card-container">
        {props.projects.map((project) => {
          return (
            <div
              onClick={() =>
                navigate(`/project/${project.project}`, { replace: true })
              }
              key={project._id}
              style={{ border: "3px solid red" }}
              className="project-square-container"
            >
              <label>Project</label>
              <label>{project.title}</label>
            </div>
          );
        })}
      </div>
    </>
  );
};
