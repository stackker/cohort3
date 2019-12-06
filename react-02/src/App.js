import React from "react";
import logo from "./logo.svg";
import aperture from "./aperture.svg";
import bluetooth from "./bluetooth.svg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Icon">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={aperture} className="App-logo" alt="logo" />
        <img src={bluetooth} className="App-logo" alt="logo" />
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

export default App;
