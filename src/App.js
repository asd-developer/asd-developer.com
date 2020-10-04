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
import Contacts from './components/contacts/contacts'
//STYLED COMPONENTS
import {GlobalStyles} from './globalStyles'
import { MainContainer, CardContainer, StackContainer, Container, AboutContainer} from './app.elements'
//Other
import ScrollableAnchor,{configureAnchors} from 'react-scrollable-anchor'
import { ScrollableLink } from 'react-update-url-on-scroll';
 

const App = (props) => {

  configureAnchors({offset: -100, scrollDuration: 500});

  return (
    <MainContainer>
        <Navbar/>
        <ScrollableLink href={"#whois"}>
          <ScrollableAnchor id={'whois'}>
            <Container>
                <CardContainer>
                  <ProfileCard/>
                  <SoftSkillsCard/>
                </CardContainer>
                <StackContainer>
                  <MyStack/>
                </StackContainer>
            </Container>
          </ScrollableAnchor>
        </ScrollableLink>
        <ScrollableLink href={'#about'}>
          <ScrollableAnchor id={'about'}>
            <AboutContainer>
              <About/>
              <Hobbies/>
            </AboutContainer>
          </ScrollableAnchor>
        </ScrollableLink>
        <ScrollableLink href={"#projects"}>
          <ScrollableAnchor id={'projects'}>
            <Container>
              <Projects/>
            </Container>
          </ScrollableAnchor>
        </ScrollableLink>
        <ScrollableLink href={"#published-work"}>
          <ScrollableAnchor id={'published-work'}>
            <Container>
              <Published/>
            </Container>
          </ScrollableAnchor>
        </ScrollableLink>
        <ScrollableLink href={"#contacts"}>
          <ScrollableAnchor id={'contacts'}>
            <Container>
              <Contacts/>
            </Container>
          </ScrollableAnchor>
        </ScrollableLink>
      <GlobalStyles/>
    </MainContainer>
  );
}

export default App;
