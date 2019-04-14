import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { getProjectById } from "../../../store/selectors";
import { teamReadRequest, usersReadRequest } from "../../../actions";
import LinkButton from "../../../components/LinkButton";
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
      <LinkButton to="/dashboard/projects" />

      <ProjectMainBlock project={project} gridArea="main" />
      {/* {members.length > 0 && (
        <MembersProjectBlock members={members} theme_color={theme_color} />
      )} 
      {/* <div
        style={{
          display: "flex"
        }}
      > */}
      {goals && <GoalsBlock project={project} gridArea="goals" />}
      {scopes && <ScopesBlock project={project} gridArea="scopes" />}
      {/* </div> */}
      {/* <div
        style={{
          display: "flex"
        }}
      > */}
      {technology && <TechnologyBlock project={project} gridArea="techno" />}
      {tags && <TagsBlock project={project} gridArea="tags" />}
      {/* </div> */}
      {!verified && <VerifyProjectBlock id={id} />}
      <DeleteProjectBlock id={id} gridArea="delete" />
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
