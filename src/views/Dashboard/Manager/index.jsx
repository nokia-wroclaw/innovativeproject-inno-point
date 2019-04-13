import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getUnverifiedProjects } from "../../../store/selectors";
import { projectsReadRequest } from "../../../actions";

import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import { Container, MainContainer, StyledSpinner, TopBar } from "./style";

import { ProjectCard } from "../../../components";

const Manager = props => {
  const [update, setUpdate] = useState(false);
  const [inputValue, setInputValue] = useState("");
  let { projects } = props;

  useEffect(() => {
    props.readProjects();
  }, [update]);

  //   if (!projects || projects.length === 0) {
  //     return <StyledSpinner />;
  //   }

  if (inputValue) {
    projects = projects.filter(project => project.name.includes(inputValue));
  }

  return (
    <MainContainer>
      <TopBar>
        <div className="Searchbar">
          <InputBase
            placeholder="Search…"
            style={{ width: "100%" }}
            onChange={e => setInputValue(e.target.value)}
          />
          <SearchIcon
            onClick={() => {
              props.createProject();
            }}
          />
        </div>
      </TopBar>
      <Container>
        {Object.keys(projects).length !== 0 &&
          projects.length !== 0 &&
          projects.map((project, index) => (
            <ProjectCard project={project} index={index} />
          ))}
      </Container>
    </MainContainer>
  );
};

const mapStateToProps = state => {
  const unverifiedProjects = getUnverifiedProjects(state);
  return {
    projects: unverifiedProjects
  };
};

const mapDispatchToProps = dispatch => ({
  readProjects: () => dispatch(projectsReadRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Manager);
