import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import styles from './TodoItem.module.css';

const TodoItem = ({
  todo, handleChangeProps, editTodo, delTodo,
}) => {
  const [editing, setEditing] = useState(false);

  useEffect(() => () => {
    console.log('Cleaning up...');
  }, []);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdateDone = (e) => {
    if (e.key === 'Enter') {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const viewMode = {};
  const editMode = {};

  if (editing) viewMode.display = 'none';
  else editMode.display = 'none';

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={todo.completed}
          onChange={() => handleChangeProps(todo.id)}
        />
        <button
          type="button"
          onClick={() => delTodo(todo.id)}
        >
          <FaTrash />
        </button>
        <span style={todo.completed ? completedStyle : null}>
          {todo.title}
        </span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={todo.title}
        onChange={(e) => {
          editTodo(todo.id, e.target.value);
        }}
        onKeyDown={handleUpdateDone}
      />
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodoItem;
