import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const setToken = token => {
  contactsInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Регистрация
export const requestRegister = async userData => {
  const { data } = await contactsInstance.post('/users/signup', userData);
  setToken(data.token);
  return data;
};
// Логинизация
export const requestLogin = async userData => {
  const { data } = await contactsInstance.post('/users/login', userData);
  setToken(data.token);
  return data;
};
// Выход
export const requestLogout = async () => {
  const { data } = await contactsInstance.post('/users/logout');
  return data;
};
// Информация о пользователе
export const requestCurrentUser = async () => {
  const { data } = await contactsInstance.пуе('/users/current');
  return data;
};
// Запрос всех контактов
export const fetchContacts = async () => {
  const { data } = await contactsInstance.get('/contacts');
  return data;
};
// Добавление нового контакта
export const addContact = async newContact => {
  const { data } = await contactsInstance.post('/contacts', newContact);
  return data;
};
// Удаление контакта
export const deleteContact = async id => {
  const { data } = await contactsInstance.delete(`/contacts/${id}`);
  return data;
};
