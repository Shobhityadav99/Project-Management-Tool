import React from "react";
import "../css/ProjectCard.css";
import dummyData from "../resources/dummy.json";

const Dummydata = dummyData.data;
export const ProjectCard = () => {
  return (
    <>
      <div className="project-card-container">
        {Dummydata.map((data) => {
          return (
            <div className="project-square-container">
              <label>{data.title}</label>
            </div>
          );
        })}
      </div>
    </>
  );
};
