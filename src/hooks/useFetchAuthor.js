import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as booksShelfAPI from 'services/bookshelf-api';

export const useFetchAuthor = () => {
  const [author, setAuthor] = useState(null);
  const { authorId } = useParams();

  useEffect(() => {
    booksShelfAPI.fetchAuthorById(authorId).then(setAuthor);
  }, [authorId]);

  return author;
};
