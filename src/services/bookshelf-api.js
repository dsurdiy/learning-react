import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export async function fetchAuthors() {
  const response = await axios('/authors');
  return response.data;
}

export async function fetchAuthorById(authorId) {
  const response = await axios(`/authors/${authorId}?_embed=books`);
  return response.data;
}

export async function fetchBooks() {
  const response = await axios('/books');
  return response.data;
}

export async function fetchBookById(bookId) {
  const response = await axios(`/books/${bookId}?_expand=author`);
  return response.data;
}
