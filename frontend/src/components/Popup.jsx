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
            title: projectTitle
        })
        .then(() => console.log("success"))
        .catch((err) => {console.log(err);
        console.log(projectTitle)});
    }
                
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner"> 
            <button className="popup-add-button" onClick={() => {props.setTrigger(false);
            createProj();
        }}> Create </button>
        <label className="new-project-title-label">Title :</label>&nbsp;
          <input className="new-project-title" onChange={projectTitleHandler} value={projectTitle}/>
            <button className="popup-close-button" onClick={() => props.setTrigger(false)}> x </button>
            </div>
        </div>
    ) : "";
}
