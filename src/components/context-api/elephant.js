import React, { Component } from "react";
import ThemeContext from "./context-all";

class Elephant extends Component {
  state = {
    theme: "white",
  };
  render() {
    const { theme } = this.state;
    const { children } = this.props;
    return (
      <div>
        <h1>This is a Elephant Component</h1>
        {children}
      </div>
    );
  }
}

export default Elephant;
