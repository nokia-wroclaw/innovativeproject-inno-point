import React, { Fragment } from "react";
import { Element, Tag, Panel } from "./style";

import { Link } from "react-router-dom";

export default ({ team, index }) => (
  <Link to={`/dashboard/teams/${team.id}`}>
    <Element key={index} delay={index}>
      {/* <Panel theme_color={project.theme_color} />
      <div className="Info">
        {project && (
          <Fragment>
            <div className="Name">{project.name}</div>
            <div className="Desc">{project.short_description}</div>
          </Fragment>
        )}
        <div className="Tags">
          {project.tags.split(",").map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>
        {project && (
          <div className="Members">
            <span>0/{project.number_of_members}</span>
            <img src="/icons/member.svg" />
          </div>
        )}
      </div> */}
    </Element>
  </Link>
);
