import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import './components/MyComponent.js';
import MyComponent, { MyComp2 } from "./components/MyComponent.js";
import EvenComponent from "./components/EvenComponent.js";
import OddComponent from "./components/OddComponent.js";

// function App() {
class App extends React.Component {
  constructor(props) {
    super(props);
    this.counter = 21;
    this.state = {
      myState: "TBD",
      whatToSay: "What Ever",
      counterState: false
    };
  }

  onPushMe = () => {
    console.log("You pushed me");
    this.counter = this.counter + 1;
    let counterEven = this.counter % 2 === 0 ? true : false;
    this.setState({
      myState: "now:" + this.counter,
      counterState: counterEven
    });
    // Putting the console log here gives False outputs as State has not changed yet
    console.log("counterEven: ", this.state.counterState, this.counter);
  };

  render() {
    console.log("counterEven: ", this.state.counterState, this.counter);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            I am in control of this app and my name is Larry {this.counter},
            {this.state.myState}
          </h1>
          <button onClick={this.onPushMe}>Push Me</button>
          <MyComponent toSay={this.state.whatToSay} toPush={this.onPushMe} />
          {/* React cannot work with non expressions and only Ternary ifs are  supported*/}

          {this.state.counterState ? (
            <EvenComponent countState={this.state.counterState} />
          ) : (
            <OddComponent countState={this.state.counterState} />
          )}
          <MyComp2 />
          <p>
            Edit <code>src/App.js</code> and save to reload: Edited.
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
