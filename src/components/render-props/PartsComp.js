import React, { Component } from "react";

class PartsComp extends Component {
  state = {};
  render() {
    const { name, handleClickEvents } = this.props;
    return (
      <div>
        <h1>This is Parts Comp {name}</h1>
        <button onClick={handleClickEvents}>This Button</button>
      </div>
    );
  }
}
export default PartsComp;
