import React from "react";
import { Route, Switch } from "react-router";
import Home from "../../routes/Records/Home";
import JsVideo from "../../routes/Records/JsVideo";
import Javascript from "../../routes/Records/Javascript";
import Typescript from "../../routes/Records/Typescript";

import "./Routes.css";

const Routes: React.FC = (props) => {
  return (
    <>
      <Switch>
        <Route exact path="/record">
          <Home></Home>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/record/typescript">
          <Typescript></Typescript>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/record/javascript">
          <Javascript></Javascript>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/record/jsVideo">
          <JsVideo></JsVideo>
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
