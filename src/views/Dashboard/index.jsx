import React, { Component } from "react";
import { Route } from "react-router-dom";

import {
  News,
  Projects,
  Profile,
  Header,
  Settings,
  Project
} from "../../components";

import { Container, StyledSwitch } from "./style";

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Header />
        <StyledSwitch>
          <Route path="/dashboard/news" component={News} />
          <Route exact path="/dashboard/projects" component={Projects} />
          <Route path="/dashboard/projects/:id" component={Project} />
          <Route path="/dashboard/profile" component={Profile} />
          <Route path="/dashboard/settings" component={Settings} />
        </StyledSwitch>
      </Container>
    );
  }
}

export default Dashboard;
