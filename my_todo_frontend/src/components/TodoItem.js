import React from 'react';

export default function TodoItem({name, description, urgency, urgent, done}){
  return (
    <li className="todo-item">
      <h2>{name}</h2>
      <h3>{description}</h3>
      <h3>{urgency}</h3>
    </li>
  )
}