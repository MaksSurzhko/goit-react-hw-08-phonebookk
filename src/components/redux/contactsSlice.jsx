// import { createSlice } from '@reduxjs/toolkit';
// // import { fetchContacts, addContact, deleteContact } from './thunk';
// import { getContacts, postContact, delContact } from '../redux/thunk';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// const contactsInitialState = {
//   items: [],
//   isLoading: false,
//   error: null
// };


// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async (_, { rejectWithValue }) => {
//     try {
//       return await getContacts();
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );


// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (newContact, { rejectWithValue }) => {
//     try {
//       await postContact(newContact);
//       return await getContacts();
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );


// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (contactID, { rejectWithValue }) => {
//     try {
//       await delContact(contactID);
//       return await getContacts();
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );


// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,

//   extraReducers: {
//     [fetchContacts.pending]: state => {
//       state.isLoading = true;
//     },
//     [fetchContacts.fulfilled]: (state, { payload }) => {
//       state.isLoading = false;
//       state.items = payload;
//       state.error = '';
//     },
//     [fetchContacts.error]: (state, { payload }) => {
//       state.isLoading = false;
//       state.error = payload;
//     },

//     [addContact.pending]: state => {
//       state.isLoading = true;
//     },
//     [addContact.fulfilled]: (state, { payload }) => {
//       state.isLoading = false;
//       state.items = payload;
//       state.error = '';
//     },
//     [addContact.error]: (state, { payload }) => {
//       state.isLoading = false;
//       state.error = payload;
//     },

//     [deleteContact.pending]: state => {
//       state.isLoading = true;
//     },
//     [deleteContact.fulfilled]: (state, { payload }) => {
//       state.isLoading = false;
//       state.items = payload;
//       state.error = '';
//     },
//     [deleteContact.error]: (state, { payload }) => {
//       state.isLoading = false;
//       state.error = payload;
//     },
//   },

// });

// // export const { deleteUser, addUser } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      await axios.post('/contacts', newContact);
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


const contactsInitialState = { items: [], isLoading: false, error: null };

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
  state.error = '';
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFulfilled)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleFulfilled)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, handleFulfilled)
      .addCase(deleteContact.rejected, handleRejected);
  },
});