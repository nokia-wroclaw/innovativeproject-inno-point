import React, { useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import {
  projectsReadRequest,
  teamsReadRequest,
  usersReadRequest,
  userReadRequest
} from "../../actions";

import { Header } from "../../components";

import Project from "./Project";
import Projects from "./Projects";
import Teams from "./Teams";
import News from "./News";
import Profile from "./Profile";
import Settings from "./Settings";
import Manager from "./Manager";

import { Container } from "./style";

const Dashboard = props => {
  const search = props.location.search;
  const id = search.substr(search.indexOf("id") + 3, search.length);

  useEffect(() => {
    props.readProjects();
    props.readTeams();
    props.readUsers();
    if (id) {
      props.readUser(id);
    }
  }, []);

  return (
    <Container>
      <Header />
      <div />
      <Switch>
        <Route path="/dashboard/manager" component={Manager} />
        <Route path="/dashboard/news" component={News} />
        <Route exact path="/dashboard/projects" component={Projects} />
        <Route exact path="/dashboard/projects/:id" component={Project} />
        <Route exact path="/dashboard/teams" component={Teams} />
        {/* <Route exact path="/dashboard/teams/:id" component={Team} /> */}
        <Route path="/dashboard/profile" component={Profile} />
        <Route path="/dashboard/settings" component={Settings} />
      </Switch>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  readProjects: () => dispatch(projectsReadRequest()),
  readTeams: () => dispatch(teamsReadRequest()),
  readUsers: () => dispatch(usersReadRequest()),
  readUser: id => dispatch(userReadRequest({ id }))
});

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Dashboard));
