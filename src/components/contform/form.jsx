import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import fcss from "../contform/form.module.css";
import { selectContacts } from "../redux/selectors";
import { addContact } from "../redux/contactsSlice";

 export const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(selectContacts);

   const handleSubmit = (event) => {
     event.preventDefault();

     const isDuplicateContact = contacts.some(
       (contact) => contact.name === name || contact.number === number
     );

     if (isDuplicateContact) {
       alert(`${name} is already in contacts`);
       return;
     }

     dispatch(addContact({name, number } ));
  setName("");
  setNumber("");
};
    

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "number") {
      setNumber(value);
    }
  };

  return (
     
    <form className={fcss.pform} onSubmit={handleSubmit}>
      <label className={fcss.plabel} htmlFor="nameInput">
        Name
        <input
          className={fcss.pinput}
          id="nameInput"
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={fcss.plabel} htmlFor="numberInput">
        Number
        <input
          className={fcss.pinput}
          id="numberInput"
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={fcss.pbtn} type="submit">
        Add contact
      </button>
      </form>

  );
};

// export default ContactForm;



