import { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
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
            <li key={author.id}>
              <NavLink to={`${author.id}`}>{author.name}</NavLink>
            </li>
          ))}
        </ul>
      )}
      <hr />

      <Outlet />
    </>
  );
};
