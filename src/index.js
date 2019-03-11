import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { Welcome, Dashboard } from "./views";

import "./index.css";
import * as serviceWorker from "./serviceWorker";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/" component={Welcome} />
          <Route path="/dashboard" component={Dashboard} />
        </Fragment>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
