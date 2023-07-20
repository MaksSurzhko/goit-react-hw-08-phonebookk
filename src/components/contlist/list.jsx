// import React from "react";
// import { useDispatch } from "react-redux";
// import lcss from "../contlist/list.module.css";
// import { deleteContact } from "../redux/contactsSlice";

// export const ContactList = ({contacts, filter}) => {
//   const dispatch = useDispatch();

//   const handleDeleteContact = (contactId) => {
//     dispatch(deleteContact(contactId));
//   };

//   const filteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <ul className={lcss.llist}>
//       {filteredContacts.map((contact) => (
//         <li className={lcss.item} key={contact.id}>
//           {contact.name}: {contact.number}
//           <button
//             className={lcss.bbtn}
//             onClick={() => handleDeleteContact(contact.id)}
//           >
//             delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ContactList;

// import { useState, useEffect } from 'react';
// import { ListOfContact, ContactItem } from './list.styled';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteContact } from '../redux/contactsSlice';
// import { selectFilterContact } from '../redux/selectors';
// import { UpdateForm } from '../updateForm/updateForm';
// import { fetchContacts } from '../redux/contactsSlice';

// export const ContactList = () => {
//   const dispatch = useDispatch();

//   const [data, setData] = useState(null);

//   const contacts = useSelector(selectFilterContact);
 
  

//   useEffect(() => {
//     dispatch(fetchContacts());
//     // console.log(data);
//   }, [data, dispatch]);

//   return (
//     <ListOfContact>
//       {data && <UpdateForm dataUser={data} setData={setData} />}
//       {!data &&
//         contacts.map(contact => (
//           <ContactItem key={contact.id}>
//             {contact.name}: {contact.number}
//             {(
//               <div>
//                 <button
//                   type="button"
//                   onClick={() =>
//                     setData({
//                       id: contact.id,
//                       name: contact.name,
//                       number: contact.number,
//                     })
//                   }
//                 >
//                   Update
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => dispatch(deleteContact(contact.id))}
//                 >
//                   Delete
//                 </button>
//               </div>
//             )}
//           </ContactItem>
//         ))}
//     </ListOfContact>
//   );
// };


// import { useState, useEffect } from 'react';
// import { ListOfContact, ContactItem } from './list.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';
import { selectFilterContact } from '../redux/selectors';
// import { UpdateForm } from '../updateForm/updateForm';
// import { fetchContacts } from '../redux/contactsSlice';
import lcss from "../contlist/list.module.css";

export const ContactList = () => {
  const dispatch = useDispatch();

  // const [data, setData] = useState(null);

  const contacts = useSelector(selectFilterContact);
 
  

  // useEffect(() => {
  //   dispatch(fetchContacts());
  //   // console.log(data);
  // }, [data, dispatch]);

  return (
    
    <ul className={lcss.llist}>
      {/* {data && <UpdateForm dataUser={data} setData={setData} />}
      {!data && */}
        {contacts.map(contact => (
          <li className={lcss.item} key={contact.id}>
            {contact.name}: {contact.number}
            {(
                <button
                  className={lcss.bbtn}
                  type="button"
                  onClick={() => dispatch(deleteContact(contact.id))}
                >
                  Delete
                </button>
              
            )}
          </li>
        ))}
      </ul>
      
  );
};