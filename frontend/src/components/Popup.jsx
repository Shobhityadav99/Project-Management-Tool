import React, { useState } from "react";
import "../css/Popup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Popup = (props) => {
  const navigate = useNavigate();
  const [projectTitle, setProjectTitle] = useState("");

  const projectTitleHandler = (e) => {
    setProjectTitle(e.target.value);
  };

  const createProj = () => {
    axios
      .post("http://localhost:5000/project/create/" + props.userid, {
        title: projectTitle,
      })
      .then((response) => {
        console.log(response);
        // navigate(`http://localhost:3000/project/${response.data.project._id}`,{replace: true});
      })
      .catch((err) => {
        console.log(err);
        console.log(projectTitle);
      });
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          className="popup-add-button"
          onClick={() => {
            props.setTrigger(false);
            createProj();
          }}
        >
          {" "}
          Create{" "}
        </button>
        <label className="new-project-title-label">Title :</label>&nbsp;
        <input
          className="new-project-title"
          onChange={projectTitleHandler}
          value={projectTitle}
        />
        <button
          className="popup-close-button"
          onClick={() => props.setTrigger(false)}
        >
          {" "}
          x{" "}
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};
