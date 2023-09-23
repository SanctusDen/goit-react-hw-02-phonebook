import React from 'react'

import ContactForm from './ContactForm/ContactForm';
import { FormContainer } from './formContainer/formDiv_module';

export const App = () => {
  return (
    <FormContainer>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      {/* <Filter />
      <ContactList /> */}

      <h3>Find contacts by name</h3>
      <input></input>
    </FormContainer>
  );
};
