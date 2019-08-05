import React from 'react';


const ToDo = props => {

    console.log("Props From ToDo:", props);
    console.log("The Task:", props.item.task);

    return (
        
        <p>{props.item.task}</p>
        
    )

}


export default ToDo;