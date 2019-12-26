import React from "react";
// import logo from "./Icons/logo.svg";
// import aperture from "./Icons/aperture.svg";
// import bluetooth from "./Icons/bluetooth.svg";
// import coffee from "./Icons/coffee.svg";

import "./App.css";
import Navbar from "./Components/Navbar.js";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <Home /> */}
      </div>
    );
  }
}

export default App;
