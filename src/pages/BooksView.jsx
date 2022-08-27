import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageHeading } from '../components/PageHeading/PageHeading';
import * as booksShelfAPI from '../services/bookshelf-api';

function BooksView() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    booksShelfAPI.fetchBooks().then(setBooks);
  }, []);

  return (
    <>
      <PageHeading text="Книги" />

      {books && (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <Link to={`${book.id}`}>{book.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default BooksView;
