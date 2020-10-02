import styled from 'styled-components'

export const AboutContainer = styled.div`
    margin: 0px auto;
    background-color: white;
    height: 100%;
    padding-bottom: 4rem;
    width: 55%;
    font-family: 'Lexend Deca', sans-serif;
    box-shadow: 4px 5px 10px #050FFF29;
    border-radius: 80px;
    @media screen and (max-width: 850px){
      width: 95%;
    }
    h1{
        padding-top: 1.5rem;
        margin-bottom: 1rem;
        font-size: 1.5rem;
        text-align: center;
        color: #3848D6;
    }
    p{
        text-align: left;
        line-height: 1.4rem;
        letter-spacing: 0px;
        color: #474747;
        padding-left: 3em;
        padding-right: 3em;
    }
`

export const HobbiesContainer = styled.div`
    margin: 1rem auto;
    justify-content: center;
    h1{
        padding-top: 1.5rem;
        font-size: 1.6em;
        text-align: center;
        color: #474747;
    }
`
export const HobbySquares = styled.div`
    margin: 0px auto;
    width: 100%;
    vertical-align: center;
    text-align: center;
    margin-top: 1rem;
    div{
        display:inline-block;
    }

    img{
        width: 3rem;
        height: 3rem;
        max-height:70px;
        padding: 0.6rem;
        background-color: #4C5391;
        border-radius: 20px;
        margin: 0rem 1rem;
        box-shadow: 4px 5px 10px #050FFF29;
        margin-bottom: 1rem;
    }
`

