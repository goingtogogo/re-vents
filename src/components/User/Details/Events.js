import React from "react";
import {
  Card,
  Grid,
  Header,
  Image,
  Menu,
  Segment,
  Tab
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import format from "date-fns/format";

const panes = [
  { menuItem: "All events", pane: { key: "allEvents" } },
  { menuItem: "Past events", pane: { key: "pastEvents" } },
  { menuItem: "Future events", pane: { key: " futureEvents" } },
  { menuItem: "Hoisting events", pane: { key: "hosted" } }
];

const UserDetailedEvents = ({ events, eventsLoading, changeTab }) => {
  return (
    <Grid.Column width={12}>
      <Segment attached loading={eventsLoading}>
        <Header icon="calendar" content="Events" />
        <Tab
          panes={panes}
          menu={{ secondary: true, pointing: true }}
          onTabChange={(e, data) => changeTab(e, data)}
        />
        <br />
        <Card.Group itemsPerRow={5}>
          {events &&
            events.map(event => (
              <Card key={event.id} as={Link} to={`/event/${event.id}`}>
                <Image src={`/assets/categoryImages/${event.category}.jpg`} />
                <Card.Content>
                  <Card.Header textAlign="center">{event.title}</Card.Header>
                  <Card.Meta textAlign="center">
                    <div>
                      {format(event.date && event.date.toDate(), "DD MMM YYYY")}
                    </div>
                    <div>
                      {format(event.date && event.date.toDate(), "h:mm A")}
                    </div>
                  </Card.Meta>
                </Card.Content>
              </Card>
            ))}
        </Card.Group>
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedEvents;
