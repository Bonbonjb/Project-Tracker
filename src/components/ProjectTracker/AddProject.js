// components/ProjectTracker/AddProject.js
import React from 'react';

const AddProject = ({ newProjectName, setNewProjectName, setProjects }) => {
  const addProject = (e) => {
    e.preventDefault();
    if (!newProjectName.trim()) return;
    const newProject = {
      id: Date.now(),
      name: newProjectName,
      priority: "medium",
      status: "not-started",
      stages: [],
      history: [{ date: new Date().toISOString(), action: "Project created", description: "New project initialized" }]
    };
    setProjects(prev => [...prev, newProject]);
    setNewProjectName("");
  };

  return (
    <form onSubmit={addProject}>
      <input
        value={newProjectName}
        onChange={(e) => setNewProjectName(e.target.value)}
        placeholder="New Project Name"
      />
      <button type="submit">Add Project</button>
    </form>
  );
};

export default AddProject;
