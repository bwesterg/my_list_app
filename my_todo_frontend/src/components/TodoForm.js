import React, { Component } from 'react';

const initialState = {
  name: "",
  description: "",
  urgency: 0,
  urgent: false,
  done: false
}

export default class TodoForm extends Component{

  state = initialState;

  handleChange = (event) => {
    let {name, value, checked} = event.target
    // value = (name === "urgent") ? checked : value
    if (name === "urgent"){
      value = checked
    } else {
      value = value
    } 

    this.setState({
      [name]: value 
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }

  render(){
    const {name, description, urgency, urgent} = this.state;
    return(
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <h2>Create a new Todo</h2>
        <label>Name</label>
        <input onChange={this.handleChange} type="text" name="name" value={name}/>
        <label>Description</label>
        <input onChange={this.handleChange} type="text" name="description" value={description}/>
        <label>Urgency</label>
        <input onChange={this.handleChange} type="number" name="urgency" value={urgency}/>
        <div className="urgent-input">
          <label>Urgent</label>
          <input onChange={this.handleChange} type="checkbox" name="urgent" checked={urgent}/>
        </div>
        <input onChange={this.handleChange} type="submit" />
      </form>
    )
  }
}