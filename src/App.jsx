import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import Container from './components/Container';
import { authOperations, authSelectors } from './redux/auth';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const TodosView = lazy(() => import('./views/TodosView'));
const UploadView = lazy(() => import('./views/UploadView'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <AppBar />

        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>
            <PublicRoute exact path="/register" restricted>
              <RegisterView />
            </PublicRoute>
            <PublicRoute exact path="/login" redirectTo="/todos" restricted>
              <LoginView />
            </PublicRoute>
            <PrivateRoute path="/todos" redirectTo="/login">
              <TodosView />
            </PrivateRoute>
            <PrivateRoute path="/upload" redirectTo="/login">
              <UploadView />
            </PrivateRoute>
          </Suspense>
        </Switch>
      </Container>
    )
  );
}
