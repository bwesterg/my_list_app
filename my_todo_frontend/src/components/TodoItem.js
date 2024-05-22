import React, {useState} from 'react';
import TodoForm from './TodoForm';

export default function TodoItem({id, name, description, urgency, urgent, done, deleteTodo}){

  const [isToggled, setIsToggled] = useState(false)
  const handleClick = (event) => deleteTodo(id)
  const handleToggle = (event) => setIsToggled(!isToggled)
  const todoCard = () => (
    <li className="todo-item">
      <h2>{name}</h2>
      <h3>{description}</h3>
      <h3>{urgency}</h3>
      <div className="todo-item-button-box">
        <button onClick={handleClick} className="delete-button">DELETE</button>
        <button onClick={handleToggle} className="edit-button">EDIT</button>
      </div>
    </li>
  )

  return isToggled ? <TodoForm /> : todoCard()
}