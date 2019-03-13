import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./style";
import { Button } from "..";

import projects from "./projects";

const Project = props => {
  const id = props.match.params.id;
  const project = projects
    .flatMap(element => element.projects)
    .find(element => element.id === id);
  return (
    <Container>
      <div className="Panel" />
      <div className="Main">
        <div className="Name">{project.name}</div>
        <div className="Desc">{project.description}</div>
        {/* <div className="Number">{project.numberOfMembers}</div> */}
        <div />
        <Link to="/dashboard/projects">
          <Button label="back" size="small" />
        </Link>
      </div>
    </Container>
  );
};

export default Project;
