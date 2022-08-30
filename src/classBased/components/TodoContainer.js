import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos) {
      this.setState({ todos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { todos } = this.state;
    if (prevState.todos === todos) return;
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }

  handleChangeProps = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id !== id) return todo;
        return { ...todo, completed: !todo.completed };
      }),
    }));
  }

  addTodoItem = ({ title, completed = false }) => {
    this.setState((prevState) => {
      const newTodo = {
        id: uuidv4(),
        title,
        completed,
      };
      return { todos: [...prevState.todos, newTodo] };
    });
  }

  editTodo = (id, title) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id !== id) return todo;
        return { ...todo, title };
      }),
    }));
  }

  delTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoItem={this.addTodoItem} />
          <TodosList
            todos={todos}
            handleChangeProps={this.handleChangeProps}
            editTodo={this.editTodo}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
