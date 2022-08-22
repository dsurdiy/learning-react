import { Routes, Route } from 'react-router-dom';
import { Container } from './components/Container/Container';
import { AppBar } from './components/AppBar/AppBar';
import { HomeView } from './pages/HomeView';
import { AuthorsView } from './pages/AuthorsView';
import { BooksView } from './pages/BooksView';
import { NotFoundView } from './pages/NotFoundView';
import { BookDetailsView } from './pages/BookDetailsView';

export const App = () => {
  return (
    <div>
      <Container>
        <AppBar />

        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/authors/*" element={<AuthorsView />} />
          <Route path="/books" element={<BooksView />} />
          <Route path="/books/:bookId" element={<BookDetailsView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Container>
    </div>
  );
};
