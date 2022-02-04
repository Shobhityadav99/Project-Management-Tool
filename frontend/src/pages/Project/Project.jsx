import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Searchbar } from "../../components/Searchbar";
import { Card } from "../../components/Card";
import axios from "axios";
import "./Project.css";

export const Project = () => {
  const [projectData, setProjectData] = useState([]);
  const updateTitle = (id, title) => {
    console.log(title);
    axios
      .patch("http://localhost:5000" + window.location.pathname, {
        id,
        title,
        flag: "UpdateTitle",
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.log("this didn't work"));
  };
  const updateTask = (id, oldTask, task) => {
    console.log(task);
    console.log(oldTask);
    axios
      .patch("http://localhost:5000" + window.location.pathname, {
        id,
        oldTask,
        task,
        flag: "UpdateTask",
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
        flag: "AddNewCard",
      })
      .then((response) => {
        window.location.reload(false);
        setProjectData(projectData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const addNewTask = (id) => {
    axios
      .patch("http://localhost:5000" + window.location.pathname, {
        id,
        flag: "AddNewTask",
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
              key={`${card._id}_key`}
              title={card.title}
              data={card.tasks}
              id={card._id}
              deleteCard={deleteCard}
              updateTitle={updateTitle}
              updateTask={updateTask}
              addNewTask={addNewTask}
            />
          );
        })}
      </div>
      <button onClick={addNewCard}>+</button>
    </div>
  );
};
