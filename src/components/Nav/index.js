import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, Link, withRouter } from "react-router-dom";
import { Menu, Container, Button } from "semantic-ui-react";
import SignOut from "./Menus/SignOut";
import SignIn from "./Menus/SignIn";
import { openModal } from "../Modals/actions";
import { logout } from "../Auth/actions";

const actions = { openModal, logout };

const mapState = state => ({
  auth: state.auth
});

class Nav extends Component {
  handleSignIn = () => {
    this.props.openModal("LoginModal");
  };

  handleRegister = () => {
    this.props.openModal("RegisterModal");
  };

  handleSignOut = () => {
    this.props.logout();
    this.props.history.push("/");
  };

  render() {
    const { auth } = this.props;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header as={Link} to="/">
            <img src="assets/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          {auth.authentificated && (
            <Menu.Item as={NavLink} to="/people" name="People" />
          )}
          <Menu.Item>
            {auth.authentificated && (
              <Button
                floated="right"
                as={Link}
                to="/createEvent"
                inverted
                content="Create Event"
              />
            )}
          </Menu.Item>
          {auth.authentificated ? (
            <SignIn
              signOut={this.handleSignOut}
              currentUser={auth.currentUser}
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
  connect(
    mapState,
    actions
  )(Nav)
);
