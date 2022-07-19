import PropTypes from 'prop-types';
import defaultImage from './default.jpg';

export default function Painting({
  imageUrl = defaultImage,
  title,
  author = 'не известно',
  profileUrl,
  price,
}) {
  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={profileUrl}>{author}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: заканчивается или есть в наличии</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

Painting.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  profileUrl: PropTypes.string,
  price: PropTypes.number,
};
