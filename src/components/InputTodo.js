import { Component } from 'react';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { title } = this.state;
    return (
      <form>
        <input type="text" placeholder="Add Todos..." name="title" value={title} onChange={this.onChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default InputTodo;
