import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from 'pages/Home';
import { TodosPage } from 'pages/Todos';
import { CreateTodoPage } from 'pages/CreateTodo';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/todos/create" element={<CreateTodoPage />} />
      </Routes>
      <Toaster position="top-right" />
    </div>
  );
};
