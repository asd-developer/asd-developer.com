import styled from 'styled-components'

export const CardBody = styled.div`
    margin: 0px 20px;
    background-color: ${props => props.BgColor};
    height: 16rem;
    min-height: 16rem;
    width: 25rem;
    min-width: 25rem;
    padding: 0px;
    border-radius: 20px;
    box-shadow: 4px 5px 10px #050FFF29;

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
        font-weight: normal;
    }
`
export const CardTitle = styled.h1`
    background-color: ${props => props.TitleBgColor};
    border-radius: 20px 20px 0px 0px;
    margin: 0px auto;
    padding-left: 2rem;
    font-weight: normal;
    color: #FFFFFF;
    font-size: 1.5em;
    line-height: 4rem;
`

export const CardBodyTest = styled.div`

`
