import React, {useState} from 'react';
import TodoForm from './TodoForm';

export default function TodoItem({id, name, description, urgency, urgent, done, deleteTodo, updateTodo}){

  const todo = {id, name, description, urgency, urgent, done}
  //'un'-destructuring these properties so they can be sent down in the return below. 

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

  return isToggled 
    ? <TodoForm 
      handleToggle={handleToggle} 
      submitAction={updateTodo} 
      todo={todo} /> 
    : todoCard()
}