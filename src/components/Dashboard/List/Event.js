import React, { Component } from "react";
import { Segment, Icon, List, Button, Item, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import format from "date-fns/format";
import Attendee from "./Attendee";
import { objectToArray } from "../../../common/helper";

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
                  <Item.Header as={Link} to={`event/${event.id}`}>
                    {event.title}
                  </Item.Header>
                  <Item.Description>
                    Hosted by{" "}
                    <Link to={`profile/${event.hostUid}`}>
                      {event.hostedBy}
                    </Link>
                  </Item.Description>
                  {event.cancelled && (
                    <Label
                      style={{ top: "-50px" }}
                      ribbon="right"
                      color="red"
                      content="This event has been cancelled"
                    />
                  )}
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
                objectToArray(event.attendees).map(attendee => (
                  <Attendee attendee={attendee} key={attendee.id} />
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
          </Segment>
        </Segment.Group>
      </div>
    );
  }
}
