//REACT IMPORTS
import React from 'react';
//FILE IMPORTS
import Navbar from "./components/navbar/navbar"
import ProfileCard from "./components/card/profile-card"
import SoftSkillsCard from "./components/card/softskills-card"
import MyStack from './components/stack/my-stack'
//STYLED COMPONENTS
import {GlobalStyles} from './globalStyles'
import { MainContainer, CardContainer} from './app.elements'

const App = (props) => {
  return (
    <MainContainer>
        <Navbar/>
        <CardContainer>
              <ProfileCard/>
              <SoftSkillsCard/>
        </CardContainer>
        <div>
            <MyStack/>
        </div>
    <GlobalStyles/>
    </MainContainer>
  );
}

export default App;
