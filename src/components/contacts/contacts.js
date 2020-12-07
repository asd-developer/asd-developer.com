import React,{useState} from 'react'
import {ContactsForm, Form, OtherContacts, PhoneNumber, MyEmail, Curriculum, Social} from './contacts.elements'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import firebase from 'firebase/app';



const Contacts = (props) => {
    const [Value, setValue] = useState({
            name: '',
            email: '',
            message: ''
    })

    const createNotification = (type) => {
          switch (type) {
            case 'success':
              NotificationManager.success('Form submitted sucessfully!', 'Message Submitted!');
              break;
            case 'error':
              NotificationManager.error('Error message', 'Click me!', 5000, () => {
                alert('callback');
              });
              break;
          }
      };


    const handleChange = (event) =>{
        setValue({...Value,[event.target.name]: event.target.value});
    }

    const submitForm = async (event) => {
        event.preventDefault()
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            dataType: "json",
            body: JSON.stringify(Value)
        };

        await fetch("https://us-central1-asd-developer-emails.cloudfunctions.net/formMail", requestOptions)
            .then(resp => {
                console.log('Printing out not json');
                resp.status ? createNotification("success") : createNotification("error")
            })
        }

  return (
    <>
        <ContactsForm>
            <h1>Contact Me</h1>
            <Form onSubmit={submitForm}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="André Duarte" onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="example@testemail.com" onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea type="text" name="message" placeholder="Write here what you would like to send to me." cols="45" row="10" onChange={handleChange} required/>
                </div>
                <h2>You will receive an Email with the message content.</h2>
                <button type="submit">Send</button>
            </Form>
        </ContactsForm>
        <OtherContacts>
            <span>
                <PhoneNumber>
                    <a href="tel:+351939282394">
                        <img src="contacts/phonenumber.svg" alt="phone number"/>
                        <em>+351</em><p>939282394</p>
                    </a>
                </PhoneNumber>
            </span>
            <span>
                <MyEmail><img src="contacts/Email.svg" alt="phone number"/><h2>andreduarte.profissional@gmail.com</h2></MyEmail>
            </span>
            <span>
                <Curriculum>
                        <a href="Andre Duarte - CV.pdf" download>
                            <h2>resume/cv</h2>
                            <img src="contacts/CV.svg" alt="Curriculo"></img>
                        </a>  
                </Curriculum>
            </span>
                <Social>
                <hr/>
                <ul>
                    <li key="instagram"><a target="_blank" href="https://www.instagram.com/andred3223/" rel="noopener noreferrer"><img src="social/instagram.svg" alt="Instagram"/></a></li>
                    <li key="github"><a target="_blank" href="https://github.com/asd-developer" rel="noopener noreferrer"><img src="social/github.svg" alt="Github"/></a></li>
                    <li key="linkedin"><a target="_blank" href="https://www.linkedin.com/in/andresdev/" rel="noopener noreferrer"><img src="social/linkedin.svg" alt="Linkedin"/></a></li>
                </ul>
                </Social>
        </OtherContacts>
        <NotificationContainer/>
    </>
  );
  }
  
export default Contacts;
