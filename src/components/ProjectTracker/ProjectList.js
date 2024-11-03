// components/ProjectTracker/ProjectList.js
import React from 'react';
import TaskList from './TaskList';

const ProjectList = ({ projects, setProjects }) => {
  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <p>Status: {project.status}</p>
          <TaskList project={project} setProjects={setProjects} />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
