import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  Container,
  MainContainer,
  FormContainer,
  TopBar,
  StyledSpinner
} from "./style";

import {
  tooltipStyle,
  fabAddStyle,
  fabBackStyle,
  typeOfListStyle,
  iconAddStyle,
  iconBackStyle
} from "./style";

import {
  projectsReadRequest,
  teamsReadRequest,
  usersReadRequest
} from "../../../actions";

import { TeamCard, TeamForm } from "../../../components";

import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { List, GridOn } from "@material-ui/icons";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const Teams = props => {
  const [typeOfList, setTypeOfList] = useState("block");
  const [formDisplaying, setFormDisplaying] = useState(false);

  const [update, setUpdate] = useState(false);

  function handleChange(event, newValue) {
    setTypeOfList(newValue);
  }

  useEffect(() => {
    props.readProjects();
    props.readTeams();
    props.readUsers();
  }, [update]);

  const {
    projects: { items: projects },
    teams: { items: teams },
    users: { items: users }
  } = props;

  if (
    !projects ||
    Object.keys(projects).length === 0 ||
    !users ||
    Object.keys(users).length === 0 ||
    !teams ||
    Object.keys(teams).length === 0
  ) {
    return <StyledSpinner />;
  }

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

const mapStateToProps = state => ({
  teams: state.teams,
  projects: state.projects,
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  readTeams: () => dispatch(teamsReadRequest()),
  readProjects: () => dispatch(projectsReadRequest()),
  readUsers: () => dispatch(usersReadRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Teams);
