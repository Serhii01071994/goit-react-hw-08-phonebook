import { useDispatch, useSelector } from 'react-redux';
import css from './ContactFilter.module.css';
import { setFilter } from 'redux/filterReducer';
import { selectFilter } from 'redux/filter.selectors';

export const ContactFilter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const value = e.target.value.toLowerCase();
    dispatch(setFilter(value));
  };

  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search contacts"
      value={filter}
      onChange={handleFilterChange}
    />
  );
  
};
