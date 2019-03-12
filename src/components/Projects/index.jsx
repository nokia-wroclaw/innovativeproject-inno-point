import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Container, MainContainer } from "./style";
import { tooltipStyle, fabStyle, typeOfListStyle } from "./style";

import ProjectCard from "./ProjectCard";

import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { List, GridOn } from "@material-ui/icons";

import projects from "./projects";

const Projects = () => {
  const [typeOfList, setTypeOfList] = useState("block");

  function handleChange(event, newValue) {
    setTypeOfList(newValue);
  }
  return (
    <div>
      <MainContainer>
        <Container typeOfList={typeOfList}>
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} />
          ))}
        </Container>
        <Tooltip title="Add" aria-label="Add" style={tooltipStyle}>
          <Link to="/dashboard/project/add">
            <Fab color="primary" style={fabStyle}>
              <AddIcon />
            </Fab>
          </Link>
        </Tooltip>
      </MainContainer>
      <BottomNavigation
        value={typeOfList}
        onChange={handleChange}
        style={typeOfListStyle}
      >
        <BottomNavigationAction label="Block" value="block" icon={<GridOn />} />
        <BottomNavigationAction label="List" value="list" icon={<List />} />
      </BottomNavigation>
    </div>
  );
};

export default Projects;
