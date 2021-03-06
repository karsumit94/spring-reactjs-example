import React from "react";
import MainHeader from "./components/MainHeader";
import MainContent from "./components/MainContent";
import MainNav from "./components/MainNav";
import { history } from "./helper/History";
import { authenticationService } from "./service/AuthService";

class Home extends React.Component {
  logout() {
    authenticationService.logout();
    history.push("/login");
  }

  render() {
    return (
      <div className="wrapper">
        <MainHeader />
        <div className="main-panel ps ps--active-y">
          <MainNav logout={this.logout} />
          <MainContent />
        </div>
      </div>
    );
  }
}

export default Home;
