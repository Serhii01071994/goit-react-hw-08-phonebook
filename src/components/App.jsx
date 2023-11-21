
import { useDispatch } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';
import { Suspense, lazy, useEffect } from 'react';
import { StyledAppContainer } from './App.styled';
import Loader from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import PrivateRoute from './Rotes/PrivateRoute';
import RestictedRoute from './Rotes/RestictedRoute';
import { refreshUserThunk } from 'redux/authReducer';

const HomePage = lazy(() => import('pages/HomePage'));
const SignUpPage = lazy(() => import('pages/SignUpPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

const appRoutes = [
  { path: '/', element: <HomePage /> },
  {
    path: '/contacts',
    element: (
      <PrivateRoute>
        <ContactsPage />
      </PrivateRoute>
    ),
  },
  {
    path: '/register',
    element: (
      <RestictedRoute>
        <SignUpPage />
      </RestictedRoute>
    ),
  },
  {
    path: '/login',
    element: (
      <RestictedRoute>
        <LoginPage />
      </RestictedRoute>
    ),
  },
];

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
    <StyledAppContainer>
     
      <Navigation/>
      <Suspense fallback={<Loader />}>
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
      
    </StyledAppContainer>
  );
};
