import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PageHeading } from '../components/PageHeading/PageHeading';
import * as booksShelfAPI from '../services/bookshelf-api';

export const BooksView = () => {
  // const { bookId } = useParams();
  // console.log(bookId);

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
              <Link to={`/books/${book.id}`}>{book.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
