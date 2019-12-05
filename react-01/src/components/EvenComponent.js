import React from "react";

class EvenComp extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello World from EvenComp {`${this.props.countState}`}</h2>

        {/* {<button onClick={this.props.toPush}> From Even Components </button>} */}
      </div>
    );
  }
}

export default EvenComp;
