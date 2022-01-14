import React, {useState} from 'react'
import "../css/Popup.css"
import axios from 'axios';

export const Popup = (props) => {
    
    const [projectTitle, setProjectTitle] = useState("");

    const projectTitleHandler = (e) => {
        setProjectTitle(e.target.value);
    }

    const createProj = () => {
        axios.post('http://localhost:5000/project/create/'+props.userid, {
            admin: props.userid,
            ProjectTitle: projectTitle
        })
        .then(() => console.log("success"))
        .catch((err) => console.log(err));
    }

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner"> 
            <button className="popup-add-button" onClick={() => {props.setTrigger(false);
            createProj();
            }}> Create </button>
            <button className="popup-close-button" onClick={() => props.setTrigger(false)}> x </button>
            <label className="new-project-title-label" onChange={projectTitleHandler} value={projectTitle}>Title :</label>&nbsp;
              <input className="new-project-title" />
            </div>
        </div>
    ) : "";
}
