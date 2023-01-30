import React, { Component } from "react";

class ParentComp extends Component {
  state = {
    prop1: "Nabil",
    prop2: "Sarwar",
  };
  render() {
    console.log('This is Parent Comp');
    const { children } = this.props;
    const { prop1, prop2 } = this.state;
    return children(prop1, prop2);
  }
}

export default ParentComp;
