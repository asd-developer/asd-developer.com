import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

const MyStack = () => {
  return (
    <>
            <Container style={{marginTop: "30px"}}>
                <h2 className={'my-stack-title'}>My Stack:</h2>
            </Container>
            <Container style={{width: "650px", justifyContent: "flex-start"}}>
                <Row style={{justifyContent: "center", marginTop: "15px"}} xs="2" sm="3" md="6">
                    <Col className={"stack-icons-container"}>
                        <img src="html icon.png" className={"stack-icons blueshadow"} alt="HTML"/>
                        <span className={"caption"}>HTML</span>
                    </Col>
                    <Col className={"stack-icons-container"}>
                        <img src="css icon.png" className={"stack-icons blueshadow"} alt="CSS"/>
                        <span className={"caption"}>CSS</span>
                    </Col>
                    <Col className={"stack-icons-container"}>
                        <img src="javascript icon.png" className={"stack-icons blueshadow"} alt="JavaScript"/>
                        <span className={"caption"}>JavaScript</span>
                    </Col>
                    <Col className={"stack-icons-container"}>
                        <img src="react icon.png" className={"stack-icons blueshadow"} alt="ReactJs"/>
                        <span className={"caption"}>ReactJS</span>
                    </Col>
                    <Col className={"stack-icons-container"}>
                        <img src="nodejs icon.png" className={"stack-icons blueshadow"} alt="NodeJs"/>
                        <span className={"caption"}>NodeJS</span>
                    </Col>
                    <Col className={"stack-icons-container"}>
                        <img src="git icon.png" className={"stack-icons blueshadow"} alt="GIT"/>
                        <span className={"caption"}>GIT</span>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row style={{marginTop: "5px", justifyContent: "center"}} xs="1" sm="2" md="6">
                    <Col>
                        <h2 className={'my-stack-others'}>Others:</h2>
                        <h3 className={'other-stack'}>Webpack, DevTools, Sass, Bootstrap, PHP, Jest, mySQL, CICD, Docker</h3>
                    </Col>
                </Row>
            </Container>
    </>
  );
}

export default MyStack;
