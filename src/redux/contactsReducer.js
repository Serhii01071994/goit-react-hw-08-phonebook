import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteContact, fetchContacts, addContact } from 'services/api';

const INITIAL_STATE = {
  contacts: [],
  isLoading: false,
  error: null,
};

export const requestContacts = createAsyncThunk(
  'contact/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await fetchContacts();
      // console.log('contacts:', contacts);
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contact/addContact',
  async (newContact, thunkAPI) => {
    try {
      const addedContacts = await addContact(newContact);
      // console.log('addedContacts:', addedContacts);
      return addedContacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contact/deleteContact',
  async (id, thunkAPI) => {
    try {
      const deletedContacts = await deleteContact(id);
      // console.log('deletedContacts:', deletedContacts);
      return deletedContacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const contactsSlice = createSlice({
  name: 'contact',
  initialState: INITIAL_STATE,
  extraReducers: builder =>
    builder
      // GetContact
      .addCase(requestContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(requestContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // AddContact
      .addCase(addContactsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.push(action.payload);
      })
      .addCase(addContactsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // DeleteContact
      .addCase(deleteContactsThunk.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContactsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { delNumber } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
