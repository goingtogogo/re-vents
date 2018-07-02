import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import cuid from "cuid";
import List from "./List/index";
import Form from "./Form";
import { createEvent, deleteEvent, updateEvent } from "./actions";

const mapStateToProps = state => ({
  events: state.events
});

const actions = {
  createEvent,
  updateEvent,
  deleteEvent
};

class EventDashboard extends Component {
  state = {
    isOpen: false,
    selectedEvent: null
  };

  handleFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedEvent: null
    });
  };

  handleCancelForm = () => {
    this.setState({ isOpen: false });
  };

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    this.props.createEvent(newEvent);
    this.setState({
      isOpen: false
    });
  };

  handleUpdateEvent = updatedEvent => {
    this.props.updateEvent(updatedEvent);
    this.setState({
      isOpen: false,
      selectedEvent: null
    });
  };

  handleOpenEvent = eventToOpen => () => {
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true
    });
  };

  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
  };

  render() {
    const { isOpen, selectedEvent } = this.state;
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <List
            onEventOpen={this.handleOpenEvent}
            events={events}
            deleteEvent={this.handleDeleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            color="grey"
            onClick={this.handleFormOpen}
            content="Create Event"
          />
          {isOpen && (
            <Form
              updateEvent={this.handleUpdateEvent}
              handleCancelForm={this.handleCancelForm}
              createEvent={this.handleCreateEvent}
              selectedEvent={selectedEvent}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(EventDashboard);
