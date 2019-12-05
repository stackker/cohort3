import React from "react";

class MyComp extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World from MyComp {this.props.toSay}</h1>

        {<button onClick={this.props.toPush}> From MyComponent </button>}
      </div>
    );
  }
}

export class MyComp2 extends React.Component {
  render() {
    return <h5>sdf form Mycomp2 Class</h5>;
  }
}

export default MyComp;
