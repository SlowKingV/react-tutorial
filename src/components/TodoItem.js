import PropTypes from 'prop-types';

const TodoItem = ({ todo, handleChangeProps, delTodo }) => (
  <li>
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => handleChangeProps(todo.id)}
    />
    <button
      type="button"
      onClick={() => delTodo(todo.id)}
    >
      Delete
    </button>
    {todo.title}
  </li>
);

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodoItem;
