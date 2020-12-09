import styled from 'styled-components'

export const ContactsForm = styled.div`
    display: block;
    margin: 6rem auto 6rem  auto;
    height: auto;
    width: 70%;
    background: rgb(57,40,209);
    background: linear-gradient(146deg, rgba(57,40,209,1) 0%, rgba(130,54,206,1) 100%);
    border-radius: 60px;
    box-shadow: 4px 5px 10px #050FFF29;
    @media screen and (max-width: 850px){
      width: 95%;
    }
    @media only screen and (min-device-width : 1700px){
        width: 50%;
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
        cursor: pointer;
    }
    button:disabled{
        background-color: #769c73;
        cursor: default;
    }
`

export const OtherContacts = styled.section`
    display: flex;
    align-items: center;
    margin: 2rem auto;
    padding: 0.5rem 0;
    justify-content: space-evenly;
    width: 98%;
    background-color: #FFFFFF;
    border-radius: 20px;
    box-shadow: 4px 5px 10px #050FFF29;
    @media screen and (max-width: 850px){
      background-color: transparent;
      box-shadow: none;
      flex-direction: column;
      span{
        margin: 0.5rem auto;
        padding: 0.5rem 2rem;
        width: 70%;
        background-color: #FFFFFF;
        border-radius: 20px;
        box-shadow: 4px 5px 10px #050FFF29;
      }
    }
`
export const PhoneNumber = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        display: inline-block;
        padding-right: 0.5rem;
    }
    a{
        display: flex;
        text-decoration: none;
        color: #474747;
        align-items: center;
        justify-content: center;
    }
    em{
        text-decoration: none;
        color: #474747;
        font-size: 0.9em;
        padding-right: 0.2rem;
    }
    p{
        display: inline-block;
        color: #272727;
        font-size: 1em;
    }
`

export const MyEmail = styled.div`
   display: flex;
    align-items: center;
    justify-content: center;
    img{
        display: inline-block;
        padding-right: 0.5rem;
    }
    h2{
        display: inline-block;
        color: #272727;
        font-size: 1em;
    }
    @media screen and (max-width: 850px){
      h2{
          font-size: 0.8em;
      }
    }
`

export const Curriculum = styled.div`
    a{
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 0 0 0 0.6rem;
    justify-content: center;
    text-decoration: none;
    color:#272727;
    border: solid #272727;
    border-radius: 20px;
    }
    img{
        padding: 0.5rem;
        fill: white;
    }
    a:hover{
        background-color: #F0F0F0;
    }
    @media screen and (max-width: 850px){
      a{
          border: none;
      }
    }
`
export const Social = styled.div`
    display: flex;
    ul{
        display: flex;
        margin: 0 auto;
    }
    li{
        list-style-type: none;
        text-decoration: none;
    }
    img{
        padding: 0 0.5rem;
    }
    @media screen and (max-width: 850px){
      margin: 1rem auto;
    }
`

export const SuccessNotification = styled.div`
    width: 40%;
    max-width: 40%;
    margin: 0px auto;
    padding: 0.6rem;
    background-color: #009900;
    color: white;
    font-size: 0.8em;
    border-radius: 20px;
    text-align:center;

`

export const ErrorNotification = styled.div`
    width: 50%;
    max-width: 50%;
    margin: 0px auto;
    padding: 0.6rem;
    background-color: #ff0033;
    color: white;
    font-size: 0.8em;
    border-radius: 20px;
    text-align:center;
`