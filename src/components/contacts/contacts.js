import React,{useState} from 'react'
import {ContactsForm, Form, OtherContacts, PhoneNumber, MyEmail, Curriculum, Social} from './contacts.elements'

const Contacts = (props) => {
    const [Value, setValue] = useState(
        [
            {name: ''},
            {email: ''},
            {message: ''},
        ]
    )

    const handleChange = (event) =>{
        setValue({...Value,[event.target.name]:event.target.value});
    }

  return (
    <>
        <ContactsForm>
            <h1>Contact Me</h1>
            <Form onSubmit={""}>
                <div>
                    <label for="name">Name</label>
                    <input type="text" name="name" placeholder="André Duarte" onChange={handleChange} required/>
                </div>
                <div>
                    <label for="email">Email</label>
                    <input type="email" name="email" placeholder="example@testemail.com" onChange={handleChange} required/>
                </div>
                <div>
                    <label for="message">Message</label>
                    <textarea type="text" name="message" placeholder="Write here what you would like to send to me." cols="45" row="10" onChange={handleChange} required/>
                </div>
                <h2>You will receive an Email with the message content.</h2>
                <button type="submit">Send</button>
            </Form>
        </ContactsForm>
        <OtherContacts>
            <PhoneNumber>
                <img src="phonenumber.svg" alt="phone number"/>
                <a href="tel:+351939282394"><em>+351</em><p>939282394</p></a>
            </PhoneNumber>
            <MyEmail><img src="Email.svg" alt="phone number"/><h2>andreduarte.profissional@gmail.com</h2></MyEmail>
        <Curriculum>
            <div>
                <h2>Resume:</h2>
                <img src="CV.svg" alt="Curriculo"></img>
            </div>
        </Curriculum>
        </OtherContacts>
    </>
  );
}

export default Contacts;
