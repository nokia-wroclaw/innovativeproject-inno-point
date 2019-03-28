import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import { Header } from "../../components";

import Project from "./Project";
import Projects from "./Projects";
import Teams from "./Teams";
import News from "./News";
import Profile from "./Profile";
import Settings from "./Settings";
import Manager from "./Manager";

import { Container } from "./style";

class Dashboard extends Component {
  render() {
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
  }
}

export default withRouter(Dashboard);
