import React, { Component } from 'react'

export class Todoitem extends Component {
    getstyle = () => {
       return {
         backgroundColor: "#f4f4f4",
         padding: "10px",
         textDecoration: this.props.todo.complited ? "line-through" : "none"
       };
    }
    
  render() {
    const  {id, title} = this.props.todo;
    return (
        <div className="div"style={this.getstyle()}>
          <input type="checkbox" onChange={this.props.markComplited.bind(this, id)}/>
          <h1>{title}</h1>
          <button>x</button>
      </div>
    )
  }
}


export default Todoitem
