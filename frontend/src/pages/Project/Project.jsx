import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Searchbar } from "../../components/Searchbar";
import { Card } from "../../components/Card";
import axios from "axios";
import "./Project.css";

export const Project = () => {
  const [projectData, setProjectData] = useState([]);
  const deleteCard = (id) => {
    projectData.filter(card => card._id!==id);
    console.log(projectData);
  }
  const addNewCard = () => {
    axios
      .patch("http://localhost:5000" + window.location.pathname, {
        title: "sample title",
        tasks: ["sample task 1"],
      })
      .then((response) => {
        window.location.reload(false);
        setProjectData(projectData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000" + window.location.pathname)
      .then((response) => {
        setProjectData(response.data.project.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(projectData);
  return (
    <div className="project-container">
      <Navbar />
      <Searchbar />
      <div className="project-card-container">
        {projectData.map((card) => {
          return (
            <Card key={`${card._id}69`} title={card.title} data={card.tasks} id={card._id} deleteCard={deleteCard}/>
          );
        })}
      </div>
      <button onClick={addNewCard}>+</button>
    </div>
  );
};
