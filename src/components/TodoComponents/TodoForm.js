import React from 'react';

class ToDoForm extends React.Component {

    constructor(){
        super();

        this.state = {
            item: ''
        };
    }

    handleChange = event => {
        console.log("Whats the name:", event.target.name);
        console.log("Whats the value:", event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.props)
        console.log("What New Item?:", this.state.item)
        this.props.addTask(this.state.item)
        // this.setState({
        //     [event.target.name]: " "
        // })
    }

    render() {
        // console.log(this.state.newItem)
        return (
            <form onSubmit={this.handleSubmit} >
                <input 
                    type='text'
                    name='item'
                    value={this.item}
                    onChange={this.handleChange}
                />
                <button>Add New Item</button>
            </form>
        )
    }
}

export default ToDoForm;