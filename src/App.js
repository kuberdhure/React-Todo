import React from "react";
import "./App.css";
import todos from "./todolist";
import ToDoComponent from "./todoComp";
import NewTodo from "./NewTodo";

if (window.localStorage.getItem("kd-todos")) {
  for (var todo of JSON.parse(window.localStorage.getItem("kd-todos"))) {
    todos.push(todo);
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTodos: todos,
    };
  }

  updateTodos = () => {
    this.setState({ currentTodos: todos });
    window.localStorage.setItem("kd-todos", JSON.stringify(todos));
  };

  render() {
    const items = this.state.currentTodos
      .sort((a, b) => {
        if (a.isDone !== b.isDone) {
          return a.isDone ? 1 : -1;
        }
        return 0;
      })
      .map((item) => (
        <ToDoComponent
          key={item.id}
          id={item.id}
          todo={item.todo}
          isComplete={item.isDone}
          updateTodos={this.updateTodos}
        />
      ));
    return (
      <div className="App">
        <NewTodo updateTodos={this.updateTodos} />
        <div className="toDoItems">{items}</div>
      </div>
    );
  }
}

export default App;
