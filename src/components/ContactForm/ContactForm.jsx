import React, { Component } from "react"
import { Form } from "components/formContainer/formDiv.styled";
import { Label, Field, SubmitBtn } from "./ContactForm-module";

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
    
  render() {
    const { handleChange } = this;

    return (
      <Form onSubmit={this.handleSubmit}>
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
        <SubmitBtn>Add Contact</SubmitBtn>
      </Form>
    );
  };
};