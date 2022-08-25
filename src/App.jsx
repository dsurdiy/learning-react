import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { HomeView } from './pages/HomeView';
import { AuthorsView } from './pages/AuthorsView';
import { AuthorSubView } from './pages/AuthorSubView';
import { BooksView } from './pages/BooksView';
import { BookDetailsView } from './pages/BookDetailsView';
import { NotFoundView } from './pages/NotFoundView';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="authors" element={<AuthorsView />}>
          <Route path=":authorId" element={<AuthorSubView />} />
        </Route>
        <Route path="books" element={<BooksView />} />
        <Route path="books/:bookId" element={<BookDetailsView />} />
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  );
};
