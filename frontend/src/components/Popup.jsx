import React from 'react'
import "../css/Popup.css"

export const Popup = (props) => {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner"> 
            <button className="popup-add-button" onClick={() => props.setTrigger(false)}> Add </button>
            <button className="popup-close-button" onClick={() => props.setTrigger(false)}> Close </button>
                {props.children}
            </div>
        </div>
    ) : "";
}
