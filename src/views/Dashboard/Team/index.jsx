import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { getProjectById } from "../../../store/selectors";
import { teamReadRequest, usersReadRequest } from "../../../actions";

import {
  MembersProjectBlock,
  ProjectMainBlock,
  DeleteProjectBlock,
  GoalsBlock,
  ScopesBlock,
  TechnologyBlock,
  TagsBlock,
  VerifyProjectBlock
} from "../../../components";

import { MainContainer, StyledSpinner } from "./style";

const Team = props => {
  useEffect(() => {}, []);

  const { project, members } = props;
  if (!project || Object.keys(project).length === 0) {
    return <StyledSpinner />;
  }
  const {
    id,
    theme_color,
    goals,
    scopes,
    technology,
    tags,
    verified
  } = project;
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
      {!verified && <VerifyProjectBlock id={id} />}
      <DeleteProjectBlock id={id} />
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
  readTeam: () => dispatch(teamReadRequest()),
  readUsers: () => dispatch(usersReadRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Team);
