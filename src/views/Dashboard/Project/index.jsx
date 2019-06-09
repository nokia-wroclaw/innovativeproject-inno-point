import React, { useState, useEffect, Fragment } from "react";
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
  ApplyProjectBlock,
  Button
} from "../../../components";

import { MainContainer, StyledSpinner } from "./style";

import LinkButton from "../../../components/LinkButton";

const Project = props => {
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    props.readProjects();
  }, [update]);

  const makeUpdate = () => setUpdate(!update);

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
      <div />
      <ProjectMainBlock
        project={project}
        gridArea="main"
        update={update}
        setUpdate={setUpdate}
      />
      {members && members.length > 0 ? (
        <MembersProjectBlock
          members={members}
          theme_color={theme_color}
          gridArea="members"
        />
      ) : (
        <Fragment>
          <div /> <div />
        </Fragment>
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
      {!verified && <VerifyProjectBlock id={id} />}
      {verified && <ApplyProjectBlock id={id} makeUpdate={makeUpdate} />}
      <DeleteProjectBlock id={id} />
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
