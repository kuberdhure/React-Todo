import React from "react";
import "./App.css";
import todos from "./todolist";

class ToDoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      text: props.todo,
      isComplete: props.isComplete,
    };
  }

  isComplete = () => {
    console.log(this.state.isComplete);
    todos.find((todo) => todo.id === this.state.id).isDone =
      !this.state.isComplete;
    this.props.updateTodos();
    this.setState({
      isComplete: !this.state.isComplete,
    });
  };
  delete = () => {
    todos.splice(
      todos.findIndex((todo) => todo.id === this.state.id),
      1
    );
    this.props.updateTodos();
  };
  render() {
    return (
      <div
        key={this.state.id}
        className="todoComponent"
        data-completed={this.state.isComplete}
      >
        <p className="txt">{this.state.text}</p>

        <div className="complete" onClick={this.isComplete}>
          <img
            src={`assets/icons/${
              this.state.isComplete ? "unchecked" : "checked"
            }-checkbox-48.png`}
            alt="toggle-todo-completion"
          />
        </div>

        <div className="delete" onClick={this.delete}>
          <img src="assets/icons/delete-48.png" alt="delete-bin" />
        </div>
      </div>
    );
  }
}
export default ToDoComponent;
