import { useState, useEffect } from 'react';
// import { Route, Switch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

const TodoContainer = () => {
  const getInitialTodos = () => {
    const temp = JSON.parse(localStorage.getItem('todos'));
    return temp || [];
  };

  const [todos, setTodos] = useState(getInitialTodos());

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  const handleChangeProps = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id !== id) return todo;
      return { ...todo, completed: !todo.completed };
    }));
  };

  const addTodoItem = ({ title, completed = false }) => {
    setTodos((prevState) => {
      const newTodo = {
        id: uuidv4(),
        title,
        completed,
      };
      return [...prevState, newTodo];
    });
  };

  const editTodo = (id, title) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id !== id) return todo;
      return { ...todo, title };
    }));
  };

  const delTodo = (id) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoItem={addTodoItem} />
        <TodosList
          todos={todos}
          handleChangeProps={handleChangeProps}
          editTodo={editTodo}
          delTodo={delTodo}
        />
      </div>
    </div>
  );
};

export default TodoContainer;
