import React from 'react';
import './App.css';
import Navbar from "./components/navbar/navbar"
import ProfileCard from "./components/card/profile-card"
import SoftSkillsCard from "./components/card/softskills-card"

const App = (props) => {
  return (
    <div className="App">
        <Navbar/>
        <div className={"flexrow"}>
          <ProfileCard/>
          <SoftSkillsCard/>
        </div>
    </div>
  );
}

export default App;
