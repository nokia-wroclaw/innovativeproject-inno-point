import React, { useState, useEffect } from "react";

import {
  MembersProjectBlock,
  ProjectMainBlock,
  DeleteProjectBlock,
  GoalsBlock,
  ScopesBlock,
  TechnologyBlock,
  TagsBlock
} from "../../../components";

import { MainContainer, StyledSpinner } from "./style";

import { readProjectsById } from "../../../api/projects";

const Project = props => {
  const [data, setData] = useState({});
  const id = props.match.params.id;

  useEffect(() => {
    readProjectsById(id).then(response => setData(response.data));
  }, []);

  const { project, members } = data;
  if (!project || Object.keys(project).length === 0) {
    return <StyledSpinner />;
  }
  const { theme_color, goals, scopes, technology, tags } = project[0];
  return (
    <MainContainer>
      <ProjectMainBlock project={project} />
      {members.length > 0 && (
        <MembersProjectBlock members={members} theme_color={theme_color} />
      )}
      <div
        style={{
          display: "flex",
          width: "calc(100% - var(--projectMargin))"
        }}
      >
        {goals && <GoalsBlock project={project} />}
        {scopes && <ScopesBlock project={project} />}
      </div>
      <div
        style={{
          display: "flex",
          width: "calc(100% - var(--projectMargin))"
        }}
      >
        {technology && <TechnologyBlock project={project} />}
        {tags && <TagsBlock project={project} />}
      </div>
      <DeleteProjectBlock project={project} />
    </MainContainer>
  );
};

export default Project;
