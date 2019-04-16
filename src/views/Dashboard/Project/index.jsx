import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components/macro";

import { getProjectById } from "../../../store/selectors";
import { projectsReadRequest } from "../../../actions";

import {
  MembersProjectBlock,
  ProjectMainBlock,
  DeleteProjectBlock,
  GoalsBlock,
  ScopesBlock,
  TechnologyBlock,
  TagsBlock,
  VerifyProjectBlock,
  Button
} from "../../../components";

import { withRouter } from "react-router-dom";

import { MainContainer, StyledSpinner } from "./style";
import { Link } from "@material-ui/core";

import LinkButton from "../../../components/LinkButton";

const Project = props => {
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
      )} */}
      {/* {<button onClick={this.props.history.goBack}>Back</button>} */}
      {goals && <GoalsBlock project={project} gridArea="goals" />}
      {scopes && <ScopesBlock project={project} gridArea="scopes" />}
      {technology && <TechnologyBlock project={project} gridArea="techno" />}
      {tags && <TagsBlock project={project} gridArea="tags" />}
      {!verified && <VerifyProjectBlock id={id} gridArea="verify" />}
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
  readProjects: () => dispatch(projectsReadRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project);
