import React, { Component } from "react";
import { Segment, List, Item, Label } from "semantic-ui-react";

export default class Sidebar extends Component {
  render() {
    const isHost = false;
    const { attendees } = this.props;
    return (
      <div>
        <Segment
          textAlign="center"
          style={{ border: "none" }}
          attached="top"
          secondary
          inverted
          color="teal"
        >
          {attendees && attendees.length}{" "}
          {attendees && attendees.lenth === 1 ? "Person" : "People"} going
        </Segment>
        <Segment attached>
          <List relaxed divided>
            {attendees &&
              attendees.map(attendee => (
                <Item style={{ position: "relative" }} key={attendee.id}>
                  {isHost && (
                    <Label
                      style={{ position: "absolute" }}
                      color="orange"
                      ribbon="right"
                    >
                      Host
                    </Label>
                  )}
                  <Item.Image size="tiny" src={attendee.photoURL} />
                  <Item.Content verticalAlign="middle">
                    <Item.Header as="h3">
                      <a>{attendee.name}</a>
                    </Item.Header>
                  </Item.Content>
                </Item>
              ))}
          </List>
        </Segment>
      </div>
    );
  }
}
