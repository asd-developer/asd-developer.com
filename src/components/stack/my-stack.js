import React from 'react';

const MyStack = () => {
  return (
    <>
            <div style={{marginTop: "30px"}}>
                <h2 className={'my-stack-title'}>My Stack:</h2>
            </div>
            <div style={{width: "650px", justifyContent: "flex-start"}}>
                        <img src="html icon.png" className={"stack-icons blueshadow"} alt="HTML"/>
                        <span className={"caption"}>HTML</span>
                        <img src="css icon.png" className={"stack-icons blueshadow"} alt="CSS"/>
                        <span className={"caption"}>CSS</span>
                        <img src="javascript icon.png" className={"stack-icons blueshadow"} alt="JavaScript"/>
                        <span className={"caption"}>JavaScript</span>
                        <img src="react icon.png" className={"stack-icons blueshadow"} alt="ReactJs"/>
                        <span className={"caption"}>ReactJS</span>
                        <img src="nodejs icon.png" className={"stack-icons blueshadow"} alt="NodeJs"/>
                        <span className={"caption"}>NodeJS</span>
                        <img src="git icon.png" className={"stack-icons blueshadow"} alt="GIT"/>
                        <span className={"caption"}>GIT</span>
            </div>
            <div>
                        <h2 className={'my-stack-others'}>Others:</h2>
                        <h3 className={'other-stack'}>Webpack, DevTools, Sass, Bootstrap, PHP, Jest, mySQL, CICD, Docker</h3>
            </div>
    </>
  );
}

export default MyStack;
