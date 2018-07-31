import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, Link, withRouter } from "react-router-dom";
import { Menu, Container, Button } from "semantic-ui-react";
import { withFirebase } from "react-redux-firebase";
import SignOut from "./Menus/SignOut";
import SignIn from "./Menus/SignIn";
import { openModal } from "../Modals/actions";

const actions = { openModal };

const mapState = state => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
});

class Nav extends Component {
  handleSignIn = () => {
    this.props.openModal("LoginModal");
  };

  handleRegister = () => {
    this.props.openModal("RegisterModal");
  };

  handleSignOut = () => {
    this.props.firebase.logout();
    this.props.history.push("/");
  };

  render() {
    const { auth, profile } = this.props;
    const authentificated = auth.isLoaded && !auth.isEmpty;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header as={Link} to="/">
            <img src="/assets/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          {authentificated && (
            <Menu.Item as={NavLink} to="/people" name="People" />
          )}
          <Menu.Item>
            {authentificated && (
              <Button
                floated="right"
                as={Link}
                to="/createEvent"
                inverted
                content="Create Event"
              />
            )}
          </Menu.Item>
          {authentificated ? (
            <SignIn
              signOut={this.handleSignOut}
              profile={profile}
              auth={auth}
            />
          ) : (
            <SignOut
              signIn={this.handleSignIn}
              register={this.handleRegister}
            />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(
  withFirebase(
    connect(
      mapState,
      actions
    )(Nav)
  )
);
