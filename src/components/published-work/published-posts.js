import React from 'react';
import {PostsContainer} from './published.elements'

const PublishedPosts = (props) =>{

    return (
        <>
            <PostsContainer target="_blank" href={props.link}>
                <h1>{props.Title}</h1>
                <img src={props.image} alt="published work"/>
            </PostsContainer>
        </>
      );
}

export default PublishedPosts;