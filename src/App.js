//REACT IMPORTS
import React from 'react';
//FILE IMPORTS
import Navbar from "./components/navbar/navbar"
import ProfileCard from "./components/card/profile-card"
import SoftSkillsCard from "./components/card/softskills-card"
import MyStack from './components/stack/my-stack'


const App = (props) => {
  return (
    <div className="App">
        <Navbar/>
        <div style={{display: "flex", justifyContent: "center"}}>
              <ProfileCard/>
              <SoftSkillsCard/>
        </div>
        <div>
            <MyStack/>
        </div>
    </div>
  );
}

export default App;
