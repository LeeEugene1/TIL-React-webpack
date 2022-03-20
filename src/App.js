import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import importedComponent from "react-imported-component";
import About from "./pages/About";
import Home from "./components/Home";
import Loading from "./components/Loading";
import Profile from "./pages/Profile";
import UserStore from "./store/user";

const AsyncDynamicPAge = importedComponent(
  () => import(/* webpackChunkName:'DynamicPage' */ "./components/DynamicPage"),
  {
    LoadingComponent: Loading,
  }
);
const AsyncNoMatch = importedComponent(
  () => import(/* webpackChunkName:'NoMatch' */ "./components/NoMatch"),
  {
    LoadingComponent: Loading,
  }
);

const App = () => {
  return (
    <UserStore>
      <Router>
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
      </Router>
    </UserStore>
  );
};

export default App;
