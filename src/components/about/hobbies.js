import React from 'react';
import {HobbiesContainer,HobbySquares} from './about.elements'

const Hobbies = () => {
  return (
    <>
        <HobbiesContainer>
            <h1>My Hobbies:</h1>
            <HobbySquares>
            <div>
              <img src="hobbies/diving.svg" alt="Diving"/>
            </div>
            <div>
              <img src="hobbies/drone.svg" alt="Drone"/>
            </div>
            <div>
              <img src="hobbies/skate.svg" alt="Skate"/>
            </div>
            <div>
              <img src="hobbies/travel.svg" alt="Travel"/>
            </div>
            <div>
              <img src="hobbies/movies.svg" alt="Cinema"/>
            </div>
            <div>
              <img src="hobbies/music.svg" alt="Music"/>
            </div>
            </HobbySquares>
        </HobbiesContainer>
    </>
  )
}

export default Hobbies;