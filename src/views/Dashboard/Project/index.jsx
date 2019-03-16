import React, { useState, useEffect } from "react";

import {
  MembersProjectTable,
  ProjectMainCard,
  Spinner
} from "../../../components";

import { Container } from "./style";

import { readProjectsById } from "../../../api/projects";

const Project = props => {
  const [project, setProject] = useState({});
  const id = props.match.params.id;

  useEffect(() => {
    readProjectsById(id).then(response => setProject(response.data));
  }, []);

  if (Object.keys(project).length === 0) {
    return null;
  }

  return (
    <div>
      <ProjectMainCard project={project[0]} />
      <Container>
        <div className="Panel">Members</div>
        <MembersProjectTable project={project} />
      </Container>
    </div>
  );
};

export default Project;
