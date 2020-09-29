import React, {useState} from 'react';
import ProjectPosts from './projectpost'
import {Title, Posts} from './project.elements'

const Projects = (props) => {
  const [projects] = useState(
    [
      {
        title: "Book Tracking App", 
        image: "design-portfolio.png",
        stack: "React, NodeJs, API",
      },
      {
        title: "Mechanical Keyboard Builds", 
        image: "design-portfolio.png",
        stack: "React, NodeJs, MongoDB, Bootstrap",
      },
      {
        title: "Weather App", 
        image: "weatherproject.png",
        stack: "Javascript, CSS, NodeJs, Webpack, API",
      },
      {
        title: "Hex Color Generator", 
        image: "hexadecimalproject.png",
        stack: "React, CSS, AWS",
      }
    ]
  );

  return (
    <>
        <Title>Projects:</Title>
        <Posts>
          {projects.map(project =>(
            <ProjectPosts Title={project.title} image={project.image} stack={project.stack}/>
          ))}
        </Posts>
        
    </>
  );
}

export default Projects;
