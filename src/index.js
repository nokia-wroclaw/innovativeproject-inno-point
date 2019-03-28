import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "redux-starter-kit";

import { Welcome, Dashboard } from "./views";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
  middleware: []
});

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route exact path="/" component={Welcome} />
          <Route path="/dashboard" component={Dashboard} />
        </Fragment>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
