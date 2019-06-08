import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import {
  teamReadRequest,
  usersReadRequest,
  projectsReadRequest
} from "../../../actions";
import LinkButton from "../../../components/LinkButton";
import StatusTeamBlock from "../../../components/Team/StatusTeamBlock";
import { DeleteTeamBlock } from "../../../components";
import styled from "styled-components";
import { Spinner } from "../../../components";
import { Person } from "@material-ui/icons";

import { css, keyframes } from "emotion";

export const StyledSpinner = styled(Spinner)`
  margin-left: auto;
  margin-right: auto;
  margin-top: calc(50vh - 50px);
`;

const MainContainer = styled.div`
  padding: 100px;
  display: grid;
  grid-gap: 15px;
  grid-template: "btn btn" 20px "main main" 150px "members members" "status delete"/ 1fr 1fr;
`;

const show = keyframes`
  from {
    transform: translateY(30px) scale(0.8);
    opacity: 0.4;
  }
`;

export const Container = styled.div`
  grid-area: ${({ gridArea }) => gridArea};
  height: 120px;
  display: grid;
  grid-template: "table";
  border-radius: 8px;
  box-shadow: 0px 0px 150px rgba(0, 0, 0, 0.25);
  transition: all 0.1s ease-in-out;
  background-color: white;
  animation: ${show} 0.3s;

  > div.Panel {
    width: 150px;
    height: 100%;
    background: var(--gradientLeft1);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    text-align: center;
    font-size: 24px;
    color: white;
  }

  > div.MembersContainer {
    height: 100%;
    display: flex;
    justify-content: space-around;

    > div.Member {
      align-items: center;
      display: grid;
      grid-template: "icon" 80px "name" 20px;

      > div.Data {
        text-align: center;
      }
    }
  }
`;
const Picture = styled.img`
  width: 60px;
  border-radius: 50px;
  border: solid 4px ${({ theme_color }) => theme_color};
  margin: 20px;
  margin-top: 25px;
`;

const iconStyle = {
  width: "40px",
  height: "40px",
  fontWeight: "100",
  justifySelf: "center"
};

const Team = props => {
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    props.readTeams();
  }, [update]);

  const { team, members, leader, project } = props;
  if (!team || Object.keys(team).length === 0) {
    return <StyledSpinner />;
  }
  const { id, theme_color } = team;
  return (
    <MainContainer>
      <LinkButton
        to="/dashboard/teams"
        className={css`
          background-color: white !important;
          color: #00336e;
          grid-area: btn;
        `}
      />
      <div
        className={css`
          background-color: white;
          grid-area: main;
          border-radius: 8px;
          box-shadow: 0px 0px 150px rgba(0, 0, 0, 0.25);
          transition: all 0.1s ease-in-out;
          animation: ${show} 0.3s;

          > div {
            font-size: 24px;
            margin-top: 20px;
            margin-left: 20px;
          }
        `}
      >
        <div>
          <span>{leader.name}'s</span> Team
        </div>
        <div>
          <span
            className={css`
              font-family: Arial, Helvetica, sans-serif;
              color: hsl(0, 0%, 60%);
              font-size: 20px;
            `}
          >
            Project:{" "}
            {project ? (
              <span
                className={css`
                  color: rgb(0, 51, 110);
                `}
              >
                {project.name}
              </span>
            ) : (
              <span
                className={css`
                  color: hsl(0, 0%, 70%);
                `}
              >
                no choosen
              </span>
            )}
          </span>
        </div>
      </div>
      {members && members.length > 0 && (
        <Container gridArea={"members"}>
          <div className="MembersContainer">
            {members &&
              members.map((element, index) => {
                const { name, surname, id } = element;
                return (
                  <div className="Member">
                    {element.github_picture ? (
                      <Picture
                        src={element.github_picture}
                        theme_color={
                          id === leader.id ? "#0053b3" : "hsl(0, 0%, 80%)"
                        }
                      />
                    ) : (
                      <Person style={iconStyle} />
                    )}
                    <div className="Data">
                      {element.name} {name.length > 15 && <br />}
                      {element.surname}
                    </div>
                  </div>
                );
              })}
          </div>
        </Container>
      )}
      <StatusTeamBlock id={id} gridArea="status" />
      <div
        className={css`
          width: 100%;
          grid-area: delete;
        `}
      >
        <DeleteTeamBlock id={id} />
      </div>
    </MainContainer>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const teams = state.teams.items;
  const team = teams.length !== 0 ? teams.find(e => e.id == id) : [];
  const users = state.users.items;
  const members = users.filter(user => user.team_id === team.id);
  const leader = members.find(user => user.id === team.leader_id) || {};
  const project =
    state.projects.items.find(project => project.team_id === team.id) || null;
  return {
    team,
    members,
    leader,
    project
  };
};

const mapDispatchToProps = dispatch => ({
  readProjects: () => dispatch(projectsReadRequest()),
  readTeams: () => dispatch(teamReadRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Team);
