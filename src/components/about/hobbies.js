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
            </div>
            <div>
              <img src="drone.svg" alt="Drone"/>
            </div>
            <div>
              <img src="skate.svg" alt="Skate"/>
            </div>
            <div>
              <img src="travel.svg" alt="Travel"/>
            </div>
            <div>
              <img src="movies.svg" alt="Cinema"/>
            </div>
            <div>
              <img src="music.svg" alt="Music"/>
            </div>
            </HobbySquares>
        </HobbiesContainer>
    </>
  )
}

export default Hobbies;