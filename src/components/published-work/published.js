import React, {useState} from 'react';
import PublishedPosts from './published-posts'
import {Title, Posts} from './published.elements'

const Published = (props) => {
//STATE
  //PROJECTS
  const [projects] = useState(
    [
      {
        title: "Design Portfolio", 
        image: "published/andredesign.png",
        link: "https://www.andresoaresduarte.com",
        key: 1,
      },
      {
        title: "Time 4 Changers", 
        image: "published/time4changers.png",
        link: "https://www.time4changers.com",
        key: 2,
      },
      {
        title: "Saude Online", 
        image: "published/saudeonline.png",
        link: "https://saudeonline.pt",
        key: 3,
      }
    ]
  );

  return (
    <>
        <Title>
          Published Work
          <span>(Click in any square to acess the published website.)</span>
        </Title>
        <Posts>
          {projects.map(project =>(
            <PublishedPosts Title={project.title} image={project.image} key={project.key} link={project.link} style={{height: "100%"}}/>
          ))}
        </Posts>
        
    </>
  );
}

export default Published;
