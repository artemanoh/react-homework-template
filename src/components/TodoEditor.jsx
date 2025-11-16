import { Component } from "react";
import "./TodoEditor.css"
export class TodoEditor extends Component {
  state = {
    textValue: ""
  }

  handleChange = (e) => {
    this.setState({ textValue: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.textValue.trim() === "") return;
    this.props.onAdd(this.state.textValue);

    this.setState({ textValue: "" });
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ marginBottom: "20px" }}>
        <div className="box">
        <input
          type="text"
          className="addInput"
          value={this.state.textValue}
          onChange={this.handleChange}
        />
        <button type="submit" className="addButton">Додати</button>
        </div>
      </form>
    );
  }
}
