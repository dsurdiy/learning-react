import { createAsyncThunk } from '@reduxjs/toolkit';
import * as booksShelfAPI from 'services/bookshelf-api';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const books = await booksShelfAPI.fetchBooks();
  return books;
});

// export const fetchBooks = () => async dispatch => {
//   dispatch(booksActions.fetchBooksRequest());

//   try {
//     const books = await booksShelfAPI.fetchBooks();
//     dispatch(booksActions.fetchBooksSuccess(books));
//   } catch (error) {
//     dispatch(booksActions.fetchBooksError(error));
//   }
// };
