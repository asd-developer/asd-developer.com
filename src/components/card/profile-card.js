import React from 'react';
import { CardBody,CardTitle } from './Card.elements'

const ProfileCard = () => {
  return (
        <CardBody BgColor={"#FFC498"} style={{alignSelf: "end",}}>
            <CardTitle TitleBgColor={"#FFA25D"}>Who is ASD-DEVELOPER?</CardTitle>
                <ul>
                    <li><p><span>Name: </span>André Duarte</p></li>
                    <li><p><span>Title: </span>Front-end Developer</p></li>
                    <li><p><span>Birthday: </span>21 September, 1999</p></li>
                    <li><p><span>From: </span>Portugal</p></li>
                </ul>
        </CardBody>
  );
}

export default ProfileCard;
