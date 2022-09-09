import { useNavigate } from 'react-router-dom';
import { useCreateTodoMutation } from 'redux/todos/todoSlice';
import { Spinner } from 'components/Spinner/Spinner';
import { toast } from 'react-hot-toast';

export const CreateTodoPage = () => {
  const [createTodo, { isLoading }] = useCreateTodoMutation();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const content = e.currentTarget.elements.content.value;
    e.currentTarget.reset();

    try {
      await createTodo(content);
      navigate('/todos');
      toast.success('Todo added!');
    } catch (error) {
      console.log('ERROR');
    }
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <input type="text" name="content" />
      <button type="submit" disabled={isLoading}>
        {isLoading && <Spinner size={12} />}
        Create
      </button>
    </form>
  );
};
