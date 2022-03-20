import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import importedComponent from "react-imported-component";
import About from "../pages/About";
import Home from "./Home";
import Loading from "./Loading";
import Profile from "../pages/Profile";

const AsyncDynamicPAge = importedComponent(
  () => import(/* webpackChunkName:'DynamicPage' */ "./DynamicPage"),
  {
    LoadingComponent: Loading,
  }
);
const AsyncNoMatch = importedComponent(
  () => import(/* webpackChunkName:'NoMatch' */ "./NoMatch"),
  {
    LoadingComponent: Loading,
  }
);

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about">
            <About />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route exact path="/dynamic" component={AsyncDynamicPAge} />
          <Route component={AsyncNoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
