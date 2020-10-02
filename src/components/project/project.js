import React, {useState} from 'react';
import ProjectPosts from './projectpost'
import {Title, Posts} from './project.elements'

const Projects = (props) => {
  const [projects] = useState(
    [
      {
        title: "Book Tracking App", 
        image: "myreads.png",
        stack: "React, NodeJs, API",
        link: "https://github.com/asd-developer/MyReadsReactJsApp",
      },
      {
        title: "Mechanical Keyboard Builds", 
        image: "keyboardbuilds.png",
        stack: "React, NodeJs, MongoDB, Bootstrap",
      },
      {
        title: "Weather App", 
        image: "weatherproject.png",
        stack: "Javascript, CSS, NodeJs, Webpack, API",
        link: "https://github.com/asd-developer/weather-journal-app",
      },
      {
        title: "Hex Color Generator", 
        image: "hexadecimalproject.png",
        stack: "React, CSS, AWS",
        link: "https://github.com/asd-developer/HexGeneratorApp",
      }
    ]
  );

  return (
    <>
        <Title>
          Projects
          <h2>(Click in any square to acess the GitHub page.)</h2>
        </Title>
        <Posts>
          {projects.map(project =>(
            <ProjectPosts Title={project.title} image={project.image} stack={project.stack} link={project.link}/>
          ))}
        </Posts>
        
    </>
  );
}

export default Projects;
