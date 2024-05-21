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

  render(){
    return (
      <div className="App">
        <h1>Todo App</h1>
        <TodoForm />
        <TodoContainer todos={this.state.todos} happyprop/>
      </div>
    );
  }
}

export default App;
