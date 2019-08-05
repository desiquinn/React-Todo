import React from 'react';

import './Todo.css'

const ToDo = props => {

    console.log("Props From ToDo:", props);
    console.log("The Task:", props.item.task);

    return (
        <div
            className={`item${props.item.completed ? ' completed' : ''}`}
            onClick={ () => props.toggleItem(props.item.id) }
        >
        <p>{props.item.task}</p>
        </div>
    )

}


export default ToDo;