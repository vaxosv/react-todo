import React, { Component } from 'react';
import Todos  from "./components/Todos";
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "go home",
        complited: false
      },
      {
        id: 2,
        title: "go worck",
        complited: false
      },
      {
        id: 3,
        title: "go sdasda",
        complited: false
      }
    ]
  };

  markComplited = (id)=>{
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.complited = !todo.complited
        }  
        return todo;
      })
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Todo list</h1>
        <Todos todos={this.state.todos} markComplited={this.markComplited} />
      </div>
    );
  }
}

export default App;
