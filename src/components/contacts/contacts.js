import React,{useState} from 'react'
import {ContactsForm, Form, OtherContacts, PhoneNumber, MyEmail, Curriculum} from './contacts.elements'

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
                    <input type="text" name="name" placeholder="example: André Duarte" onChange={handleChange} required/>
                </div>
                <div>
                    <label for="email">Email</label>
                    <input type="email" name="email" placeholder="example: testemail@testemail.com" onChange={handleChange} required/>
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
                <span>+351</span>
                <h2>939282394</h2>
            </PhoneNumber>
            <MyEmail><img src="Email.svg" alt="phone number"/><h2>andreduarte.profissional@gmail.com</h2></MyEmail>
        </OtherContacts>
        <Curriculum>
            <div>
                <img src="Cv.svg" alt="Curriculo"></img>
                <h2>Download my C.V</h2>
            </div>
        </Curriculum>
    </>
  );
}

export default Contacts;
