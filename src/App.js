//REACT IMPORTS
import React from 'react';
//FILE IMPORTS
import './App.css';
import Navbar from "./components/navbar/navbar"
import ProfileCard from "./components/card/profile-card"
import SoftSkillsCard from "./components/card/softskills-card"
import MyStack from './components/stack/my-stack'
//BOOTSTRAP IMPORTS
import {Container, Row, Col} from 'react-bootstrap'

const App = (props) => {
  return (
    <Container className="App">
        <Navbar/>
        <Container className={"flexrow"}>
          <Row md={2}>
            <Col md={8}><ProfileCard/></Col>
            <Col md={8}><SoftSkillsCard/></Col>
          </Row>
        </Container>
        <div>
          <MyStack/>
        </div>
    </Container>
  );
}

export default App;
