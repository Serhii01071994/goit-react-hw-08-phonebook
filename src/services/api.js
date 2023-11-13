import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://654cc71777200d6ba859689d.mockapi.io',
});

export const fetchContacts = async () => {
  const { data } = await contactsInstance.get('/contacts');
  return data;
};

export const addContact = async newContact => {
  const { data } = await contactsInstance.post('/contacts', newContact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await contactsInstance.delete(`/contacts/${id}`);
  return data;
};
