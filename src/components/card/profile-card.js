import React from 'react';
import { CardBody,CardTitle } from './Card.elements'

const ProfileCard = () => {
  return (
        <CardBody BgColor={"#FFC498"} style={{alignSelf: "end",}}>
            <CardTitle TitleBgColor={"#FFA25D"}>Who is ASD-DEVELOPER?</CardTitle>
                <ul>
                    <li key="name"><p><span>Name: </span>André Duarte</p></li>
                    <li key="title"><p><span>Title: </span>Front-end Developer</p></li>
                    <li key="from"><p><span>From: </span>Portugal</p></li>
                </ul>
        </CardBody>
  );
}

export default ProfileCard;
