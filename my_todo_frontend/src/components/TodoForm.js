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

  componentDidMount(){
    const {todo} = this.props
    if(this.props.todo){
      const {id, name, description, urgency, urgent, done} = todo
      this.setState({
        id,
        name, 
        description,
        urgency,
        urgent,
        done
      })
    }
  }

  handleChange = (event) => {
    let {name, value, checked} = event.target
    // value = (name === "urgent") ? checked : value
    if (name === "urgent" || name === "done"){
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
    this.props.submitAction(this.state)
    if(this.props.handleToggle){
      this.props.handleToggle()
    }
  }

  showDoneCheckbox = () => {
    return this.props.todo
    ? (
        <div className="input-group">
          <label>Done</label>
          <input onChange={this.handleChange} type="checkbox" name="done" checked={this.state.done}/>
        </div>
      ) : null 
    }

  render(){
    const {name, description, urgency, urgent, done} = this.state;
    return(
      <form className="todo-form" onSubmit={this.handleSubmit}>
        {this.props.todo ? <h2>Edit this Todo</h2> : <h2>Create a new Todo</h2>}
        <label>Name</label>
        <input onChange={this.handleChange} type="text" name="name" value={name}/>
        <label>Description</label>
        <input onChange={this.handleChange} type="text" name="description" value={description}/>
        <label>Urgency</label>
        <input onChange={this.handleChange} type="number" name="urgency" value={urgency}/>
        <div className="input-group">
          <label>Urgent</label>
          <input onChange={this.handleChange} type="checkbox" name="urgent" checked={urgent}/>
        </div>
        {this.showDoneCheckbox()}
        <input onChange={this.handleChange} type="submit" />
      </form>
    )
  }
}