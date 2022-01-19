import React from "react";
import "../css/Card.css";
import EdiText from "react-editext";
import Board from "../pages/DragAndDrop/Board";
import DragableCard from "../pages/DragAndDrop/DragableCard";

export const Card = (props) => {
  const onTitleSave = (val) => {
    props.title = val;
    
    console.log("Edited Value -> ", val);
  };

  const data = props.data;
  console.log(data);
  return (
    <React.Fragment>
      <div className="card-container">
        <div style={{ display: "flex", alignItems: "center" }}>
          <EdiText
            className="edit-text"
            type="text"
            value={props.title}
            onSave={onTitleSave}
            editButtonClassName="edit-button"
            editButtonContent={<i className="fas fa-pen" />}
          />
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
          <hr style={{"marginTop": "0.5vh"}} />
          <i className="fas fa-trash trashButton" onClick={() => props.deleteCard(props.id)}></i>
        </div>
      </div>
    </React.Fragment>
  );
};
