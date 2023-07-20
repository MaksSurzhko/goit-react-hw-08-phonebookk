// import React from "react";
// import { useSelector, useDispatch, } from "react-redux";
// import pcss from "../components/phonebook/phonebook.module.css";
// import { ContactForm } from "../components/contform/form";
// import { Filter } from "../components/filter/filter";
// import { ContactList } from "../components/contlist/list";
// import { useEffect } from "react";
// import { selectFilter, selectContacts } from "./redux/selectors";
// import {addContact, deleteContact, fetchContacts} from "../components/redux/contactsSlice"
// import { filterUser } from "./redux/filterSlice";
// import Apps from '../components/Apps'




// const Phonebook = () => {
//   const contacts = useSelector(selectContacts);
//   const filter = useSelector(selectFilter);
//   const dispatch = useDispatch();


//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   const handleAddContact = (name, number) => {
//     const errorContact = contacts.find((contact) => contact.name === name);

//     if (errorContact) {
//       alert(`${name} is already in contacts`);
//       return;
//     }

//     dispatch(addContact({ name, number }));
//   };

//   const handleDeleteContact = (contactId) => {
//     dispatch(deleteContact(contactId));
//   };


//   const handleFilterChange = (event) => {
//     const { value } = event.target;
//     dispatch(filterUser(value));
//   };

//   return (
//     <div className={pcss.cont}>
//       <h2 className={pcss.ptitle}>Phonebook</h2>

//       <ContactForm onAddContact={handleAddContact} />

//       <div className={pcss.ccont}>
//         <h2 className={pcss.ctitle}>Contacts</h2>

//         <Filter filter={filter} onFilterChange={handleFilterChange} />

//         <ContactList
//           contacts={contacts}
//           filter={filter}
//           onDeleteContact={handleDeleteContact}
//         />
//       </div>
//     </div>
//   );
// };

// export default Phonebook;


// export const App = () => {


//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         padding: "40px",
//         color: "#010101"
//       }}
//     >
//       <Phonebook />
//       <Apps/>
//     </div>
//   );
// };

import { lazy, useEffect  } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { useAuth } from './hooks/useAuth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import Layout from './layout';


const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

 export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    'Fetching user data...'
  ) : (
    <section>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={RegisterPage}
                redirectTo="/contacts"
              />
            }
          />

          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={ContactsPage} redirectTo="/login" />
            }
          />
        </Route>
      </Routes>
      </section>

  );
};
