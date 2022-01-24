import React from "react";
import "../css/Card.css";
import EdiText from "react-editext";
import Board from "../pages/DragAndDrop/Board";
import DragableCard from "../pages/DragAndDrop/DragableCard";
import { useState } from "react";

export const Card = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(props.title);
  const inputTitleHandler = (val) => {
    setIsEditing(false);
    console.log(val.target.value);
    setTitle(val.target.value.toString());
    props.updateTitle(props.id,title);
  };
  const data = props.data;
  console.log(data);
  return (
    <React.Fragment>
      <div className="card-container">
        <div style={{ display: "flex", alignItems: "center" }}>
          {!isEditing ? (
            <label onClick={() => setIsEditing(true)}>{title}</label>
          ) : (
            <input onBlur={inputTitleHandler} />
          )}
        </div>
        <Board id={`${props.title}69`}>
          {data.map((task) => {
            console.log(task);
            return (
              <DragableCard id={`${task}69`} key={`${task}69`}>
                <p>{task}</p>
              </DragableCard>
            );
          })}
        </Board>
        <i className="fas fa-plus addButton"></i>
        <div className="card-trash-bottom">
          <hr style={{ marginTop: "0.5vh" }} />
          <i
            className="fas fa-trash trashButton"
            onClick={() => props.deleteCard(props.id)}
          ></i>
        </div>
      </div>
    </React.Fragment>
  );
};
