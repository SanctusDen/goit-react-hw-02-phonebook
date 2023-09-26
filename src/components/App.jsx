import React, { Component } from 'react'

import ContactForm from './ContactForm/ContactForm';
import { FormContainer } from './formContainer/formDiv.styled';
import { Filter } from './Filter/Filter';

export class App extends Component{
  state = {
    name: '',
    number: ''
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

 getContact = contactsData => {
    console.log('contactsData:', contactsData);
    this.setState(() => {
      return {
        name: [contactsData, ...this.state.name],
        
      }
    });
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