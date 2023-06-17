import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const p = projects.map((r) => {
    return <ProjectItem key={r.id} name={r.name} about={r.about} technologies={r.technologies}/>
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{p}</div>
    </div>
  );
}

export default ProjectList;
