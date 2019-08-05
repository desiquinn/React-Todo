// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import ToDo from './Todo';

const ToDoList = props => {

    console.log("Props from ToDoList:", props);
    console.log("TheList:", props.list);

    return (
        <div>
            {props.list.map( item => (
                <ToDo item={item} key={item.id} toggleItem={props.toggleItem}/>
            ))}
            <button>Clear Completed</button>
        </div>
    )

}


export default ToDoList;
