import React, { Component } from 'react'

import ContactForm from './ContactForm/ContactForm';
import { FormContainer } from './formContainer/formDiv.styled';
import { Filter } from './Filter/Filter';
import { ContactList } from './List/ContactList';
// import { nanoid } from 'nanoid';

export class App extends Component{
  state = {
    contacts: [],
    filter: "",
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

  onSubmit = (newContact) => {
    // const isExist = this.prevState.contacts.some(
    //     contact => contact.name.toLowerCase() === this.name.toLowerCase()
    //   );
    // if (isExist) {
    //   alert(`${this.name} is already in contacts.`);
    //   return
    // };
    this.setState(prev => ({ contacts: [...prev.contacts, newContact] }))
  };

  getFoundContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const {filter} = this.setState 
    return (
      <FormContainer getContact={this.getContact} >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmit} />

        <h2>Contacts</h2>
        <Filter handleFilterChange={this.handleFilterChange} filter={ filter} />
        <ContactList 
          contacts = {this.state.contacts}
          handleDelete={this.handleDelete}
        />
      </FormContainer>
    );
  }
};