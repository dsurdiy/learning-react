import { Link } from 'react-router-dom';

export const NotFoundView = () => {
  return (
    <h1>
      404 Сторінка не знайдена. Перейдіть на{' '}
      <Link to="/">домашню сторінку</Link>
    </h1>
  );
};
