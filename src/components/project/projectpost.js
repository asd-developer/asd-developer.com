import React from 'react';
import {PostsContainer} from './project.elements'

const ProjectPosts = (props) =>{
    return (
        <>
            <PostsContainer>
                <h1>{props.Title}</h1>
                <img src={props.image} alt="Design Portfolio"/>
            </PostsContainer>
        </>
      );
}

export default ProjectPosts;