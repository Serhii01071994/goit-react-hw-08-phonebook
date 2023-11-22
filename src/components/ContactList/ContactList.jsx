import css from './ContactList.module.css';

export const ContactList = ({ contacts, handleDeleteContact }) => (
  <ul className={css.list}>
    <h2 className="title">Contacts</h2>
    {contacts.map(contact => (
      <li className={css.item} key={contact.id}>
        {contact.name}: {contact.number}
        <button
          type="button"
          className={css.button}
          onClick={() => handleDeleteContact(contact.id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);
