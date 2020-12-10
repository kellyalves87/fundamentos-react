import React, { Component } from "react";

class Count extends Component {
  state = {
    number: this.props.initialNumber
  };
  render() {
    return (
      <div>
        <h2>Count</h2>
        <p>{this.state.initialNumber}</p>
      </div>
    );
  }
}

export default Count;
