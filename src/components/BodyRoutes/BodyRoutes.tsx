import React from "react";
import { Route, Switch } from "react-router";
import About from "../../routes/About";
import Contact from "../../routes/Contact";
import Home from "../../routes/Home";
import Profile from "../../routes/Profile";
import Record from "../../routes/Record";
import Stack from "../../routes/Stack";
import AuthServiceImpl from "../service/firebase/authServcie";
import FirebaseStoreImpl from "../service/firebase/store";

interface Props {
  authService: AuthServiceImpl;
  store: FirebaseStoreImpl;
}

const BodyRoutes: React.FC<Props> = ({ authService, store }) => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home authService={authService} store={store}></Home>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/about">
          <About></About>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/stack">
          <Stack></Stack>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/record">
          <Record></Record>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/contact">
          <Contact></Contact>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/profile">
          <Profile authService={authService} store={store}></Profile>
        </Route>
      </Switch>
    </>
  );
};

export default BodyRoutes;
