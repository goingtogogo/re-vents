import React, { Component } from "react";
import Event from "./Event";

export default class List extends Component {
  render() {
    const { events, deleteEvent } = this.props;
    return (
      <div>
        {events.map(event => (
          <Event key={event.id} event={event} deleteEvent={deleteEvent} />
        ))}
      </div>
    );
  }
}
