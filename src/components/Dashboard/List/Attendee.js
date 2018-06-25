import React, { Component } from "react";
import { List, Image } from "semantic-ui-react";

export default class Attendee extends Component {
  render() {
    return (
      <List.Item>
        <Image
          as="a"
          size="mini"
          circular
          src="https://randomuser.me/portraits/women/42.jpg"
        />
      </List.Item>
    );
  }
}
