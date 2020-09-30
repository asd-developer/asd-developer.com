import styled from 'styled-components'

export const CardBody = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    background-color: ${props => props.BgColor};
    margin: 0px auto;
    height: 100%;
    min-height: 18rem;
    width: 90%;
    padding: 0px;
    border-radius: 20px;
    box-shadow: 4px 5px 10px #050FFF29;
    @media screen and (max-width: 850px){
      grid-template-columns: 80%;
      margin-bottom: 1rem;
    }
    ul{
        margin: 20px auto;
        padding-left: 2rem;
    }
    li{
        display: flex;
        color: #474747;
        font-size: 1.25em;
    }
    p{
        margin: 0px;
        line-height: 1.5em;
    }
    span{
        color: #474747;
        font-size: 0.8em;
    }
    
`
export const CardTitle = styled.h1`
    background-color: ${props => props.TitleBgColor};
    border-radius: 20px 20px 0px 0px;
    margin: 0px auto;
    padding-left: 2rem;
    font-weight: normal;
    color: #FFFFFF;
    font-size: 1.3em;
    line-height: 4rem;
`

export const CardBodyTest = styled.div`

`
