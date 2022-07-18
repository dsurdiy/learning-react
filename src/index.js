import ReactDOM from 'react-dom/client';
import paintings from './paintings.json';

function Painting({ url, title, author, profileUrl, price }) {
  return (
    <div>
      <img src={url} alt={title} width="480" />
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

const painting = paintings[0];

ReactDOM.createRoot(document.querySelector('#root')).render(
  <Painting
    url={painting.url}
    title={painting.title}
    author={painting.author.tag}
    profileUrl={painting.author.url}
    price={painting.price}
  />,
);

//=================================================================================
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
