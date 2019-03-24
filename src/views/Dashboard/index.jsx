import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

<<<<<<< HEAD
import {
  News,
  Projects,
  Profile,
  CreateTeam,
  Header,
  Settings,
  Project
} from "../../components";
=======
import { News, Profile, Header, Settings, Manager } from "../../components";
>>>>>>> b0835a2f5baa220caddace198d87fd0d783f5e3d

import Project from "./Project";
import Projects from "./Projects";

import { Container } from "./style";

import Teams from "../Teams"

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Header />
        <div />
        <Switch>
          <Route path="/dashboard/manager" component={Teams} />
          <Route path="/dashboard/news" component={News} />
          <Route exact path="/dashboard/projects" component={Projects} />
          <Route exact path="/dashboard/projects/:id" component={Project} />
          <Route path="/dashboard/profile" component={Profile} />
          <Route path="/dashboard/settings" component={Settings} />
<<<<<<< HEAD
          <Route path="/dashboard/createteam" component={CreateTeam} />
        </StyledSwitch>
=======
        </Switch>
>>>>>>> b0835a2f5baa220caddace198d87fd0d783f5e3d
      </Container>
    );
  }
}

export default withRouter(Dashboard);
