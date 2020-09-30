import React from 'react';
import {PostsContainer,Padding} from './project.elements'

const ProjectPosts = (props) =>{
    return (
        <>
            <PostsContainer target="_blank" href={props.link}>
                <h1>{props.Title}</h1>
                <img src={props.image} alt="Design Portfolio"/>
                <Padding>
                    <h2>Stack:</h2>
                    <p>{props.stack}</p>
                </Padding>
            </PostsContainer>
        </>
      );
}

export default ProjectPosts;