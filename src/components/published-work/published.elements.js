import styled from 'styled-components'

export const PostsContainer = styled.a`
    text-decoration: none;
    margin: 1rem auto 0rem auto;
    font-family: 'Lexend Deca', sans-serif;
    background-color: white;
    width: 95%;
    border-radius: 20px;
    box-shadow: 4px 5px 10px #050FFF29;
    h1{
        padding: 0.5rem 0rem;
        font-weight: normal;
        text-align: left;
        font-size: 1.2em;
        color: #474747;
        padding-left: 1rem;
    }
    img{
        display:block;
        object-fit: cover;
        border-radius: 0px 0px 20px 20px;
        width:100%;
        height: auto;
    }
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