import React, { Component } from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer';
import TodoForm from './components/TodoForm';
const todosUrl = "http://localhost:3000/todos";

class App extends Component {

  state = {
    todos: []
  }

  getTodos = () => {
    fetch(todosUrl)
      .then(response => response.json())
      .then(todos => this.setState({todos}))
      .then(console.log)
  }

  componentDidMount(){
    this.getTodos();
  }

  addTodo = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
    fetch(todosUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({todo: newTodo})
      //^^^ need to send a top level key because 
      //rails is now using strong params
    })
  }

  updateTodo = (updatedTodo) => {
    let todos = this.state.todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo)
    this.setState({todos})
    fetch(todosUrl + "/" + updatedTodo.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({todo: updatedTodo})
      //^^^ need to send a top level key because 
      //rails is now using strong params
    })
  }

  deleteTodo = (id) => {
    let filtered = this.state.todos.filter(todo => todo.id !== id)
    this.setState({
      todos: filtered
    })
    fetch(todosUrl + "/" + id, {method: "DELETE"})
  }

  render(){
    return (
      <div className="App">
        <h1>Todo App</h1>
        <TodoForm submitAction={this.addTodo}/>
        <TodoContainer deleteTodo={this.deleteTodo} updateTodo={this.updateTodo} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
