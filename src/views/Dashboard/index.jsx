import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import {
  News,
  Projects,
  Profile,
  Header,
  Settings,
  Project
} from "../../components";

import { Container } from "./style";

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Header />
        <div />
        <Switch>
          <Route path="/dashboard/news" component={News} />
          <Route path="/dashboard/projects/:id" component={Project} />
          <Route exact path="/dashboard/projects" component={Projects} />
          <Route path="/dashboard/profile" component={Profile} />
          <Route path="/dashboard/settings" component={Settings} />
        </Switch>
      </Container>
    );
  }
}

export default withRouter(Dashboard);
