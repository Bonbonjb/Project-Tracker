// components/ProjectTracker/OverviewPanel.js
import React from 'react';

const OverviewPanel = ({ projects }) => {
  const activeProjects = projects.filter(p => p.status === "in-progress").length;
  const completedProjects = projects.filter(p => p.status === "completed").length;
  const highPriorityTasks = projects.reduce((count, project) => 
    count + project.stages.reduce((stageCount, stage) =>
      stageCount + stage.tasks.filter(task => task.priority === "high").length, 0), 0);

  return (
    <div className="grid grid-cols-3 gap-4">
      <div>Active Projects: {activeProjects}</div>
      <div>Completed Projects: {completedProjects}</div>
      <div>High Priority Tasks: {highPriorityTasks}</div>
    </div>
  );
};

export default OverviewPanel;