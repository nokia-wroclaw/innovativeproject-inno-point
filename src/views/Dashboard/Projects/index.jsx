import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { projectCreateRequest } from "../../../actions";

import {
  Container,
  MainContainer,
  TopBar,
  StyledTooltip,
  StyledBottomNavigation,
  StyledSpinner
} from "./style";

import { fabAddStyle, iconAddStyle } from "./style";

import { ProjectCard, TopicForm } from "../../../components";

import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { List, GridOn } from "@material-ui/icons";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";

import { readProjects } from "../../../api/projects";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const Projects = props => {
  const [typeOfList, setTypeOfList] = useState("block");
  const [projects, setProjects] = useState([]);
  const [update, setUpdate] = useState(false);
  const [open, setOpen] = useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleChange(event, newValue) {
    setTypeOfList(newValue);
  }

  useEffect(() => {
    readProjects().then(response => setProjects(response.data));
  }, [update]);

  if (!projects || projects.length === 0) {
    return <StyledSpinner />;
  }

  return (
    <div>
      <TopBar>
        <div className="Searchbar">
          <InputBase placeholder="Search…" style={{ width: "100%" }} />
          <SearchIcon
            onClick={() => {
              props.createProject();
            }}
          />
        </div>
      </TopBar>
      <MainContainer>
        <Container typeOfList={typeOfList}>
          {projects &&
            projects.map((project, index) => (
              <ProjectCard project={project} index={index} />
            ))}
        </Container>
      </MainContainer>
      <StyledBottomNavigation value={typeOfList} onChange={handleChange}>
        <BottomNavigationAction label="Block" value="block" icon={<GridOn />} />
        <BottomNavigationAction label="List" value="list" icon={<List />} />
      </StyledBottomNavigation>
      <StyledTooltip
        title={"Add project"}
        aria-label="Add"
        onClick={() => {
          handleClickOpen();
        }}
      >
        <Link to="#">
          <Fab style={fabAddStyle}>
            <AddIcon style={iconAddStyle} />
          </Fab>
        </Link>
      </StyledTooltip>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        maxWidth={false}
        onClose={handleClose}
      >
        <TopicForm
          setUpdate={setUpdate}
          update={update}
          handleClose={handleClose}
        />
      </Dialog>
    </div>
  );
};

const mapState = state => ({
  projects: state.projects
});

const mapDispatch = dispatch => ({
  createProject: () =>
    dispatch(projectCreateRequest("dominik jest super programista :)"))
});

export default connect(
  mapState,
  mapDispatch
)(Projects);
