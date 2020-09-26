import React from 'react';
import { CardBody,CardTitle } from './Card.elements'

const SoftSkillsCard = () => {
  return (
        <CardBody BgColor={"#EEEDFF"}>
            <CardTitle TitleBgColor={"#868FFF"}>My Soft Skills:</CardTitle>
                <ul>
                    <li><p>Love to learn</p></li>
                    <li><p>Quick learner</p></li>
                    <li><p>Highly motivated</p></li>
                    <li><p>Good at problem-solving</p></li>
                    <li><p>High stress tolerance</p></li>
                </ul>
        </CardBody>
  );
}

export default SoftSkillsCard;
