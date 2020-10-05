import styled from 'styled-components'

export const ContactsForm = styled.div`
    display: block;
    margin: 0px auto;
    height: auto;
    width: 50%;
    background: rgb(57,40,209);
    background: linear-gradient(146deg, rgba(57,40,209,1) 0%, rgba(130,54,206,1) 100%);
    border-radius: 60px;
    box-shadow: 4px 5px 10px #050FFF29;
    @media screen and (max-width: 850px){
      width: 95%;
    }
    h1{
        text-align: center;
        color: white;
        padding-top: 1rem;
        font-size: 1.7rem;
    }
`
export const Form = styled.form`
    margin: 1rem auto;
    div{
        display: block;
        margin: 1rem auto;
        width: 80%;

    }
    h2{
        margin: 0px;
        text-align: center;
        font-size: 0.7rem;
        color: white;
    }
    label{
        color: white;
        font-size: 0.9rem;
    }
    input{
        display:block;
        box-sizing: border-box;
        margin: 0.4rem 0rem;
        padding: 0rem 1rem;
        border-radius: 20px;
        height: 1.8rem;
        width: 100%;
        border: none;
    }
    textarea{
        display:block;
        box-sizing: border-box;
        margin: 0.4rem auto;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        height: 6rem;
        width: 100%;
        border: none;
        resize: none;
    }
    button{
        display:block;
        margin: 1rem auto;
        padding: 0.6rem 2rem;
        background-color: #00DC6E;
        border: none;
        border-radius: 20px;
        text-decoration:none;
        font-family:'Lexend Deca',sans-serif;
        color:#FFFFFF;
        opacity: 100%;
    }
`

