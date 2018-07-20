import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import EventDashboard from "./Dashboard";
import Nav from "./Nav";
import EventDetails from "./Dashboard/Details/index";
import PeopleDashboard from "./User/Dashboard";
import UserDetails from "./User/Details";
import Settings from "./User/Settings";
import EventForm from "./Dashboard/Form";
import Home from "./Home";
import Manager from "./Modals/Manager";

class App extends Component {
  render() {
    return (
      <div>
        <Manager />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Route
          path="/(.+)"
          render={() => (
            <div>
              <Nav />
              <Container className="main">
                <Switch>
                  <Route path="/events" component={EventDashboard} />
                  <Route path="/event/:id" component={EventDetails} />
                  <Route path="/manage/:id" component={EventForm} />
                  <Route path="/people" component={PeopleDashboard} />
                  <Route path="/profile/:id" component={UserDetails} />
                  <Route path="/settings" component={Settings} />
                  <Route path="/createEvent" component={EventForm} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
