import React from "react";
import Auth from "./Auth/Auth";
import Home from "./Home";
import { Switch, Route, Router } from "react-router-dom";

import { history } from "./helper/History";
import { authenticationService } from "./service/AuthService";
import { PrivateRoute } from "./components/PrivateRoute";
import Users from "./Users/Users";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x =>
      this.setState({ currentUser: x })
    );
  }

  logout() {
    authenticationService.logout();
    history.push("/login");
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/users" component={Users} />
          <Route path="/login" component={Auth} />
        </Switch>
      </Router>
    );
  }
}

export default App;
