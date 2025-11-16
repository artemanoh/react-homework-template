import { Component } from "react";
import "./Filter.css"

export class Filter extends Component {
  render() {
    return (
      <input className="filter"
        type="text"
        placeholder="Знайти завдання"
        value={this.props.filter}
        onChange={(e) => this.props.onChange(e.target.value)}
      />
    );
  }
}
