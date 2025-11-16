import { Component } from 'react';
import './App.css';
import initialTodos from "./todo.json";
import { ToDoList } from './components/TodoList';
import { Filter } from './components/Filter';
import { TodoEditor } from './components/TodoEditor';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
  todos: initialTodos,
  filter: '',
}

toggleCompleted = (id) => {
const newTodos = this.state.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);

  this.setState({todos: newTodos });}

  deleteTodo = (id) => {
  this.setState({
    todos: this.state.todos.filter(todo => todo.id !== id)
  });
}


addTodo = (text) => {
  const newTodo = {
    id: nanoid(),
    text,
    completed: false
  };

  this.setState(prevState => ({
    todos: [newTodo, ...prevState.todos]
  }));
}


  
render() {

      const visibleTodos = this.state.todos.filter(todo => todo.text.toLowerCase().includes(this.state.filter.toLowerCase()));
  return (
    <div className="App">
      <div>
        
      <h2 className="text">Всього завдань : {this.state.todos.length}</h2>
      <h2 className="text">Виконано завдань : {this.state.todos.filter(todo => todo.completed).length}</h2>
      <TodoEditor onAdd={this.addTodo}/>
      <Filter filter={this.state.filter} onChange={(value) => this.setState({filter: value})}/>
      <ToDoList  todos={visibleTodos} onToggle={this.toggleCompleted} 
  onDelete={this.deleteTodo}/>
    </div>
    </div>
  );
}
}
export default App;
