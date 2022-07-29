import { Component } from 'react';
import './TodoEditor.scss';

class TodoEditor extends Component {
  state = {
    text: '',
  };

  handleChange = e => {
    this.setState({ text: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.text);

    this.setState({ text: '' });
  };

  render() {
    return (
      <form className="TodoEditor" onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.text}
          onChange={this.handleChange}
          className="TodoEditor__textarea"
        ></textarea>
        <button type="submit" className="TodoEditor__button">
          Add todo
        </button>
      </form>
    );
  }
}

export default TodoEditor;
