import React from "react";

const TodoItem = (props) => {
  return(
  <li>
     <input type='checkbox' onChange={()=> props.handleChangeProp(this.props.todo.id)} checked={props.todos.completed} />
     {props.todos.title}
  </li>)
};

export default TodoItem;
