import React from 'react';
import { Container, IconRow, } from './stack.elements'

const MyStack = () => {
  return (
    <Container>
      <h2>My Stack:</h2>
      <IconRow>
        <div>
          <img src="stack/html icon.png" alt="HTML" />
          <span className={"caption"}>HTML</span>
        </div>
        <div>
          <img src="stack/css icon.png" alt="CSS" />
          <span className={"caption"}>CSS</span>
        </div>
        <div>
          <img src="stack/javascript icon.png" alt="JavaScript" />
          <span className={"caption"}>JavaScript</span>
        </div>
        <div>
          <img src="stack/react icon.png" alt="ReactJs" />
          <span className={"caption"}>ReactJS</span>
        </div>
        <div>
          <img src="stack/nodejs icon.png" alt="NodeJs" />
          <span className={"caption"}>NodeJS</span>
        </div>
        <div>
          <img src="stack/git icon.png" alt="GIT" />
          <span className={"caption"}>GIT</span>
        </div>
      </IconRow>
      <div>
        <h2>Others:</h2>
        <h3>Webpack, DevTools, MonngoDB, Sass, styled-components, Bootstrap,<br/> Python, PHP, Jest, mySQL, CICD, Docker, AWS</h3>
      </div>
    </Container>
  );
}

export default MyStack;
