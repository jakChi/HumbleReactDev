import React from "react";
import "../Home.css";
import Item from "./Item";
import ProjectsArr from "../projects/ProjectsData";

//const dummyImg = "https://dummyimage.com/300x200";

const ProjectsRev = () => {
  return (
    <div className="projects-rev">
      <h2 className="title">Projects review</h2>
      <div className="grid">
        {ProjectsArr.map((project, index) => (
          <Item
            key={index}
            className={project.className}
            picSrc={project.picSrc}
            caption={project.caption}
            src={project.githubUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsRev;
