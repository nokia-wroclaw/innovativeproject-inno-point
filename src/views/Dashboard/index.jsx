import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Container, Header } from "./style";

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Router>
          <Fragment>
            <Header>
              <div className="Title">Inno Point</div>
              <Link to="/news">
                <div>News</div>
              </Link>
              <Link to="/projects">
                <div>Projects</div>
              </Link>
            </Header>
            <Route path="/news" component={News} />
            <Route path="/projects" component={Projects} />
          </Fragment>
        </Router>
      </Container>
    );
  }
}

export default Dashboard;
