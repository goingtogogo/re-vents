import React from "react";
import { Button, Grid, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

const UserDetailedSidebar = ({ isCurrentUser }) => {
  return (
    <Grid.Column width={4}>
      <Segment>
        {isCurrentUser ? (
          <Button
            as={Link}
            basic
            color="teal"
            content="Edit Profile"
            fluid
            to="/settings/basics"
          />
        ) : (
          <Button basic color="teal" content="Follow user" fluid />
        )}
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedSidebar;
