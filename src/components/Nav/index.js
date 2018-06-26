import React, { Component } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { Menu, Container, Button } from "semantic-ui-react";
import SignOut from "./Menus/SignOut";
import SignIn from "./Menus/SignIn";

class Nav extends Component {
  state = {
    authentificated: false
  };

  handleSignIn = () => {
    this.setState({
      authentificated: true
    });
  };

  handleSignOut = () => {
    this.setState({
      authentificated: false
    });
    this.props.history.push("/");
  };

  render() {
    const { authentificated } = this.state;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header as={Link} to="/">
            <img src="assets/logo.png" alt="logo" />
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
            <SignIn signOut={this.handleSignOut} />
          ) : (
            <SignOut signIn={this.handleSignIn} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(Nav);
