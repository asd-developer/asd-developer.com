import styled from 'styled-components'

export const Credits = styled.nav`
    margin: 0 auto;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    width: 75%;
    box-shadow: 4px 5px 10px #050FFF29;
    border-radius: 20px 20px 0 0;
    h1{
        padding-left: 3rem;
    }
    h2{
        padding-right: 3rem;
    }
    @media screen and (max-width: 850px){
        width: 100%;
        font-size: 3vw;
        padding: 0;
        h1{
            padding-left: 1rem;
        }
        h2{
            padding-right: 1rem;
        }
  }
`