import React from "react";
import { Navbar } from "../../components/Navbar";
import { Searchbar } from "../../components/Searchbar";
import { Card } from "../../components/Card";
import Dummy from "../../resources/project.json";
import "./Project.css";

const DummyData = Dummy.cards;
export const Project = () => {
  return (
    <div className="project-container">
      <Navbar />
      <Searchbar />
      <div className="project-card-container">
        {DummyData.map((card) => {
          return (
            <Card key={`${card.title}69`} title={card.title} data={card.data} />
          );
        })}
      </div>
    </div>
  );
};
