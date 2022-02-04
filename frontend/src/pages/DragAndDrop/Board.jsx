import React from "react";
import axios from "axios";
import "./main.css";

const Board = (props) => {
  const drop = (e) => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");
    const card = document.getElementById(card_id);
    card.style.display = "block";
    e.target.appendChild(card);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnd = (e) => {
    e.preventDefault();
    const OldCardId = props.id;
    const NewCardId = e.target.parentElement.id;
    const data = e.target.outerText;
    console.log(OldCardId);
    console.log(NewCardId);
    console.log(data);
    axios
      .patch("http://localhost:5000" + window.location.pathname, {
        OldCardId,
        NewCardId,
        data,
        flag: "UpdateCards",
      })
      .then((response) => {
          console.log(response);
        // window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("Board DragENd");
  };

  return (
    <div
      id={props.id}
      className="board"
      onDrop={drop}
      onDragOver={dragOver}
      onDragEnd={dragEnd}
    >
      {props.children}
    </div>
  );
};

export default Board;
