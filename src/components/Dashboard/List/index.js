import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroller";
import Event from "./Event";

export default class List extends Component {
  render() {
    const { events, getMoreEvents, loading, moreEvents } = this.props;
    return (
      <div>
        {events &&
          events.length !== 0 && (
            <InfiniteScroll
              pageStart={0}
              loadMore={getMoreEvents}
              hasMore={!loading && moreEvents}
              initialLoad={false}
            >
              {events &&
                events.map(event => <Event key={event.id} event={event} />)}
            </InfiniteScroll>
          )}
      </div>
    );
  }
}
