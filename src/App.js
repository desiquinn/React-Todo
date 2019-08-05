import React from 'react';


import ToDoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';

const list = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();

    this.state = {
      list
    };
  }

  toggleItem = id => {
    this.setState({
      list: this.state.list.map(item => {
        if(item.id === id){
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item;
        }
      })
    });
  };

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };

    this.setState({
      list: [...this.state.list, newTask]
    });
  }

  clearCompleted = () => {
    this.setState({
      list: this.state.list.filter(item => !item.purchased)
    });
  };


  render() {
    return (
      <div>
        <h2>Desiree's To Do List</h2>
        <ToDoForm addTask={this.addTask} />
        <ToDoList list={this.state.list} toggleItem={this.toggleItem} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
