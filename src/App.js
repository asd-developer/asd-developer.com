//REACT IMPORTS
import React from 'react';
//FILE IMPORTS
import Navbar from "./components/navbar/navbar"
import ProfileCard from "./components/card/profile-card"
import SoftSkillsCard from "./components/card/softskills-card"
import MyStack from './components/stack/my-stack'
//STYLED COMPONENTS
import {GlobalStyles} from './globalStyles'
import { MainContainer, CardContainer, StackContainer, Container} from './app.elements'

const App = (props) => {
  return (
    <MainContainer>
        <Navbar/>
        <Container>
          <CardContainer>
                <ProfileCard/>
                <SoftSkillsCard/>
          </CardContainer>
          <StackContainer>
              <MyStack/>
          </StackContainer>
        </Container>
      <GlobalStyles/>
    </MainContainer>
  );
}

export default App;
