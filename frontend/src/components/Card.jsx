import React from "react";
import "../css/Card.css";
import EdiText from "react-editext";

export const Card = (props) => {
  let Titlevalue = "title";
  let Eventvalue = "event";
  const onTitleSave = (val) => {
    Titlevalue = val;
    console.log("Edited Value -> ", val);
  };
  const onEventSave = (val) => {
    Eventvalue = val;
    console.log("Edited Value -> ", val);
  };
  const dragStart = (e) => {
    const target = e.target;

    e.dataTransfer.setData("card_id", target.id);

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  const drop = (e) => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");
    const card = document.getElementById(card_id);
    card.style.display = "block";
    e.target.appendChild(card);
  };

  const dragStop = (e) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <div className="card-container">
        <div style={{ display: "flex", alignItems: "center" }}>
          <EdiText
            className="edit-text"
            type="text"
            value={Titlevalue}
            onSave={onTitleSave}
            editButtonClassName="edit-button"
            editButtonContent={<i class="fas fa-pen" />}
          />
        </div>
        <div
        className="card_board"
          id={props.board_id}
          onDrop={drop}
          onDragOver={dragStop}
        >
          <div
            id={props.card_id}
            draggable="true"
            onDragStart={dragStart}
            onDragOver={dragOver}
          >
            <EdiText
              className="label-text"
              type="text"
              value={Eventvalue}
              onSave={onEventSave}
              buttonsAlign="before"
            />
          </div>
        </div>
            <i className="fas fa-plus addButton"></i>
        <div className="card-trash-bottom">
          <hr />
          <i className="fas fa-trash trashButton"></i>
        </div>
      </div>
    </React.Fragment>
  );
};
