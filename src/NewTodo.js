import React from "react";
import "./App.css";
import todos from "./todolist";
import { v4 as uuid } from "uuid";
class NewTodo extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      inputref: this.myRef,
    };
  }

  generateID = () => {
    this.id = uuid();
    return this.id;
  };

  handleClick = () => {
    let uid = this.generateID();
    let inp = this.state.inputref;
    if (inp.current.value !== "") {
      todos.push({
        id: uid,
        todo: inp.current.value,
        isDone: false,
      });
      this.props.updateTodos();
    } else {
      alert("Input can't be empty");
    }
    inp.current.value = "";

    console.log(todos);
    console.log(inp);
  };
  deleteAll = () => {
    todos.splice(0, todos.length);
    this.props.updateTodos();
    window.localStorage.clear();
  };
  render() {
    return (
      <div className="AddNew">
        <input
          className="txtfield"
          type="textfield"
          ref={this.state.inputref}
        />
        <div className="addNewBtn" onClick={this.handleClick}>
          <img src="assets/icons/add-48.png" alt="add-todo" />
        </div>
        <div className="clearBtn" onClick={this.deleteAll}>
          <img src="assets/icons/delete-bin-48.png" alt="clear-todos" />
        </div>
      </div>
    );
  }
}

export default NewTodo;
