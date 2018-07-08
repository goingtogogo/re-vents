import React, { Component } from "react";
import cuid from "cuid";
import { reduxForm, Field } from "redux-form";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from "revalidate";
import moment from "moment";
import { createEvent, updateEvent } from "./actions";
import TextInput from "../../common/form/TextInput";
import TextArea from "../../common/form/TextArea";
import SelectInput from "../../common/form/SelectInput";
import DateInput from "../../common/form/DateInput";

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {};

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }
  return {
    initialValues: event
  };
};

const actions = {
  createEvent,
  updateEvent
};

const category = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" }
];

const validate = combineValidators({
  title: isRequired({ message: "The event title is required" }),
  category: isRequired({ message: "Please provide a category" }),
  description: composeValidators(
    isRequired({ message: " Please enter a description" }),
    hasLengthGreaterThan(4)({
      message: "Description need to be at least 5 characters"
    })
  )(),
  city: isRequired("City"),
  venue: isRequired("Venue"),
  date: isRequired("Date")
});

class EventForm extends Component {
  state = {
    event: Object.assign({}, this.props.event)
  };

  onFormSubmit = values => {
    values.date = moment(values.date).format();
    const { createEvent, updateEvent, history, initialValues } = this.props;
    if (initialValues.id) {
      updateEvent(values);
      history.goBack();
    } else {
      const newEvent = {
        ...values,
        id: cuid(),
        hostPhotoURL: "assets/user.png",
        hostedBy: "Bob"
      };
      createEvent(newEvent);
      history.push("/events");
    }
  };

  render() {
    const { invalid, submitting, pristine } = this.props;
    const { history, handleSubmit } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header color="teal" content="Event Details" />
            <Form onSubmit={handleSubmit(this.onFormSubmit)}>
              <Field
                name="title"
                type="text"
                component={TextInput}
                placeholder="Give your event name"
              />
              <Field
                name="category"
                type="text"
                component={SelectInput}
                options={category}
                placeholder="What is your event about?"
              />
              <Field
                name="description"
                type="text"
                rows="3"
                component={TextArea}
                placeholder="Tell us about your event"
              />
              <Header color="teal" content="Event Location Details" />
              <Field
                name="city"
                type="text"
                component={TextInput}
                placeholder="Event City"
              />
              <Field
                name="venue"
                type="text"
                component={TextInput}
                placeholder="Event Venue"
              />
              <Field
                name="date"
                type="text"
                component={DateInput}
                dateFormat="YYYY-MM-DD HH:mm"
                timeFormat="HH:mm"
                showTimeSelect
                placeholder="Date and Time of Event"
              />
              <Button
                color="grey"
                type="submit"
                disabled={invalid || submitting || pristine}
              >
                Submit
              </Button>
              <Button onClick={() => history.goBack()} type="button">
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(
  reduxForm({ form: "eventForm", enableReinitialize: true, validate })(
    EventForm
  )
);
