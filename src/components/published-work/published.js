import React, {useState} from 'react';
import PublishedPosts from './published-posts'
import {Title, Posts} from './published.elements'

const Published = (props) => {
  const [projects] = useState(
    [
      {
        title: "Design Portfolio", 
        image: "published/andredesign.png",
        link: "https://www.andresoaresduarte.com",
      },
      {
        title: "Time 4 Changers", 
        image: "published/time4changers.png",
        link: "https://www.time4changers.com",
      },
      {
        title: "Saude Online", 
        image: "published/saudeonline.png",
        link: "https://saudeonline.pt",
      }
    ]
  );

  return (
    <>
        <Title>
          Published Work
          <h2>(Click in any square to acess the published website.)</h2>
        </Title>
        <Posts>
          {projects.map(project =>(
            <PublishedPosts Title={project.title} image={project.image} link={project.link} style={{height: "100%"}}/>
          ))}
        </Posts>
        
    </>
  );
}

export default Published;
