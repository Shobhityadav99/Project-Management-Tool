import React, { useState } from "react";
import axios from "axios";
import "../css/NewProject.css";

export const NewProject = () => {
  // const [isLoading,setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const titleHandler = (event) => {
    setTitle(event.target.value);
  };

  const projectSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/project/create", { title: title })
        .then((response) => {
          console.log(response);
          //   history.push('/');
        });
    } catch (err) {}
  };

  return (
    <>
      <form className="project-form" onSubmit={projectSubmitHandler}>
        {/* {isLoading && <LoadingSpinner asOverlay />} */}
        <input
          id="title"
          element="input"
          type="text"
          value={title}
          onChange={titleHandler}
          label="Title"
        />
        <button type="submit" disabled={!title.length === 0}>
          ADD PROJECT
        </button>
      </form>
    </>
  );
};