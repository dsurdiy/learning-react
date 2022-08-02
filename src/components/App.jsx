import { Component } from 'react';
import { nanoid } from 'nanoid';
import Container from 'components/Container';
import TodoList from 'components/TodoList';
import TodoEditor from 'components/TodoEditor';
import TodoFilter from 'components/TodoFilter/TodoFilter';
import Modal from 'components/Modal';
import IconButton from 'components/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';
// import Tabs from 'components/Tabs';
// import tabs from 'tabs.json';
// import Clock from 'components/Clock';
// import initialTodos from 'todos.json';

class App extends Component {
  state = {
    todos: [],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    // console.log('App componentDidMount');

    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('App componentDidUpdate');

    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (prevTodos !== nextTodos) {
      console.log('Обновилось поле todos');

      localStorage.setItem('todos', JSON.stringify(nextTodos));
    }

    // if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
    //   this.toggleModal();
    // }
  }

  addTodo = text => {
    const todo = {
      id: nanoid(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({ todos: [todo, ...todos] }));

    this.toggleModal();
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }

    //     return todo;
    //   }),
    // }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { todos, filter, showModal } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <Container>
        {/* <Tabs items={tabs} /> */}

        <IconButton onClick={this.toggleModal} aria-label="Add todo">
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSubmit={this.addTodo} />
          </Modal>
        )}

        <div>
          <p>Общее кол-во: {totalTodoCount}</p>
          <p>Кол-во выполненных: {completedTodoCount}</p>
        </div>

        <TodoFilter value={filter} onChange={this.changeFilter} />

        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </Container>
    );
  }
}

export default App;

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];
