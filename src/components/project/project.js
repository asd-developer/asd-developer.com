import React, {useState} from 'react';
import ProjectPosts from './projectpost'
import {Title, Posts} from './project.elements'

const Projects = (props) => {
  const [projects] = useState(
    [
      {
        title: "Book Tracking App", 
        image: "projects/myreads.png",
        stack: "React, NodeJs, API",
        link: "https://github.com/asd-developer/MyReadsReactJsApp",
        key: 1,
      },
      {
        title: "Mechanical Keyboard Builds", 
        image: "projects/keyboardbuilds.png",
        stack: "React, NodeJs, MongoDB, Bootstrap",
        key: 2,
      },
      {
        title: "Weather App", 
        image: "projects/weatherproject.png",
        stack: "Javascript, CSS, NodeJs, Webpack, API",
        link: "https://github.com/asd-developer/weather-journal-app",
        key: 3,
      },
      {
        title: "Hex Color Generator", 
        image: "projects/hexadecimalproject.png",
        stack: "React, CSS, AWS",
        link: "https://github.com/asd-developer/HexGeneratorApp",
        key: 4,
      }
    ]
  );

  return (
    <>
        <Title>
          Projects
          <span>(Click in any square to acess the GitHub page.)</span>
        </Title>
        <Posts>
          {projects.map(project =>(
            <ProjectPosts Title={project.title} image={project.image} key={project.key} stack={project.stack} link={project.link}/>
          ))}
        </Posts>
        
    </>
  );
}

export default Projects;
