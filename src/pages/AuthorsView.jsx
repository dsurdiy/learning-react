import { useState, useEffect } from 'react';
import { PageHeading } from '../components/PageHeading/PageHeading';
import * as booksShelfAPI from '../services/bookshelf-api';

export const AuthorsView = () => {
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    booksShelfAPI.fetchAuthors().then(setAuthors);
  }, []);

  return (
    <>
      <PageHeading text="Автори" />

      {authors && (
        <ul>
          {authors.map(author => (
            <li key={author.id}>{author.name}</li>
          ))}
        </ul>
      )}
      <hr />
    </>
  );
};
