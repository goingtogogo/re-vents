import React, { Component } from "react";
import Event from "./Event";

export default class List extends Component {
  render() {
    const { events, onEventOpen, deleteEvent } = this.props;
    return (
      <div>
        <h1>Event List</h1>
        {events.map(event => (
          <Event
            key={event.id}
            event={event}
            onEventOpen={onEventOpen}
            deleteEvent={deleteEvent}
          />
        ))}
      </div>
    );
  }
}
