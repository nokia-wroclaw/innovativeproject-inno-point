import React from "react";

import { MembersProjectTable, ProjectMainCard } from "../../../components";

import { Container } from "./style";

import projects from "../../../projects";

const Project = props => {
  const id = props.match.params.id;
  const project = projects.find(element => element.id === id);
  const { name, description } = project;
  return (
    <div>
      <ProjectMainCard name={name} description={description} />
      <Container>
        <div className="Panel">Members</div>
        <MembersProjectTable project={project} />
      </Container>
    </div>
  );
};

export default Project;
