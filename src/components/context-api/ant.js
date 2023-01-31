import React, { Component } from "react";
import ThemeContext from "./context-all";

class Ant extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>This is a New Component</h1>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <div>
              <h1>This is a Ant Component</h1>
              <h1>The given theme is {theme}</h1>
            </div>
          )}
        </ThemeContext.Consumer>
      </div>
    );
  }
}
export default Ant;
