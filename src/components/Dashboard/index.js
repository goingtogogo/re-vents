import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import List from "./List/index";
import { getEventsForDashboard } from "./actions";
import Loader from "../Loader";
import Activity from "./Activity";

const mapStateToProps = state => ({
  events: state.events,
  loading: state.async.loading
});

const actions = {
  getEventsForDashboard
};

class EventDashboard extends Component {
  state = {
    moreEvents: false,
    loadingInitial: true,
    loadedEvents: []
  };
  async componentDidMount() {
    let next = await this.props.getEventsForDashboard();
    if (next && next.docs && next.docs.length > 1) {
      this.setState({ moreEvents: true, loadingInitial: false });
    }
  }

  getNextEvents = async () => {
    const { events } = this.props;
    let lastEvent = events && events[events.length - 1];
    let next = await this.props.getEventsForDashboard(lastEvent);
    if (next && next.docs && next.docs.length <= 1) {
      this.setState({ moreEvents: false });
    }
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.events !== nextProps.events) {
      this.setState({
        loadedEvents: [...this.state.loadedEvents, ...nextProps.events]
      });
    }
  }

  render() {
    const { loading } = this.props;
    const { moreEvents, loadedEvents } = this.state;
    if (this.state.loadingInitial) return <Loader inverted={true} />;
    return (
      <Grid>
        <Grid.Column width={10}>
          <List
            events={loadedEvents}
            loading={loading}
            moreEvents={moreEvents}
            getMoreEvents={this.getNextEvents}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Activity />
        </Grid.Column>
        <Grid.Column width={10}>
          <Loader active={loading} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(firestoreConnect([{ collection: "events" }])(EventDashboard));
