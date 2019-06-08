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

import { MainContainer, StyledSpinner } from "./style";

import LinkButton from "../../../components/LinkButton";

const Project = props => {
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    props.readProjects();
  }, [update]);

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
      <LinkButton to="/dashboard/projects" bcg={theme_color} />
      <ProjectMainBlock
        project={project}
        gridArea="main"
        update={update}
        setUpdate={setUpdate}
      />
      {members && members.length > 0 && (
        <MembersProjectBlock
          members={members}
          theme_color={theme_color}
          gridArea="members"
        />
      )}
      <GoalsBlock
        project={project}
        gridArea="goals"
        update={update}
        setUpdate={setUpdate}
      />
      <ScopesBlock
        project={project}
        gridArea="scopes"
        update={update}
        setUpdate={setUpdate}
      />
      <TechnologyBlock
        project={project}
        gridArea="techno"
        update={update}
        setUpdate={setUpdate}
      />
      <TagsBlock
        project={project}
        gridArea="tags"
        update={update}
        setUpdate={setUpdate}
      />
      {!verified && <VerifyProjectBlock id={id} gridArea="verify" />}
      <DeleteProjectBlock id={id} gridArea="delete" />
    </MainContainer>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const currentProject = getProjectById(state, id);
  const teamId = currentProject.team_id;
  const users = state.users;
  const members = teamId
    ? users.items.filter(user => user.team_id === teamId)
    : [];
  return {
    project: currentProject,
    members
  };
};

const mapDispatchToProps = dispatch => ({
  readProjects: () => dispatch(projectsReadRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project);
