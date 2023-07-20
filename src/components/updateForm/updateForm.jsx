// import { useState } from 'react';
// import 'react-native-get-random-values';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateContact } from '../redux/contactsSlice';
// import {
//   FormWrapper,
//   ButtonAdd,
//   TitleInput,
//   InputField,
//   WrapperBtn,
// } from './UpdateForm.styled';
// import { selectContacts } from '../redux/selectors';

// export const UpdateForm = ({ dataUser, setData }) => {
//   const dispatch = useDispatch();

//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleChange = event => {
//     const { name, value } = event.currentTarget;

//     switch (name) {
//       case 'name':
//         setName(value);
//         break;

//       case 'number':
//         setNumber(value);
//         break;

//       default:
//         return;
//     }
//   };

//   const contacts = useSelector(selectContacts);

//   const handleSubmit = event => {
//     event.preventDefault();
//     const doubleContact =
//       contacts.findIndex(contact => contact.name === name) === -1;

//     if (doubleContact) {
//       dispatch(updateContact({ id: dataUser.id, name, number }));
//       setData(null);
//     } else {
//       alert(`${name} is already in contacts.`);
//     }
//     reset();
//   };

//   const cancel = () => {
//     setData(null);
//   };

//   const reset = () => {
//     setName('');
//     setNumber('');
//   };

//   return (
//     <FormWrapper onSubmit={handleSubmit}>
//       <TitleInput>
//         <p>
//           Current name: <span>{dataUser.name.toUpperCase()}</span>
//         </p>
//         <InputField
//           type="text"
//           name="name"
//           value={name}
//           placeholder="new name"
//           required
//           onChange={handleChange}
//         />
//       </TitleInput>

//       <TitleInput>
//         <p>
//           Current number: <span>{dataUser.number}</span>
//         </p>
//         <InputField
//           type="tel"
//           name="number"
//           value={number}
//           placeholder="new number"
//           required
//           onChange={handleChange}
//         />
//       </TitleInput>
//       <WrapperBtn>
//         <ButtonAdd type="button" onClick={() => cancel()}>
//           Cancel
//         </ButtonAdd>
//         <ButtonAdd type="submit">Update contact</ButtonAdd>
//       </WrapperBtn>
//     </FormWrapper>
//   );
// };