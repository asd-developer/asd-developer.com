import React from 'react';
import {PostsContainer,PaddingLeft} from './project.elements'

const ProjectPosts = (props) =>{
    return (
        <>
            <PostsContainer target="_blank" href={props.link}>
                <h1>{props.Title}</h1>
                <img src={props.image} alt="Design Portfolio"/>
                <PaddingLeft>
                    <h2>Stack:</h2>
                    <p>{props.stack}</p>
                </PaddingLeft>
            </PostsContainer>
        </>
      );
}

export default ProjectPosts;