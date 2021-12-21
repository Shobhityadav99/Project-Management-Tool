import React from 'react'
import './main.css';

const DragableCard = (props) => {
    
    const dragStart = e => {
        const target = e.target;
        e.dataTransfer.setData('card_id', target.id);
    }

    const dragOver = e => {
        e.stopPropagation();
    }

    return (
        <div
        id={props.id}
        className="task"
        draggable="true"
        onDragStart={dragStart}
        onDragOver={dragOver}>
            {props.children}
        </div>
    )
}

export default DragableCard
