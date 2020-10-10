import styled from 'styled-components'

export const StickyNavbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    background-color: #FFFFFF;
    padding: 0em 4em 0em 4em;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    margin-right: auto;
    margin-left: auto;
    width: 75%;
    z-index: 10;
    font-family: 'Lexend Deca', sans-serif;
    box-shadow: 4px 5px 10px #050FFF29;
    border-radius: 0px 0px 3rem 3rem;
    @media screen and (max-width: 850px){
      display: none;
  }
`;

export const Underline = styled.span`
    position: relative;
    &::before {
        display: none;
        content: "";
        position: absolute;
        height: 3px;
        width: 60%;
        background-color: ${props => props.underlineColor};
        bottom: -4px;
        left: 0px;
        right: 0px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 100px;
     }
`

export const FlexStart = styled.div`
    justify-content: flex-start;
`;

export const FlexEnd = styled.div`
    justify-content: flex-end;
`;

export const NavTitleLink = styled.a`
    color: #474747;
    text-decoration: none;
    font-size: 1.2em;
`;

export const Link = styled.a`
    margin: 0rem 1rem;
    color: #272727;
    text-decoration: none;
`;

export const Contact = styled.a`
    background: #6C40FF 0% 0% no-repeat padding-box;
    color: white;
    border-radius: 2rem;
    padding: 0.5rem 1.5rem;
    text-decoration: none;
    font-size: 1em
`;

export const Mobile = styled.nav`
    position: fixed;
    top: 0px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 98%;
    box-shadow: 4px 5px 10px #050FFF29;
    border-radius: 0px 0px 1rem 1rem;
    margin: 0 auto;
    padding: 1.2rem 0;
    height: auto;
    background-color: white;
    h1{
        margin: 0 auto;
        color: #272727;
        text-align: center;
        font-size: 100%;
    }
    button{
        position: absolute;
        left: 5vw;
        width: 2rem;
        height: 2rem;
        border: none;
        border-radius: 10px;
    }
    @media screen and (min-width: 851px){
      display: none;
    }
`;