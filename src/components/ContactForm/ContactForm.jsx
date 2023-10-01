import React, { Component } from "react"
import { Form } from "components/formContainer/formDiv.styled";
import { Label, Field, SubmitBtn } from "./ContactForm-module";
import { nanoid } from "nanoid";

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = e.target.elements;
    const value = name.value;
    let id = nanoid();

    this.props.onSubmit({
      name: this.state.name,
      number: this.state.number,
      id: nanoid()
    })
     const isExist = this.prevState.contacts.some(
        contact => contact.name.toLowerCase() === this.name.toLowerCase()
      );
    if (isExist) {
      alert(`${this.name} is already in contacts.`);
      return
    };

    const updatedContacts = [this.prevState.contacts,
        { name: value, number: number.value, id },
    ];
    this.setState({
      name: '',
      number: '',
    })
    return { contacts: updatedContacts };
  };
  
  render() {
    const { handleChange } = this;

    return (
      <Form onSubmit={this.handleSubmit} getContact ={this.getContact}>
        <Label htmlFor="name">Name</Label>
        <Field
          onChange={handleChange}
          value={this.state.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label htmlFor="number">Number</Label>
        <Field
          onChange={handleChange}
          value={this.state.number}
          type="tel"
          name="number"
          pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <SubmitBtn type="submit">Add Contact</SubmitBtn>
      </Form>
    );
  };
};