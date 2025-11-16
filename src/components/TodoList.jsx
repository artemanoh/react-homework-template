import { Component } from "react";
import "./TodoList.css";

export class ToDoList extends Component {
  render() {
    return (
      <ul className="styledList">
        {this.props.todos.map((todo) => (
          <li className="styledItem" key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => this.props.onToggle(todo.id)}
            />
            <h2 className={`styledText ${todo.completed ? "completedText" : ""}`}>
              {todo.text}
            </h2>
            <button className="deleteButton"  onClick={() => this.props.onDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}
