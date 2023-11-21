
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsloading,
} from 'redux/contacts.selectors';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense, lazy, useEffect } from 'react';
import { Loading } from 'notiflix';
import { StyledAppContainer } from './App.styled';
import Loader from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { requestContacts } from 'redux/contactsReducer';
import { toast } from 'react-toastify';

const HomePage = lazy(() => import('pages/HomePage'));
const SignUpPage = lazy(() => import('pages/SignUpPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

const appRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/register', element: <SignUpPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/contacts', element: <ContactsPage /> },
];

export const App = () => {
  const isLoading = useSelector(selectIsloading);
  const error = useSelector(selectError);
 
  const dispatch = useDispatch();

 

  useEffect(() => {
    dispatch(requestContacts());
  }, [dispatch]);

  useEffect(() => {
    if (isLoading) {
      Loading.standard();
    } else {
      Loading.remove();
    }
  }, [isLoading]);

  useEffect(() => {
    if (error !== null) {
      toast.error(error, {
        position: 'top-center',
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  }, [error]);

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
