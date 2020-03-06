import React from "react";

class OddComp extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello World from OddComp {`${this.props.countState}`}</h2>

        {/* {<button onClick={this.props.toPush}> From Odd Components </button>} */}
      </div>
    );
  }
}

export default OddComp;
