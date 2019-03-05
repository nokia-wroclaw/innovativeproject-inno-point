import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import "./index.css";
import * as serviceWorker from "./serviceWorker";

import Welcome from "./views/Welcome";
import Dashboard from "./views/Dashboard";
import CollectTopic from "./views/Topics/CollectTopic";

const fakeAuth = {
  isAuthenticated: false
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={() =>
      fakeAuth.isAuthenticated ? <Component {...rest} /> : <Redirect to="/" />
    }
  />
);

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route
            exact
            path="/"
            component={() => <Welcome fakeAuth={fakeAuth} />}
          />
          <Route path="/topic" component={CollectTopic} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Fragment>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
