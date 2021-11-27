import React from "react";
import {Navbar} from "../../components/Navbar";
import {Searchbar} from "../../components/Searchbar"; 
import {Card} from "../../components/Card";
import "./Project.css";
export const Project = () => {
    return (
        <div className="Project-container">
            <Navbar />
            <Searchbar />
            <Card />
            <Card />
        </div>
    );
}