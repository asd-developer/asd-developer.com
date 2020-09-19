import React from 'react';

const MyStack = () => {
  return (
    <>
            <div>
                <h2 className={'my-stack-title'}>My Stack:</h2>
            </div>
            <div className={'inline-icons'}>
                <div className={"stack-icons-container"}>
                    <img src="html icon.png" className={"stack-icons shadow"} alt="html"/>
                    <span className={"caption"}>HTML</span>
                </div>
                <div className={"stack-icons-container"}>
                    <img src="css icon.png" className={"stack-icons shadow"} alt="css"/>
                    <span className={"caption"}>CSS</span>
                </div>
                <div className={"stack-icons-container"}>
                    <img src="javascript icon.png" className={"stack-icons shadow"} alt="JavaScript"/>
                    <span className={"caption"}>JavaScript</span>
                </div>
                <div className={"stack-icons-container"}>
                    <img src="react icon.png" className={"stack-icons shadow"} alt="ReactJs"/>
                    <span className={"caption"}>ReactJS</span>
                </div>
                <div className={"stack-icons-container"}>
                    <img src="nodejs icon.png" className={"stack-icons shadow"} alt="NodeJs"/>
                    <span className={"caption"}>NodeJS</span>
                </div>
                <div className={"stack-icons-container"}>
                    <img src="git icon.png" className={"stack-icons shadow"} alt="GIT"/>
                    <span className={"caption"}>GIT</span>
                </div>
                <div>
                    <h2 className={'my-stack-others'}>Others:</h2>
                    <h3 className={'other-stack'}>Webpack, DevTools, Sass, Bootstrap, PHP, Jest, mySQL, CICD, Docker</h3>
                </div>
            </div>
    </>
  );
}

export default MyStack;
