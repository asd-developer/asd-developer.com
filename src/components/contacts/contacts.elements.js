import styled from 'styled-components'

export const ContactsForm = styled.div`
    display: block;
    margin: 0px auto;
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
    }
`

export const OtherContacts = styled.section`
    display: grid;
    width: 70%;
    grid-template-columns: 50% 50%;
    margin: 0rem auto;
    margin-top: 1rem;
    padding: 0rem 2rem;
    justify-content: center;
    @media screen and (max-width: 850px){
        grid-template-columns: 100%;
        width: 90%;
        justify-content: center;
    }
    @media only screen and (min-device-width : 1700px){
        width: 50%;
        grid-template-columns: 50% 50%;
    }
`
export const PhoneNumber = styled.div`
    display: flex;
    margin: 0px auto;
    width: 20rem;
    height: 3rem;
    background-color:white;
    border-radius: 40px;
    align-items: center;
    box-shadow: 4px 5px 10px #050FFF29;
    img{
        display: inline-block;
        padding-left: 1rem;
    }
    span{
        display: inline-block;
        text-align: left;
        padding: 0rem 1rem;
        color: #7A7A7A;
    }
    h2{
        display: inline-block;
        font-size: 1em;
        color:#474747;
        text-align: center;
    }
    @media screen and (max-width: 850px){
        height: 5rem;
        width: 90%;
        img{
            width: 10%;
        }
        span{
            font-size: 1.5em;
        }
        h2{
            font-size: 1.8em;
        }
    }
`

export const MyEmail = styled.div`
    display: flex;
    margin: 0px auto;
    width: 20rem;
    height: 3rem;
    background-color:white;
    border-radius: 40px;
    align-items: center;
    box-shadow: 4px 5px 10px #050FFF29;
    
    img{
        display: inline-block;
        padding-left: 1rem;
    }
    span{
        display: inline-block;
        text-align: left;
        padding: 0rem 1rem;
        color: #7A7A7A;
    }
    h2{
        padding-left: 1rem;
        font-size: 0.75em;
        color:#474747;
        text-align: center;
    }
    @media screen and (max-width: 850px){
        margin-top: 1rem;
        height: 5rem;
        width: 90%;
        img{
            width: 10%;
        }
        h2{
            font-size: 80%;
        }
    }
`

export const Curriculum = styled.section`
    display: grid;
    width: 70%;
    grid-template-columns: 100%;
    margin: 0rem auto;
    margin-top: 1rem;
    padding: 0rem 2rem;
    justify-content: center;

    div{
    display: flex;
    margin: 0px auto;
    width: 16rem;
    height: 3rem;
    background-color: #4E4E4E;
    border-radius: 40px;
    align-items: center;
    box-shadow: 4px 5px 10px #050FFF29;
    }
    
    img{
        display: inline-block;
        padding-left: 2rem;
        width: 9%;
    }
    h2{
        padding-left: 1rem;
        font-size: 1em;
        color:white;
        text-align: center;
    }
    @media screen and (max-width: 850px){
        grid-template-columns: 100%;
        width: 90%;
        justify-content: center;
        div{
        margin-top: 0rem;
        height: 5rem;
        width: 90%;
        }
        img{
            width: 7%;
        }
        h2{
            font-size: 1.5em;
            padding-left: 2rem;
        }
    }
    @media only screen and (min-device-width : 1700px){
        width: 50%;
        grid-template-columns: 100%;
    }
`