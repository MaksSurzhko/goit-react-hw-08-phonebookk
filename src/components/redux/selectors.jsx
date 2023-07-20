// export const selectContacts = (state) => state.contacts;
// export const selectFilter = (state) => state.filter;
import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;


export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.IsRefreshing;


export const selectFilterContact = createSelector(
  [selectFilter, selectContacts],
  (contactSearch, contacts) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(contactSearch.toLowerCase())
    );
  }
);

