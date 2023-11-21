import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactList } from 'components/ContactList/ContactList';
import { PhoneBook } from 'components/PhoneBook/PhoneBook';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectContacts } from 'redux/contacts.selectors';
import { addContactsThunk, deleteContactsThunk } from 'redux/contactsReducer';
import { selectFilter } from 'redux/filter.selectors';



const ContactsPage = () => {
 const contacts = useSelector(selectContacts);
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

  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <PhoneBook handleAddNumber={addContact} />
      <h2 className="title">Contacts</h2>
      <ContactFilter filter={filter} contacts={contacts} />
      <ContactList
        contacts={filteredContacts(filter) ?? []}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default ContactsPage;
