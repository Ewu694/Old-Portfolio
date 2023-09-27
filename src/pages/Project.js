import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import Game from "../components/Game";

import "../styles/Project.css";

export const Project = () => {
  return (

    <div className="projects">
      <h1> Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}

