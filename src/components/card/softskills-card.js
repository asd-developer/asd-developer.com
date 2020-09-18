import React from 'react';

const SoftSkillsCard = () => {
  return (
    <>
        <div className={'card-body softskills-bgcolor shadow'}>
            <div>
                <h2 className={'card-title softskills-titlebgcolor'}>My Soft Skills:</h2>
            </div>
            <div className={'card-body-text'}>
                <ul style={{margin: "15px auto", padding: "0px", lineHeight: "0px"}}>
                    <li className={'inline'}><p className={"no-margin softskills-text"}>Love to learn</p></li>
                    <li className={'inline'}><p className={"no-margin softskills-text"}>Quick learner</p></li>
                    <li className={'inline'}><p className={"no-margin softskills-text"}>Highly motivated</p></li>
                    <li className={'inline'}><p className={"no-margin softskills-text"}>Good at problem-solving</p></li>
                    <li className={'inline'}><p className={"no-margin softskills-text"}>High stress tolerance</p></li>
                </ul>
            </div>
        </div>
    </>
  );
}

export default SoftSkillsCard;
