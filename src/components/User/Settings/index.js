import React from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import { Switch, Route, Redirect } from "react-router-dom";
import Nav from "./Nav";
import Basic from "./Basic";
import Photos from "./Photos";
import Account from "./Account";
import About from "./About";
import { updatePassword } from "../../Auth/actions";

const actions = { updatePassword };

const mapState = state => ({
  providerId: state.firebase.auth.providerData[0].providerId
});

const Dashboard = ({ updatePassword, providerId }) => {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from="/settings" to="/settings/basics" />
          <Route path="/settings/basics" component={Basic} />
          <Route path="/settings/about" component={About} />
          <Route path="/settings/photos" component={Photos} />
          <Route
            path="/settings/account"
            render={() => (
              <Account
                updatePassword={updatePassword}
                providerId={providerId}
              />
            )}
          />
        </Switch>
      </Grid.Column>
      <Grid.Column width={4}>
        <Nav />
      </Grid.Column>
    </Grid>
  );
};

export default connect(
  mapState,
  actions
)(Dashboard);
