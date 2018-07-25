import React, { Component } from "react";
import { Segment, Icon, List, Button, Item } from "semantic-ui-react";
import { Link } from "react-router-dom";
import format from "date-fns/format";
import Attendee from "./Attendee";

export default class Event extends Component {
  render() {
    const { event, deleteEvent } = this.props;
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
              <Icon name="clock" />{" "}
              {format(event.date.toDate(), "dddd Do MMMM")} at{" "}
              {format(event.date.toDate(), "HH:mm")} |
              <Icon name="marker" /> {event.venue}
            </span>
          </Segment>
          <Segment secondary>
            <List horizontal>
              {event.attendees &&
                Object.values(event.attendees).map((attendee, index) => (
                  <Attendee attendee={attendee} key={index} />
                ))}
            </List>
          </Segment>
          <Segment clearing>
            <span>{event.description}</span>
            <Button
              color="teal"
              floated="right"
              as={Link}
              to={`/event/${event.id}`}
              content="View"
            />
            <Button
              onClick={deleteEvent(event.id)}
              as="a"
              color="red"
              floated="right"
              content="Delete"
            />
          </Segment>
        </Segment.Group>
      </div>
    );
  }
}
