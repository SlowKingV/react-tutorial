import React from 'react';
import TodosList from './TodosList';
import Header from './Header';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };

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
