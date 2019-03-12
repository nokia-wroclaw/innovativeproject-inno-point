import React from "react";

import Table from "../Table/MembersProjectTable";
import ProjectMainCard from "./ProjectMainCard";

import { Container } from "./style";

import projects from "./projects";

const Project = props => {
  const id = props.match.params.id;
  const project = projects.find(element => element.id === id);
  return (
    <div>
      <ProjectMainCard project={project} />
      <Container>
        <Table project={project} />
      </Container>
    </div>
  );
};

export default Project;
