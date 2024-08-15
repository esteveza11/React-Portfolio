import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      image: 'path/to/image1.jpg',
      deployedUrl: 'https://example.com',
      repoUrl: 'https://github.com/example'
    },
    // Add more projects here
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map(project => (
          <Project
            key={project.title}
            title={project.title}
            image={project.image}
            deployedUrl={project.deployedUrl}
            repoUrl={project.repoUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
