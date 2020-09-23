//REACT IMPORTS
import React from 'react';
//FILE IMPORTS
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <Container style={{display: "flex", justifyContent: "center"}}>
          <Row className={"profile-container"} style={{maxWidth: "80vw"}} >
            <Col xs="auto" sm="true" md="true" className="center-block">
              <ProfileCard/>
            </Col>
            <Col xs="auto" sm="true" md="true" className="center-block">
              <SoftSkillsCard/>
            </Col>
          </Row>
        </Container>
        <Container>
            <MyStack/>
        </Container>
        <Container>
            
        </Container>
    </Container>
  );
}

export default App;
