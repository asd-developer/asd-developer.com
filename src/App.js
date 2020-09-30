//REACT IMPORTS
import React from 'react';
//FILE IMPORTS
import Navbar from "./components/navbar/navbar"
import ProfileCard from "./components/card/profile-card"
import SoftSkillsCard from "./components/card/softskills-card"
import MyStack from './components/stack/my-stack'
import About from './components/about/about'
import Hobbies from './components/about/hobbies'
import Projects from './components/project/project'
import Published from './components/published-work/published'
//STYLED COMPONENTS
import {GlobalStyles} from './globalStyles'
import { MainContainer, CardContainer, StackContainer, Container, AboutContainer} from './app.elements'

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
        <AboutContainer>
          <About/>
          <Hobbies/>
        </AboutContainer>
        <Container>
          <Projects/>
        </Container>
        <Container>
          <Published/>
        </Container>
      <GlobalStyles/>
    </MainContainer>
  );
}

export default App;
