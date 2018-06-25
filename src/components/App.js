import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "./Dashboard";
import Nav from "./Nav";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Container className="main">
          <EventDashboard />
        </Container>
      </div>
    );
  }
}

export default App;
