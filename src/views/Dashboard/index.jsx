import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import {
  News,
  Projects,
  Profile,
  Header,
  Settings,
  Project,
  Manager
} from "../../components";

import { CollectTopic } from "..";

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
          <Route path="/dashboard/project/add" component={CollectTopic} />
          <Route path="/dashboard/profile" component={Profile} />
          <Route path="/dashboard/settings" component={Settings} />
        </Switch>
      </Container>
    );
  }
}

export default withRouter(Dashboard);
