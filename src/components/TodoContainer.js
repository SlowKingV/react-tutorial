import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: uuidv4(),
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: uuidv4(),
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: uuidv4(),
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };

    this.addTodoItem = this.addTodoItem.bind(this);
    this.handleChangeProps = this.handleChangeProps.bind(this);
    this.delTodo = this.delTodo.bind(this);
  }

  handleChangeProps(id) {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id !== id) return todo;
        return { ...todo, completed: !todo.completed };
      }),
    }));
  }

  addTodoItem({ title, completed = false }) {
    this.setState((prevState) => {
      const newTodo = {
        id: uuidv4(),
        title,
        completed,
      };
      return { todos: [...prevState.todos, newTodo] };
    });
  }

  delTodo(id) {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Header />
        <InputTodo addTodoItem={this.addTodoItem} />
        <TodosList
          todos={todos}
          handleChangeProps={this.handleChangeProps}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default TodoContainer;
