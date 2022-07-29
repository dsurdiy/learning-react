// import Counter from 'components/Counter';
// import Dropdown from 'components/Dropdown';
// import ColorPicker from 'components/ColorPicker';
import Container from 'components/Container';
import TodoList from 'components/TodoList';
import { Component } from 'react';
import initialTodos from 'todos.json';
import Form from 'components/Form';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );

    return (
      <Container>
        <Form onSubmit={this.formSubmitHandler} />

        {/* <Counter initialValue={10} />

        <Dropdown />

        <ColorPicker options={colorPickerOptions} /> */}

        {/* <div>
          <p>Общее кол-во: {totalTodoCount}</p>
          <p>Кол-во выполненных: {completedTodoCount}</p>
        </div>

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} /> */}
      </Container>
    );
  }
}

export default App;
