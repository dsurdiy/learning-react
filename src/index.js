import React from 'react';
import ReactDOM from 'react-dom/client';
import { Reader } from 'components/Reader/Reader';
import publications from './publications.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Reader items={publications} />
  </React.StrictMode>,
);
