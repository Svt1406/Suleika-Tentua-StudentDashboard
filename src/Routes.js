import React from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Home from "./components/MainView/Home/Home";
import Students from "./components/MainView/Student/Student";

const Routes = () => {
  return (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:name" component={Students} />
    </Switch>
  );
};

export default Routes;
