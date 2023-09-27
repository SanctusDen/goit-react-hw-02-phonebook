import React, { Component } from 'react'

import ContactForm from './ContactForm/ContactForm';
import { FormContainer } from './formContainer/formDiv.styled';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';

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

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = e.target.elements;
    const value = name.value;
    let id = nanoid();
    this.setState(prevState => {
      const isExist = prevState.contacts.some(
        contact => contact.name.toLowerCase() === value.toLowerCase()
      );
      if (isExist) {
        alert(`${name} is already in contacts.`);
        return
      }
      const updatedContacts = [
        ...prevState.contacts,
        { name: value, number: number.value, id },
      ];
      e.target.reset();
      return { contacts: updatedContacts };
    })
  };

  render() {
    return (
      <FormContainer getContact={this.getContact}>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <Filter handleFilterChange={this.handleFilterChange} />
        <ContactList 
          contacts = {this.state.contacts}
          handleDelete={this.handleDelete}
        />
      </FormContainer>
    );
  }
};