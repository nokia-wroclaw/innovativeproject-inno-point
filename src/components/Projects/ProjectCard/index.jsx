import React, { Fragment } from "react";
import { Element, Tag } from "./style";

import { Link } from "react-router-dom";

export default ({ project, index }) => (
  <Link to={`/dashboard/projects/${project.id}`}>
    <Element key={index} delay={index}>
      <div className="Panel" />
      <div className="Info">
        {project && (
          <Fragment>
            <div className="Name">{project.name}</div>
            <div className="Desc">{project.description}</div>
          </Fragment>
        )}
        <div className="Tags">
          {project.tags.split(",").map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>
        {project && (
          <div className="Members">
            <span>0/{project.numberOfMembers}</span>
            <img src="/icons/member.svg" />
          </div>
        )}
      </div>
    </Element>
  </Link>
);
