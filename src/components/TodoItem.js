import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

const TodoItem = ({ todo, handleChangeProps, delTodo }) => {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  return (
    <li className={styles.item}>
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
        Delete
      </button>
      <span style={todo.completed ? completedStyle : null}>
        {todo.title}
      </span>
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
  delTodo: PropTypes.func.isRequired,
};

export default TodoItem;
