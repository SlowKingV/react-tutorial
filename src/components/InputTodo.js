import { Component } from 'react';
import PropTypes from 'prop-types';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { title } = this.state;
    title = title.trim();
    if (!title) {
      alert('Please write item');
      return;
    }
    const { addTodoItem } = this.props;
    addTodoItem({ title });
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add Todos..." name="title" value={title} onChange={this.onChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

InputTodo.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
};

export default InputTodo;
