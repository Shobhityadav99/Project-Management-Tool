import React,{useEffect,useState} from "react";
import { Navbar } from "../../components/Navbar";
import { Searchbar } from "../../components/Searchbar";
import { Card } from "../../components/Card";
import axios from "axios";
import "./Project.css";

export const Project = () => {
  const [projectData,setProjectData] = useState([]);
  useEffect(() => {
    const fetchProjectData = async () => {
      await axios
      .get("http://localhost:5000" + window.location.pathname)
      .then((response) => {
        console.log(response.data.project.cards);
        setProjectData(response.data.project.cards);
      })
      .catch((err) => {
        console.log(err);
      });
    };
    fetchProjectData();
  }, []);
  return (
    <div className="project-container">
      <Navbar/>
      <Searchbar />
      <div className="project-card-container">
        {projectData.map((card) => {
          return (
            <Card key={`${card.title}69`} title={card.title} data={card.data} />
          );
        })}
      </div>
    </div>
  );
};
