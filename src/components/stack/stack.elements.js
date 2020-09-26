import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 5vh;
    margin-left: auto;
    margin-right: auto;
    h2{
        color: #474747;
        font-size: 25px;
        margin-top: 20px;
    }
`

export const IconRow = styled.div`
    width: 100%;
    vertical-align: top;
    text-align: center;

    div{
        display:inline-block;
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