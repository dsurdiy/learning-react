import { Link } from 'react-router-dom';

function NotFoundView() {
  return (
    <h1>
      404 Сторінка не знайдена. Перейдіть на{' '}
      <Link to="/">домашню сторінку</Link>
    </h1>
  );
}

export default NotFoundView;
