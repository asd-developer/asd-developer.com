import React, {useState} from 'react';
import ProjectPosts from './published-posts'
import {Title, Posts} from './published.elements'

const Published = (props) => {
  const [projects] = useState(
    [
      {
        title: "Design Portfolio", 
        image: "design-portfolio.png",
        link: "https://www.andresoaresduarte.com",
      },
      {
        title: "Time 4 Changers", 
        image: "time4changers.png",
        link: "https://www.time4changers.com",
      },
      {
        title: "Saude Online", 
        image: "saudeonline.png",
        link: "https://saudeonline.pt",
      }
    ]
  );

  return (
    <>
        <Title>Published Work:</Title>
        <Posts>
          {projects.map(project =>(
            <ProjectPosts Title={project.title} image={project.image} link={project.link}/>
          ))}
        </Posts>
        
    </>
  );
}

export default Published;
