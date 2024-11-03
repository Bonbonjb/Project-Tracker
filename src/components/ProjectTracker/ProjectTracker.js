// components/ProjectTracker/ProjectTracker.js
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ProjectList from "./ProjectList";
import AddProject from "./AddProject";
import OverviewPanel from "./OverviewPanel";

const ProjectTracker = () => {
  const [projects, setProjects] = useState([]);
  const [newProjectName, setNewProjectName] = useState("");

  // Define other states and main functions here
const [isLoading, setIsLoading] = useState(false);

const handleAddProject = () => {
  setIsLoading(true);
  // Logic to add a project
  // After adding the project, set isLoading to false
  setIsLoading(false);
};
// ...

  return (
    <div className="max-w-6xl mx-auto p-4">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Project Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <OverviewPanel projects={projects} />
          <AddProject
            newProjectName={newProjectName}
            setNewProjectName={setNewProjectName}
            setProjects={setProjects}
          />
          <ProjectList projects={projects} setProjects={setProjects} />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectTracker;
