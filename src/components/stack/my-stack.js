import React from 'react';
import { Container, IconRow, } from './stack.elements'

const MyStack = () => {
  return (
    <Container>
      <h2>My Stack:</h2>
      <IconRow>
        <div>
          <img src="html icon.png" alt="HTML" />
          <span className={"caption"}>HTML</span>
        </div>
        <div>
          <img src="css icon.png" alt="CSS" />
          <span className={"caption"}>CSS</span>
        </div>
        <div>
          <img src="javascript icon.png" alt="JavaScript" />
          <span className={"caption"}>JavaScript</span>
        </div>
        <div>
          <img src="react icon.png" alt="ReactJs" />
          <span className={"caption"}>ReactJS</span>
        </div>
        <div>
          <img src="nodejs icon.png" alt="NodeJs" />
          <span className={"caption"}>NodeJS</span>
        </div>
        <div>
          <img src="git icon.png" alt="GIT" />
          <span className={"caption"}>GIT</span>
        </div>
      </IconRow>
      <div>
        <h2>Others:</h2>
        <h3>Webpack, DevTools, Sass, Bootstrap, PHP, Jest, mySQL, CICD, Docker</h3>
      </div>
    </Container>
  );
}

export default MyStack;
