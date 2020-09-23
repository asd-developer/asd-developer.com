import React from 'react';
import {Container} from 'react-bootstrap'

const ProfileCard = () => {
  return (
        <Container className={'card-body profile-bgcolor blueshadow'} sm="3" md="6">
            <Container>
                <h2 className={'card-title profile-titlebgcolor'}>Who is ASD-DEVELOPER?</h2>
            </Container>
            <Container className={'card-body-text'}>
                <ul style={{margin: "15px auto", padding: "0px"}}>
                    <li className={'inline'}><p className={"profile-text"}><span className={"id-title"}>Name:</span>André Duarte</p></li>
                    <li className={'inline'}><p className={"profile-text"}><span className={"id-title"}>Title:</span>Front-end Developer</p></li>
                    <li className={'inline'}><p className={"profile-text"}><span className={"id-title"}>Birthday:</span>21 September, 1999</p></li>
                    <li className={'inline'}><p className={"profile-text"}><span className={"id-title"}>From:</span>Portugal</p></li>
                </ul>
            </Container>
        </Container>
  );
}

export default ProfileCard;
