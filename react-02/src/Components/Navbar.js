import React from "react";
import logo from "../Icons/logo.svg";
import aperture from "../Icons/tic-tac-toe-svgrepo-com.svg";
import accounts from "../Icons/piggy-bank-svgrepo-com.svg";
import cities from "../Icons/building-svgrepo-com.svg";
import linklist from "../Icons/link-building-svgrepo-com.svg";

import bluetooth from "../Icons/bluetooth.svg";
import coffee from "../Icons/coffee.svg";

import Home from "./Home.js";
import Game from "./TicTac/Game.js";
import Cities from "./Cities/Cities.js";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selApp: "idCities" //home
    };

    // NOT REQD as they are defined as arrow Functons.. Just FYI
    // this.selectApp = this.selectApp.bind(this);
    // this.showApp = this.showApp.bind(this);
  }

  selectApp = event => {
    console.log("selectApp: ", event.target);
    // setApp.target.id.active();
    this.setState({
      selApp: event.target.id
    });
  };

  showApp = () => {
    if (this.state.selApp === "idLogo") {
      console.log("Execution chk Home:", this.state.selApp);
      return <Home />;
    }
    if (this.state.selApp === "idTic") {
      console.log("Execution chk Game:", this.state.selApp);
      return <Game />;
    }
    if (this.state.selApp === "idCities") {
      console.log("Execution chk Cities", this.state.selApp);
      return <Cities />;
    }
  };

  render() {
    console.log("App state: ", this.showApp());

    return (
      <div className="App">
        <div
          className="Icon"
          id="IconDiv"
          onClick={e => {
            this.selectApp(e);
          }}
        >
          <img
            src={logo}
            id="idLogo"
            alt="logo"
            className={
              this.state.selApp === "idLogo" ? "App-logo-selected " : "App-logo"
            }
          />
          <img
            src={aperture}
            id="idTic"
            alt="logo"
            className={
              this.state.selApp === "idTic" ? "App-logo-selected " : "App-logo"
            }
          />
          <img
            src={accounts}
            id="idaccounts"
            alt="logo"
            className={
              this.state.selApp === "idAccounts"
                ? "App-logo-selected "
                : "App-logo"
            }
          />
          <img
            src={cities}
            id="idCities"
            alt="logo"
            className={
              this.state.selApp === "idCities"
                ? "App-logo-selected "
                : "App-logo"
            }
          />
          <img
            src={linklist}
            id="idcoffee"
            alt="logo"
            className={
              this.state.selApp === "idLinkedList"
                ? "App-logo-selected "
                : "App-logo"
            }
          />
        </div>
        {/* Show the App corresponding to the Icon */}
        {this.showApp()}
      </div>
    );
  }
}

export default Navbar;
