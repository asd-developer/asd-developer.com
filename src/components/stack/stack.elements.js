import styled from 'styled-components'

export const Container = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    margin-top: 3vh;
    margin-left: auto;
    margin-right: auto;
    h2{
        color: #474747;
        font-size: 25px;
        margin-bottom: -0.5rem;
        text-align: center;
    }
    h3{
        width: 90%;
        margin: 1rem auto 0rem auto;
        text-align: center;
        line-height: 1.5rem;
        color: #474747
    }
`

export const IconRow = styled.div`
    display: inline-block;
    width: 100%;
    justify-content: center;
    vertical-align: top;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    div{
        display:inline-block;
        margin-bottom: 0.5rem;
    }

    img{
        max-height: 70px;
        border-radius: 20px;
        margin: 0px 15px;
        box-shadow: 4px 5px 10px #050FFF29;
    }
    span{
        color: #474747;
        display: block;
    }
`