import { useState } from 'react';
import css from './PhoneBook.module.css';


export const PhoneBook = ({ handleAddNumber }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInput = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
    }
  };

  return (
    <div className={css.container}>
      <form
        className={css.form}
        onSubmit={event => {
          handleAddNumber({
            event,
            name,
            number,
          });
          setName('');
          setNumber('');
        }}
      >
        <label className={css.label}>
          Name
          <input
            className={css.input}
            onChange={handleInput}
            value={name}
            type="text"
            name="name"
            required
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.input}
            onChange={handleInput}
            value={number}
            type="tel"
            name="number"
            pattern="[\+]?[\d\s\(\)-]+"
            required
          />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};
