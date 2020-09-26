import React from 'react';
import {HobbiesContainer,HobbySquares} from './about.elements'

const Hobbies = () => {
  return (
    <>
        <HobbiesContainer>
            <h1>My Hobbies:</h1>
            <HobbySquares>
            <div>
                <img src="diving.svg" alt="Diving"/>
                <img src="drone.svg" alt="Drone"/>
                <img src="skate.svg" alt="Skate"/>
                <img src="travel.svg" alt="Travel"/>
                <img src="movies.svg" alt="Cinema"/>
            </div>
            </HobbySquares>
        </HobbiesContainer>
    </>
  )
}

export default Hobbies;