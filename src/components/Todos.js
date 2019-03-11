import React, { Component } from 'react';
import Todoitem from './Todoitem'
class Todos extends Component {

    render() {
        return this.props.todos.map((a) => {
            return (
              <Todoitem
                todo={a}
                key={a.id}
                markComplited={this.props.markComplited}
              />
            );
        })
    }
}

export default Todos;
