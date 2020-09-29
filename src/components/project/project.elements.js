import styled from 'styled-components'

export const PostsContainer = styled.div`
    display: block;
    margin: 1rem auto 1rem auto;
    background-color: white;
    height: auto;
    min-height: 19rem;
    width: 25rem;
    min-width: 25rem;
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
    grid-template-columns: 50% 50%;

    @media screen and (max-width: 1100px){
        grid-template-columns: 100%;
    }
`