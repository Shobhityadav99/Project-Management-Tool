import React from "react";
import "../css/Card.css";
import EdiText from "react-editext";

export const Card = () => {
  let value = "Sidd ki moti gaand";
  const onSave = (val) => {
    value = val;
    console.log("Edited Value -> ", val);
  };
  return (
    <React.Fragment>
      <div className="card-container">
        <div style={{ display: "flex", alignItems: "center" }}>
          <EdiText
            className="edit-text"
            type="text"
            value={value}
            onSave={onSave}
            editButtonClassName="edit-button"
            editButtonContent={<i class="fas fa-pen" />}
          />
        </div>
        <div>
          <EdiText
            className="label-text"
            type="text"
            value={value}
            onSave={onSave}
            buttonsAlign="before"
          />
          <i className="fas fa-plus addButton"></i>
        </div>
        <div className="card-trash-bottom">
          <hr />
          <i className="fas fa-trash trashButton"></i>
        </div>
      </div>
    </React.Fragment>
  );
};
