import React from 'react';

const projects = [
  {
    image: 'project1-image-url.jpg',
    title: 'Project 1',
    description: 'Description of project 1'
  },
  {
    image: 'project2-image-url.jpg',
    title: 'Project 2',
    description: 'Description of project 2'
  },
  {
    image: 'project3-image-url.jpg',
    title: 'Project 3',
    description: 'Description of project 3'
  }
];

const Projects: React.FC = () => {
  return (
    <div className="container my-5">
      <h2>Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4">
              <img src={project.image} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
