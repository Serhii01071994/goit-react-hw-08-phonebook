import { PhoneBook } from './PhoneBook/PhoneBook';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsloading,
} from 'redux/contacts.selectors';
import {
  addContactsThunk,
  deleteContactsThunk,
  requestContacts,
} from 'redux/contactsReducer';
import { selectFilter } from 'redux/filter.selectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { Loading } from 'notiflix';
import { StyledAppContainer } from './App.styled';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsloading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const addContact = ({ event, name, number }) => {
    event.preventDefault();
    if (
      contacts.some(
        contact => contact.name === name || contact.number === number
      )
    ) {
      toast.error('Oops, this number is already exist!', {
        position: 'top-center',
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
      });
      return;
    }
    dispatch(addContactsThunk({ name, number, id: nanoid() }));
  };

  const filteredContacts = filter => {
    try {
      return contacts.filter(
        contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase()) ||
          contact.number.includes(filter)
      );
    } catch (error) {
      return contacts;
    }
  };

  const handleDeleteContact = id => {
    dispatch(deleteContactsThunk(id));
  };

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
      <h1 className="title">Phonebook</h1>
      <PhoneBook handleAddNumber={addContact} />
      <h2 className="title">Contacts</h2>
      <ContactFilter filter={filter} contacts={contacts} />
      <ContactList
        contacts={filteredContacts(filter) ?? []}
        handleDeleteContact={handleDeleteContact}
      />
      <ToastContainer />
    </StyledAppContainer>
  );
};
