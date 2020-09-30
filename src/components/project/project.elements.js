import styled from 'styled-components'

export const PostsContainer = styled.div`
    margin: 1rem auto;
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
        line-height: 0.5em;
        font-size: 1em;
    }

`
export const PaddingLeft = styled.div`
    padding-left:1rem;
`

export const Title = styled.h2`
    color: #4C5391;
    text-align: left;
    font-size: 1.8rem;
`

export const Posts = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 50% 50%;
    margin: 0px auto;
    @media screen and (max-width: 500px){
        grid-template-columns: 100%;
        justify-content: center;
    }

    @media screen and (max-width: 1100px){
        grid-template-columns: 100%;
    }
    @media only screen and (min-device-width : 1700px){
        grid-template-columns: 33% 33% 33%;
    }
`