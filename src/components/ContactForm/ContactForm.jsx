import React, { Component } from "react"
import { Form } from "components/formContainer/formDiv_module";
import { Label,Field,SubmitBtn } from "./ContactForm-module";

export default class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };
    
    render() {
        return (
            <Form>
                <Label htmlFor="name">Name</Label>
                <Field
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <Label htmlFor="number">Number</Label>
                <Field
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                <SubmitBtn>Add Contact</SubmitBtn>
            </Form>
        );
    };
}