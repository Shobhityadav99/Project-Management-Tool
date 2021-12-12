import React from "react";
import { Navbar } from "../../components/Navbar";
import { Searchbar } from "../../components/Searchbar";
import { Card } from "../../components/Card";
import "./Project.css";
export const Project = () => {
  return (
    <div className="project-container">
      <Navbar />
      <Searchbar />
      <div className="project-card-container">
        <Card board_id="b-1" card_id="c-1" />
        <Card board_id="b-2" card_id="c-2"/>
      </div>
    </div>
  );
};
