import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Searchbar } from "../../components/Searchbar";
import { Card } from "../../components/Card";
import axios from "axios";
import "./Project.css";

export const Project = () => {
  const [projectData, setProjectData] = useState([]);
  const updateTitle = (id, title) => {
    axios
      .patch("http://localhost:5000" + window.location.pathname, {
        id,
        title,
        flag: "UpdateTitle",
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.log("this didn't work"));
  };
  const deleteCard = (id) => {
    setProjectData(projectData.filter((card) => card._id !== id));
    console.log(projectData);
    axios
      .patch("http://localhost:5000" + window.location.pathname, {
        id,
        flag: "Delete",
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.log("this didn't work"));
  };
  const addNewCard = () => {
    axios
      .patch("http://localhost:5000" + window.location.pathname, {
        title: "sample title",
        tasks: ["sample task 1"],
        flag: "AddNew",
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
  return (
    <div className="project-container">
      <Navbar />
      <Searchbar />
      <div className="project-card-container">
        {projectData.map((card) => {
          return (
            <Card
              key={`${card._id}69`}
              title={card.title}
              data={card.tasks}
              id={card._id}
              deleteCard={deleteCard}
              updateTitle={updateTitle}
            />
          );
        })}
      </div>
      <button onClick={addNewCard}>+</button>
    </div>
  );
};
