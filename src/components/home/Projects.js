import React from "react";
import { projectData } from "../../utils/projectData";

const Projects = () => {
  return (
    <div className="projects">
      <h2>
        Projects <span className="block"></span>
      </h2>
      <div className="projects_container">
        {projectData.map((cur) => {
          return (
            <div className="projects_box">
              <a href={cur.website} target='_blank'>
                <img src={cur.image} className="projects_box-image" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
