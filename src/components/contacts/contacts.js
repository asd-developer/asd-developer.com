import React,{useState} from 'react'
import {ContactsForm, Form, OtherContacts, PhoneNumber, MyEmail, Curriculum, Social, SuccessNotification, ErrorNotification} from './contacts.elements'



const Contacts = (props) => {
//STATE
    //FORM STATE
    const [Value, setValue] = useState({
            name: '',
            email: '',
            message: ''
    })

    //FORM ASSISTANT STATE
    const [FormSuccess, setFormSucess] = useState(false)
    const [FormError, setFormError] = useState(false)
    const [FormSession, setFormSession] = useState(0)
    const [DisableBt,setDisableBt] = useState(false)

//HELPER FUNCTIONS
    //CHANGES STATE ON INPUT CHANGE
    const handleChange = (event) =>{
        setValue({...Value,[event.target.name]: event.target.value});
    }

    //SUBMITS FORM BY FETCHING THE FIREBASE API
    const submitForm = async (event) => {
        event.preventDefault()
        setDisableBt(true)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            dataType: "json",
            body: JSON.stringify(Value)
        };

        if(FormSession <= 2){
            await fetch("https://us-central1-asd-developer-emails.cloudfunctions.net/formMail", requestOptions)
                .then(resp => {
                    console.log('resp',resp.status);
                    
                    if(resp.status == 200){
                        console.log("Form submitted successfully");
                        setFormSession(FormSession + 1);
                        setFormSucess(true);
                        setTimeout(()=>{
                            setFormSucess(false)
                        },3000);
                        setDisableBt(false)
                    }else{
                        console.log("error submiting the form")
                        setFormError(true)
                        setTimeout(()=>{
                            setFormError(false)
                            setDisableBt(false)
                        },8000);
                    }
                })
        }else{
            setFormError(true)
                    setTimeout(()=>{
                        setFormError(false)
                        setDisableBt(false)
                    },8000);
                    
        }
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
                {FormSuccess 
                    ? <SuccessNotification> Form submitted successfully. </SuccessNotification>
                    : null
                }
                {FormError
                    ? <ErrorNotification> An error occured while submitting the form. </ErrorNotification>
                    : null
                }
                <button type="submit" disabled={DisableBt}>Send</button>
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
    </>
  );
  }
  
export default Contacts;
