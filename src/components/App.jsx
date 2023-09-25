import React, { Component } from 'react'

import ContactForm from './ContactForm/ContactForm';
import { FormContainer } from './formContainer/formDiv_module';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component{
  // state = {
  //   contacts: [],
  //   filter: '',
  // };
  state = {
    name: '',
    number: ''
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  getContact = contactsData => {    
    this.setState(prevState => {
      return {
        name: [contactsData, ...prevState.name]
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    
  };

  handleDelete = e => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts].filter(
          contact => contact.id !== e.target.id
        ),
      }
    });
  };

  render() {
    return (
      <FormContainer getContact={this.getContact}>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
      {/* <ContactList /> */}
      </FormContainer>
    );
  }
}