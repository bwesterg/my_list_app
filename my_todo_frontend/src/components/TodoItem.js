import React from 'react';

export default function TodoItem({id, name, description, urgency, urgent, done, deleteTodo}){

  const handleClick = (event) => deleteTodo(id)

  return (
    <li className="todo-item">
      <h2>{name}</h2>
      <h3>{description}</h3>
      <h3>{urgency}</h3>
      <button onClick={handleClick} className="delete-button">DELETE</button>
    </li>
  )
}