import React, { useState } from "react";
import "./main.css";

const DragableCard = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(props.task);
  const taskInputHandler = (val) => {
    if (val.target.value.toString() !== "") {
      console.log("title");
      setIsEditing(false);
      setTask(val.target.value.toString());
      props.updateTask(props.id, props.task, val.target.value.toString());
    }else{
        setIsEditing(false);
    }
  };

  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      id={props.id}
      className="task"
      draggable="true"
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        {!isEditing ? (
          <label onClick={() => setIsEditing(true)}>{task}</label>
        ) : (
          <input onBlur={taskInputHandler} />
        )}
      </div>
    </div>
  );
};

export default DragableCard;