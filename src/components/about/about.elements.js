import styled from 'styled-components'

export const AboutContainer = styled.div`
    margin: 0px auto;
    background-color: white;
    height: 115%;
    width: 85%;
    box-shadow: 4px 5px 10px #050FFF29;
    border-radius: 80px;
    @media screen and (max-width: 850px){
      width: 98%;
    }
    h1{
        padding-top: 1.5rem;
        text-align: center;
        color: #3848D6;
    }
    p{
        text-align: left;
        letter-spacing: 0px;
        color: #474747;
        padding-left: 3em;
        padding-right: 3em;
    }
`

export const HobbiesContainer = styled.div`
    margin: 5rem auto;
    h1{
        padding-top: 1.5rem;
        font-size: 1.6em;
        text-align: center;
        color: #474747;
    }
`
export const HobbySquares = styled.div`
    display: inline-block;
    width: 100%;
    vertical-align: top;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    div{
        display:inline-block;
    }

    img{
        width: 3.5rem;
        height: 3.5rem;
        padding: 0.7rem;
        background-color: #4C5391;
        border-radius: 20px;
        margin: 0rem 1.5rem;
        box-shadow: 4px 5px 10px #050FFF29;
    }
`

