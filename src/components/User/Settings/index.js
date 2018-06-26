import React from "react";
import { Grid } from "semantic-ui-react";
import { Switch, Route, Redirect } from "react-router-dom";
import Nav from "./Nav";
import Basic from "./Basic";
import Photos from "./Photos";
import Account from "./Account";
import About from "./About";

export default function() {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from="/settings" to="/settings/basics" />
          <Route path="/settings/basics" component={Basic} />
          <Route path="/settings/about" component={About} />
          <Route path="/settings/photos" component={Photos} />
          <Route path="/settings/account" component={Account} />
        </Switch>
      </Grid.Column>
      <Grid.Column width={4}>
        <Nav />
      </Grid.Column>
    </Grid>
  );
}
