import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container, MainContainer, FormContainer, TopBar } from "./style";

import {
  tooltipStyle,
  fabAddStyle,
  fabBackStyle,
  typeOfListStyle,
  iconAddStyle,
  iconBackStyle
} from "./style";

import { ProjectCard, TopicForm } from "../../../components";

import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { List, GridOn } from "@material-ui/icons";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import { readProjects } from "../../../api/projects";

const Projects = () => {
  const [typeOfList, setTypeOfList] = useState("block");
  const [formDisplaying, setFormDisplaying] = useState(false);
  const [projects, setProjects] = useState([]);

  function handleChange(event, newValue) {
    setTypeOfList(newValue);
  }

  useEffect(() => {
    readProjects().then(response => setProjects(response.data));
  });

  const refresh = () => {
    readProjects().then(response => setProjects(response.data));
  };

  return (
    <div>
      {/* <TopBar>
        <div className="Searchbar">
          <InputBase placeholder="Search…" style={{ width: "100%" }} />
          <SearchIcon />
        </div>
      </TopBar> */}
      <MainContainer>
        <Container typeOfList={typeOfList}>
          {projects &&
            projects.map((project, index) => (
              <ProjectCard project={project} index={index} />
            ))}
        </Container>
      </MainContainer>
      <BottomNavigation
        value={typeOfList}
        onChange={handleChange}
        style={typeOfListStyle}
      >
        <BottomNavigationAction label="Block" value="block" icon={<GridOn />} />
        <BottomNavigationAction label="List" value="list" icon={<List />} />
      </BottomNavigation>
      <Tooltip
        title={formDisplaying ? "" : "Add project"}
        aria-label="Add"
        style={tooltipStyle}
        onClick={() => setFormDisplaying(!formDisplaying)}
      >
        <Link to="#">
          <Fab style={formDisplaying ? fabBackStyle : fabAddStyle}>
            <AddIcon style={formDisplaying ? iconBackStyle : iconAddStyle} />
          </Fab>
        </Link>
      </Tooltip>
      {formDisplaying && (
        <FormContainer>
          <TopicForm close={setFormDisplaying} refresh={refresh} />
        </FormContainer>
      )}
    </div>
  );
};

export default Projects;
