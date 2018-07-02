import React from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import Chat from "./Chat";
import Info from "./Info";
import Sidebar from "./Sidebar";
import Header from "./Header";

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {};

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }
  return {
    event
  };
};

class EventDetails extends React.Component {
  render() {
    const { event } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <Header event={event} />
          <Info event={event} />
          <Chat />
        </Grid.Column>
        <Grid.Column width={6}>
          <Sidebar attendees={event.attendees} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapStateToProps)(EventDetails);
