import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './component/Todo.js';
import TodoForm from './component/TodoForm.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      currentTask: ''
    };
    this.changStatus = this.changStatus.bind(this);     //li
    this.updateTask = this.updateTask.bind(this);      //form
    this.addTask = this.addTask.bind(this);           //form
    this.deleteTask = this.deleteTask.bind(this);    //li
    this.editTask = this.editTask.bind(this);       // LI
  }
  editTask(index,newValue){
    // console.log(index,newValue);
    let tasks = this.state.tasks;
    let task  = tasks[index];
    task.name = newValue;
    this.setState({
      tasks
    })
    // console.log(task)
  }
  deleteTask(index){
    console.log(index)
    let tasks = this.state.tasks;
    tasks.splice(index,1);
    this.setState({tasks})
  }
  addTask(e){
    e.preventDefault();
    let tasks = this.state.tasks;
    let currentTask = this.state.currentTask;
    tasks.push({
      name : currentTask,
      completed : false
    })
    this.setState({
      tasks:tasks,
      currentTask : ''
    })
  

  }
  updateTask(newVal) {
    // newVal // event

    this.setState({ currentTask: newVal.target.value })
  }
  changStatus(index) {
    let tasks = this.state.tasks;
    let task = tasks[index];
    task.completed = !task.completed;
    this.setState({ tasks: tasks })
    // console.log(this.state.tasks[index]);
  }

  render() {
    return (
      <section >
        <h1>Complete ToDo Application Created by Muhammad Nasir</h1>
        <TodoForm
          currentTask={this.state.currentTask}
          updateTask={this.updateTask}
          addTask={this.addTask}
          
        />
        <ul>
          {
            this.state.tasks.map((val, index) => {
              return (<Todo 
              clickHandler={this.changStatus} //operation Means Method
              key={index} 
              index={index} 
              details={val}
              deleteTask={this.deleteTask} //operation Means Method
              editTask ={this.editTask} //operation Means Method
               />);
            })
          }
        </ul>
      </section>
    );
  }
}


export default App;
