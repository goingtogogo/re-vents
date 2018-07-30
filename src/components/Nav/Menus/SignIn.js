import React from "react";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function({ signOut, profile, auth }) {
  return (
    <Menu.Item position="right">
      <Image
        avatar
        spaced="right"
        src={profile.photoURL || "/assets/user.png"}
      />
      <Dropdown pointing="top left" text={profile.displayName}>
        <Dropdown.Menu>
          <Dropdown.Item text="Create Event" icon="plus" />
          <Dropdown.Item text="My Events" icon="calendar" />
          <Dropdown.Item text="My Network" icon="users" />
          <Dropdown.Item
            as={Link}
            to={`/profile/${auth.uid}`}
            text="My Profile"
            icon="user"
          />
          <Dropdown.Item
            text="Settings"
            as={Link}
            to="/settings"
            icon="settings"
          />
          <Dropdown.Item text="Sign Out" icon="power" onClick={signOut} />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}
