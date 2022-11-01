import React from "react";
import Project from "./Project";

const Projects = ({ projects }) => {


  return (
    <div>
      <h1>Projects</h1>
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </div>
  );
};

export default Projects;
