import React, { Component } from "react";
import { Segment, Icon, List, Button, Item } from "semantic-ui-react";
import Attendee from "./Attendee";

export default class Event extends Component {
  render() {
    const { event } = this.props;
    return (
      <div>
        <Segment.Group>
          <Segment>
            <Item.Group>
              <Item>
                <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                <Item.Content>
                  <Item.Header as="a">{event.title}</Item.Header>
                  <Item.Description>
                    Hosted by <a>{event.hostedBy}</a>
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
          <Segment>
            <span>
              <Icon name="clock" /> {event.date} |
              <Icon name="marker" /> {event.venue}
            </span>
          </Segment>
          <Segment secondary>
            <List horizontal>
              {event.attendees &&
                event.attendees.map(attendee => (
                  <Attendee attendee={attendee} key={attendee.id} />
                ))}
            </List>
          </Segment>
          <Segment clearing>
            <span>{event.description}</span>
            <Button as="a" color="teal" floated="right" content="View" />
          </Segment>
        </Segment.Group>
      </div>
    );
  }
}
