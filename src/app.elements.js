import styled from "styled-components"

export const MainContainer = styled.div`
  font-family: 'Lexend Deca', sans-serif;
`
export const Container = styled.div`
  display: grid;
  margin: 6rem auto 0px auto;
  justify-content: center;
  grid-template-columns: 75%;
  @media screen and (max-width: 1100px){
    grid-template-columns: 100%;
  }
`

export const AboutContainer = styled.div`
  margin: 10rem auto;
`

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 40% 40%;
    justify-content: center;

    @media screen and (max-width: 850px){
      grid-template-columns: 100%;
  }
`

export const StackContainer = styled.div`

`