import React, { Component } from "react";
import ThemeContext from "./context-all";

class Ant extends Component {
  state = {};
  render() {
    const {theme} = this.context;
    return (
      <div>
        <h1>This is a New Component</h1>
            <div>
              <h1>This is a Ant Component</h1>
              <h1>The given theme is {theme}</h1>
            </div>
      </div>
    );
  }
}
Ant.contextType = ThemeContext;
export default Ant;
