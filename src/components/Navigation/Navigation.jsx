import { Link } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <Link to="/">Головна</Link>
      <Link to="/authors">Автори</Link>
      <Link to="/books">Книги</Link>
    </nav>
  );
};
