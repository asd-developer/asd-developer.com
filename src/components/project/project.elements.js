import styled from 'styled-components'

export const PostsContainer = styled.a`
    text-decoration: none;
    margin: 0rem auto 2rem auto;
    font-family: 'Lexend Deca', sans-serif;
    background-color: white;
    height: auto;
    width: 95%;
    padding: 0px;
    border-radius: 20px;
    box-shadow: 4px 5px 10px #050FFF29;
    h1{
        padding-top: 0rem;
        font-weight: normal;
        text-align: left;
        font-size: 1.2em;
        line-height: 3rem;
        color: #474747;
        padding-left: 1rem;
    }
    img{
        margin-top: -0.4rem;
        width:100%;
    }
    h2{
        margin-top: 0.5rem;
        color: #6e6e6e;
        line-height: 0.5em;
        font-size: 0.8em;
    }
    p{
        margin-top: 0.5rem;
        color: #474747;
        line-height: 0.9em;
        font-size: 1em;
    }

`
export const Padding = styled.div`
    padding-left:1rem;
    padding-bottom: 1rem;
`

export const Title = styled.h2`
    margin-left: 1rem;
    font-family: 'Lexend Deca', sans-serif;
    color: #4C5391;
    text-align: left;
    font-size: 2rem;
    margin-bottom: 2rem;
    span{
        margin-top: 0.5rem;
        margin-left: 0.5rem;
        font-size: 0.8rem;
    }
`

export const Posts = styled.div`
    display: grid;
    font-family: 'Lexend Deca', sans-serif;
    width: 100%;
    grid-template-columns: 50% 50%;
    margin: 0px auto;
    @media screen and (max-width: 850px){
        grid-template-columns: 100%;
        justify-content: center;
    }
    @media only screen and (min-device-width : 1700px){
        grid-template-columns: 33% 33% 33%;
    }
`