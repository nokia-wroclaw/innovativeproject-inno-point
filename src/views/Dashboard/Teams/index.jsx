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

import { TeamCard, TeamForm } from "../../../components";

import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { List, GridOn } from "@material-ui/icons";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import { readTeams } from "../../../api/teams";
import { readUsers } from "../../../api/users";
import { readProjects } from "../../../api/projects";

const Teams = () => {
  const [typeOfList, setTypeOfList] = useState("block");
  const [formDisplaying, setFormDisplaying] = useState(false);
  const [teams, setTeams] = useState([]);
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);

  const [update, setUpdate] = useState(false);

  function handleChange(event, newValue) {
    setTypeOfList(newValue);
  }

  useEffect(() => {
    readTeams().then(response => setTeams(response.data));
    readUsers().then(response => setUsers(response.data));
    readProjects().then(response => setProjects(response.data));
  }, [update]);

  return (
    <div>
      <TopBar>
        <div className="Searchbar">
          <InputBase placeholder="Search…" style={{ width: "100%" }} />
          <SearchIcon />
        </div>
      </TopBar>
      <MainContainer>
        <Container typeOfList={typeOfList}>
          {teams &&
            teams.map((team, index) => {
              const teamUsers = users.filter(user => user.team_id === team.id);
              const teamProject = projects.find(
                project => project.id === team.project_id
              );
              return (
                <TeamCard
                  team={team}
                  users={teamUsers}
                  project={teamProject}
                  index={index}
                />
              );
            })}
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
        title={formDisplaying ? "" : "Add team"}
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
          <TeamForm
            close={setFormDisplaying}
            setUpdate={setUpdate}
            update={update}
          />
        </FormContainer>
      )}
    </div>
  );
};

export default Teams;
