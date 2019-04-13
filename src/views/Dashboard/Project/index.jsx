import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { getProjectById } from "../../../store/selectors";
import { projectsReadRequest } from "../../../actions";

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

const Project = props => {
  useEffect(() => {}, []);

  const { project, members } = props;
  if (!project || Object.keys(project).length === 0) {
    return <StyledSpinner />;
  }
  const { theme_color, goals, scopes, technology, tags } = project;
  return (
    <MainContainer>
      <ProjectMainBlock project={project} />
      {/* {members.length > 0 && (
        <MembersProjectBlock members={members} theme_color={theme_color} />
      )} */}
      <div
        style={{
          display: "flex"
        }}
      >
        {goals && <GoalsBlock project={project} />}
        {scopes && <ScopesBlock project={project} />}
      </div>
      <div
        style={{
          display: "flex"
        }}
      >
        {technology && <TechnologyBlock project={project} />}
        {tags && <TagsBlock project={project} />}
      </div>
      <DeleteProjectBlock project={project} />
    </MainContainer>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const currentProject = getProjectById(state, id);
  return {
    project: currentProject
  };
};

const mapDispatchToProps = dispatch => ({
  readProjects: () => dispatch(projectsReadRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project);
