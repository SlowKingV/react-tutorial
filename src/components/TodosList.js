import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({ todos }) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ))}
  </ul>
);
TodosList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  })).isRequired,
};

export default TodosList;
