import React from 'react';
import { CardBody,CardTitle } from './Card.elements'

const SoftSkillsCard = () => {
  return (
        <CardBody BgColor={"#EEEDFF"}>
            <CardTitle TitleBgColor={"#868FFF"}>My Soft Skills:</CardTitle>
                <ul>
                    <li key="1"><p>Love to learn</p></li>
                    <li key="2"><p>Quick learner</p></li>
                    <li key="3"><p>Highly motivated</p></li>
                    <li key="4"><p>Good at problem-solving</p></li>
                    <li key="5"><p>High stress tolerance</p></li>
                </ul>
        </CardBody>
  );
}

export default SoftSkillsCard;
