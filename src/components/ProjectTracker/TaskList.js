// components/ProjectTracker/TaskList.js
import React, { useState } from 'react';

const TaskList = ({ project, setProjects }) => {
  const [newTaskText, setNewTaskText] = useState("");

  const addTask = (stageId) => {
    if (!newTaskText.trim()) return;

    const updatedProjects = projects.map(p => {
      if (p.id === project.id) {
        const updatedStages = p.stages.map(stage => {
          if (stage.id === stageId) {
            return { ...stage, tasks: [...stage.tasks, { id: Date.now(), description: newTaskText, completed: false }] };
          }
          return stage;
        });
        return { ...p, stages: updatedStages };
      }
      return p;
    });

    setProjects(updatedProjects);
    setNewTaskText("");
  };

  return (
    <div>
      {project.stages.map(stage => (
        <div key={stage.id}>
          <h3>{stage.name}</h3>
          {stage.tasks.map(task => (
            <p key={task.id}>{task.description}</p>
          ))}
          <input value={newTaskText} onChange={(e) => setNewTaskText(e.target.value)} placeholder="New Task" />
          <button onClick={() => addTask(stage.id)}>Add Task</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
