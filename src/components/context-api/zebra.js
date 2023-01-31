import React, { Component } from "react";

class Zebra extends Component {
  state = {};
  render() {
    const { children } = this.props;
    return (
      <div>
        <h1>This is a Zebra Component</h1>
        {children}
      </div>
    );
  }
}

export default Zebra;
