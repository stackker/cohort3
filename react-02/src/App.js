import React from "react";
import logo from "./logo.svg";
import aperture from "./aperture.svg";
import bluetooth from "./bluetooth.svg";
import coffee from "./coffee.svg";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selApp: "idlogo" //home
    };
    this.selectApp = this.selectApp.bind(this);
  }

  selectApp = event => {
    console.log("selectApp: ", event.target.id);
    // setApp.target.id.active();
    this.setState({
      selApp: event.target.id
    });
  };

  render() {
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
            className={
              this.state.selApp === "idLogo" ? "App-logo-selected " : "App-logo"
            }
            // className="App-logo"
            id="idLogo"
            alt="logo"
          />
          <img
            src={aperture}
            className={
              this.state.selApp === "idAper" ? "App-logo-selected " : "App-logo"
            }
            id="idAper"
            alt="logo"
          />
          <img
            src={bluetooth}
            className={
              this.state.selApp === "idblue" ? "App-logo-selected " : "App-logo"
            }
            id="idblue"
            alt="logo"
          />
          <img
            src={coffee}
            className={
              this.state.selApp === "idcoffee"
                ? "App-logo-selected "
                : "App-logo"
            }
            id="idcoffee"
            alt="logo"
          />
        </div>

        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
