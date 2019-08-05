import React from 'react';

class ToDoForm extends React.Component {

    constructor(){
        super();

        this.state = {
            newItem: '',
        };
    }

    render() {
        return (
            <div>
                This is where the Form will be
            </div>
        )
    }
}

export default ToDoForm;