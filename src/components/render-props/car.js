import React, { Component } from "react";

class CarComp extends Component {
  state = {
    name: "Rahat",
    counter: 0,
  };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    const { children } = this.props;
    const { counter, name } = this.state;
    return (
      <div>
        <h1>
          This is Car Component {children(name + counter, this.handleClick)}
        </h1>
      </div>
    );
  }
}

export default CarComp;
