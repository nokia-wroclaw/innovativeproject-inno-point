import React from "react";
import { Element, Tag } from "./style";

import { Link } from "react-router-dom";

export default ({ project, index }) => (
  <Link to={`/dashboard/projects/${project.id}`}>
    <Element key={index}>
      <div className="Panel" />
      <div className="Info">
        <div className="Name">
          {project.name} {index}
        </div>
        <div className="Desc">{project.description}</div>
        <div className="Tags">
          {project.tags &&
            project.tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
        </div>
        <div className="Members">
          <span> 0/{project.numberOfMembers}</span>
          <img src="/icons/member.svg" />
        </div>
      </div>
    </Element>
  </Link>
);
