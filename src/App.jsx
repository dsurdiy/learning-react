import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';

const HomeView = lazy(() => import('./pages/HomeView'));
const BooksView = lazy(() => import('./pages/BooksView'));
const AuthorsView = lazy(() => import('./pages/AuthorsView'));
const AuthorSubView = lazy(() => import('./pages/AuthorSubView'));
const BookDetailsView = lazy(() => import('./pages/BookDetailsView'));
const NotFoundView = lazy(() => import('./pages/NotFoundView'));

export const App = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
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
    </Suspense>
  );
};
