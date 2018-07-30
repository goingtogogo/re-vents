import React from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { withFirestore } from "react-redux-firebase";
import { toastr } from "react-redux-toastr";
import Chat from "./Chat";
import Info from "./Info";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { objectToArray } from "../../../common/helper";

const mapStateToProps = state => {
  let event = {};

  if (state.firestore.ordered.events && state.firestore.ordered.events[0]) {
    event = state.firestore.ordered.events[0];
  }
  return {
    event
  };
};

class EventDetails extends React.Component {
  async componentDidMount() {
    const { firestore, match, history } = this.props;
    let event = await firestore.get(`events/${match.params.id}`);
    if (!event.exists) {
      history.push("/events");
      toastr.error("Sorry", "Event not found");
    }
  }

  render() {
    const { event } = this.props;
    const attendees =
      event && event.attendees && objectToArray(event.attendees);
    return (
      <Grid>
        <Grid.Column width={10}>
          <Header event={event} />
          <Info event={event} />
          <Chat />
        </Grid.Column>
        <Grid.Column width={6}>
          <Sidebar attendees={attendees} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default withFirestore(connect(mapStateToProps)(EventDetails));
