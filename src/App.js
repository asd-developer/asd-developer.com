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
//Other
import ScrollableAnchor,{configureAnchors} from 'react-scrollable-anchor'



const App = (props) => {

  configureAnchors({offset: -100, scrollDuration: 500});

  return (
    <MainContainer>
        <Navbar/>
        <Container>
          <ScrollableAnchor id={'whois'}>
          <CardContainer>
                <ProfileCard/>
                <SoftSkillsCard/>
          </CardContainer>
          </ScrollableAnchor>
          <StackContainer>
              <MyStack/>
          </StackContainer>
        </Container>
        <ScrollableAnchor id={'about'}>
        <AboutContainer>
          <About/>
          <Hobbies/>
        </AboutContainer>
        </ScrollableAnchor>
        <ScrollableAnchor id={'projects'}>
          <Container>
            <Projects/>
          </Container>
        </ScrollableAnchor>
        <ScrollableAnchor id={'published-work'}>
          <Container>
            <Published/>
          </Container>
        </ScrollableAnchor>
      <GlobalStyles/>
    </MainContainer>
  );
}

export default App;
